import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components';

import Header from './components/Header';
import Main from './components/Main';
import Menu from './components/Menu';

const url = process.env.PUBLIC_URL+'/img/bg.png';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 48px;
  background: rgba(36, 36, 36, 0.8);
`
const MenuWrapper = styled.div`
  width: 100%;
  height: 89px;
  padding-top: 20px;
`

const MainWrapper = styled.div`
  width: 100%;
  height: 562px;
  padding-top: 130px;
  background: url(${url}) no-repeat;
  bachground-size: cover;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderWrapper>
          <Grid>
            <Header />        
          </Grid>
        </HeaderWrapper>   

        <MenuWrapper>
          <Grid>
            <Menu />     
          </Grid>
        </MenuWrapper>  

        <MainWrapper>
          <Grid>
            <Main />     
          </Grid>
        </MainWrapper>           
      </div>
    );
  }
}


export default App;
