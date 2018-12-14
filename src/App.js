import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SayFullName name="Natalya" surname="Barabina" link="vk.com"/>
        <SayFullName name="Anonim" surname="Anonim" link="vk.com"/>
        <SayFullName name="Victorya" surname="Barabina" link="#"/>
      </div>
    );
  }
}

function SayFullName(props) {
  return (
      <div>
        <h1> Имя - {props.name}. Фамилия - {props.surname}</h1>
        <a href={props.link}> Профиль </a>
      </div> 
    )
}

export default App;
