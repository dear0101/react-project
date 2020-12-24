import React from 'react';
import {Row,Col} from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router} from "react-router-dom";
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
                            <Routes/>
                    </Row>  
                    <Footer/>
                </Col>
            </Row>
            </Router>
        )

}

export default App;