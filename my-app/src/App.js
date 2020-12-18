import React from 'react';
import {Row,Col} from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import {Route} from 'react-router-dom'
import NavLeft from './components/NavLeft';
import Home from './pages/home';
import MenuConfig from './resource/menuConfig';
function App (){
        return (
            <>
            <Row className="container">
                <Col span='3' className="nav-left">
                  <NavLeft/>
                </Col>
                <Col span='21' className="main">
                   <Header/>
                    <Row className="content">
                        {
                            MenuConfig.map((item,index)=>{
                               item.children&& item.children.map((item,index)=>{
                                // <Route path={item.key} component={COOOO}/>
                               })
                            })
                        }
                       
                    </Row>  
                    <Footer/>
                </Col>
            </Row>
            </>
        )

}

export default App;