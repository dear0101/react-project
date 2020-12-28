import React from 'react';
import {Row,Col} from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router,Redirect,Switch} from "react-router-dom";
import NavLeft from './components/NavLeft';
import Routes from './router/route';
function App (){
        return (
            <Router>
            <Row className="container">
                <Col span='3' className="nav-left">
                  <NavLeft/>
                </Col>
                <Col span='21' className="main">
                   <Header/>
                    <Row className="content">
                        <Switch>
                            <Routes/>
                            <Redirect exact  from="/" to="/home" />
                        </Switch>
                    </Row>  
                    <Footer/>
                </Col>
            </Row>
            </Router>
        )
}

export default App;