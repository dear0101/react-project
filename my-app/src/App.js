import React from 'react';
import {Row,Col} from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router,Route} from "react-router-dom";
import NavLeft from './components/NavLeft';
import Home from './pages/home';
import Buttons from './pages/ui/Buttons';
import menuConfig from './router/menuConfig';
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
                        <Route  path='/ui/buttons' component={Buttons}/>
                        <Route  path='/home' exact component={Home}/>
                    </Row>  
                    <Footer/>
                </Col>
            </Row>
            </Router>
        )

}

export default App;