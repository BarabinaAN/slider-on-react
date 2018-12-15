import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
	color: #464646;
	font-size: 18px;
	font-weight: 300;
	line-height: 22px;
`
const WorkTime = styled.div`
	color: #2a2a2a;
	font-size: 12px;
	font-weight: 300;
	line-height: 24px;

	span{
		display: block;
		color: #464646;
		font-size: 21px;
		font-weight: 700;
		line-height: 24px;
	}
`

const Calls = styled.div`
	color: #2a2a2a;
	font-size: 12px;
	font-weight: 300;
	line-height: 24px;

	span{
		display: block;
		color: #464646;
		font-size: 21px;
		font-weight: 700;
		line-height: 24px;
	}
`

const CallBtn = styled.div`
	width: 173px;
	height: 45px;
	color: #ffffff;
	font-size: 14px;
	font-weight: 400;
	line-height: 45px;
	text-align: center;
	background-color: #3fc7db;	
	border-radius: 22px;

	&:hover {
		opacity: .8;
		cursor: pointer;
	}
`

class Adress extends Component{
	render() {
		return (
			<span>{this.props.addr}</span>
			)
	}
}

class TelNumber extends Component{
	render() {
		return (
			<span>{this.props.tell}</span>
			)
	}
}

class Menu extends Component {
  render() {
    return (
    	<div>
    		<Row>
    			<Col lg={3}>
    				<Repair>
    					Ремонт айфонов в сервисном центре на выезде
    				</Repair>
    			</Col>
    			<Col lg={3} lgOffset={1}>
				    <WorkTime>
				    	Пн-пт с 10 до 20, сб,вс с 11 до 18
				    	<Adress addr="Ленинская, 301" />
				    </WorkTime>			
    			</Col>
    			<Col lg={3}>
	    			<Calls>
	    				Звонки принимаются 24 часа
	    				<TelNumber tell="8 (846) 922 55 44" />
	    			</Calls>	
    			</Col>
    			<Col lg={2}>
    				<CallBtn>Заказать звонок!</CallBtn>
    			</Col>
    		</Row>
    	</div>
    );
  }
}

export default Menu;