import React, { useEffect, useState } from 'react';
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails, payOrder } from '../actions/orderActions';
import { ORDER_PAY_RESET } from '../constants/orderConstants';

function OrderScreen() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id: orderId } = useParams();
    const [sdkReady, setSdkReady] = useState(false);

    const orderDetails = useSelector(state => state.orderDetails);
    const { order, error, loading } = orderDetails;

    const orderPay = useSelector(state => state.orderPay);
    const { loading: loadingPay, success: successPay } = orderPay;

    if (!loading && !error) {
        order.itemsPrice = order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2);
    }

    const addPayPalScript = () => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://www.paypal.com/sdk/js?client-id=AWWGzJy5pLKX7QTZRwepr0FmdQS05xqfHI1ikG06MHDbMBmIp9qW3urnTdfWLx_AhK3yFzkONiBoFGzU';
        script.async = true;
        script.onload = () => {
            setSdkReady(true);
        };
        document.body.appendChild(script);
    }

    useEffect(() => {
        if (!order || successPay || order._id !== Number(orderId)) {
            dispatch({type:ORDER_PAY_RESET})
            dispatch(getOrderDetails(orderId));
        } else if (!order.isPaid) {
            if (!window.paypal) {
                addPayPalScript();
            } else {
                setSdkReady(true);
            }
        }
    }, [dispatch, order, orderId, successPay]);

    const successPaymentHandler = (paymentResult) => {
        dispatch(payOrder(orderId, paymentResult));
    }

    return (
        <PayPalScriptProvider options={{ "client-id": "AWWGzJy5pLKX7QTZRwepr0FmdQS05xqfHI1ikG06MHDbMBmIp9qW3urnTdfWLx_AhK3yFzkONiBoFGzU" }}>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <div>
                    <h1>Order: {order._id}</h1>
                    <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p><strong>Name: </strong> {order.user.name}</p>
                            <p><strong>Emaile: </strong> <a href={`mailto:${order.user.email}`}>{order.user.email}</a></p>

                            <p>
                                <strong>Shipping: </strong>
                                {order.shippingAddress.address},   {order.shippingAddress.city},
                                {'  '}
                                {order.shippingAddress.postalCode},
                                {'  '}
                                {order.shippingAddress.country}
                            </p>

                            {order.isDelivered ? (
                                <Message variant='success'>Delivered on {order.deliveredAt}</Message>
                            ) : ( 
                                <Message variant='warning'>Not Delivered</Message>
                                )}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Payment Method</h2>

                            <p>
                                <strong>Method: </strong>
                                {order.paymentMethod}
                            </p>
                            {order.isPaid ? (
                                <Message variant='success'>Paid on {order.paidAt}</Message>
                            ) : ( 
                                <Message variant='warning'>Not Paid</Message>
                                )}

                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Order Items</h2>
                            {order.orderItems.length === 0 ? <Message variant='info'>
                                Order is empty
                            </Message> : (
                                <ListGroup variant='flush'>
                                    {order.orderItems.map((item, index) => (
                                        <ListGroup.Item key={index}>
                                            <Row>
                                                <Col md={1}>
                                                    <Image src={item.image} alt={item.name} fluid rounded/>
                                                </Col>

                                                <Col>
                                                <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                </Col>

                                                <Col md={4}>
                                                    {item.qty} X{item.price} = ${(item.qty * item.price).toFixed(2)}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}
                        </ListGroup.Item>


                    </ListGroup>
                </Col>

                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Items:</Col>
                                    <Col>${order.itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping:</Col>
                                    <Col>${order.shippingPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax:</Col>
                                    <Col>${order.taxPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Total:</Col>
                                    <Col>${order.totalPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            {!order.isPaid && (
                                <ListGroup.Item>
                                    {loadingPay && <Loader/>}

                                    {!sdkReady ? (
                                        <Loader/>
                                    ) : (
                                        <PayPalButtons
                                        createOrder={(data, actions) => {
                                            return actions.order.create({
                                                purchase_units: [
                                                    {
                                                        amount: {
                                                            value: order.totalPrice,
                                                        },
                                                    },
                                                ],
                                            });
                                        }}
                                        onApprove={(data, actions) => {
                                            return actions.order.capture().then(function (details) {
                                                successPaymentHandler(details);
                                            });
                                        }}
                                    /> 
                                    )}
                                </ListGroup.Item>
                            )}


      
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
                </div>
            )}
        </PayPalScriptProvider>
    );
}

export default OrderScreen;


