import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Slider from './Slider';

const Repair = styled.div`
	color: #ffffff
	font-size: 40px;
	font-weight: 700;
	line-height: 35px;

	span{
		display: block;
		font-size: 24px;
	}
`
const Text = styled.div`
	padding-top: 40px;
	color: #ffffff;
	font-size: 18px;
	font-weight: 300;
	line-height: 28px;
`

const CallBtn = styled.button`
	width: 245px;
	height: 64px;
	margin-top: 35px;
	color: #ffffff;
	font-size: 18px;
	font-weight: 400;
	line-height: 60px;
	background-color: #ffa14b;	
	border: none;
	border-radius: 32px;

	&:hover {
		opacity: .8;
		cursor: pointer;
	}
`

class Main extends Component {
  render() {
    return (
    	<Row>
    		<Col lg={5}>
	    		<Repair>
	    			Качественный ремонт
	    			<span>iphone за 35 минут и гарантия 1 год</span>
	    		</Repair>
	    		<Text>
		    		Оставьте заявку на бесплатную диагностику без очереди,
		    		и получите защитное стекло, стоимостью 1000 рублей,
		    		с установкой в подарок!
	    		</Text>
	    		<CallBtn>
	    			Отправить заявку!
	    		</CallBtn>
    		</Col>
    		<Col lg={6} lgOffset={1}>
    			<Slider />
    		</Col>
    	</Row>
    );
  }
}

export default Main;