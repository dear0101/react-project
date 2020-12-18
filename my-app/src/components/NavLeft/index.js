import React from 'react';
import { Menu,Icon } from 'antd';
import MenuConfig from './../../resource/menuConfig';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import './index.scss';

const SubMenu = Menu.SubMenu;
function NavLeft() {
    const handleClick=(e)=>{
        console.log('click', e);
    }
    return (
        <Router>
        <div className="logo">
                <h1>DEAR DJL</h1>               
                <Menu  theme="dark"  mode="vertical" onClick={handleClick} >
                {
                        MenuConfig.map((item,index)=>{
                            return (
                                <SubMenu  key={index}  title={item.title} >
                                    {
                                        item.children&&item.children.map((item1,index1)=>{
                                            return (
                                                
                                                    <Menu.Item key={index1}>
                                                        <Link to={item1.key}>
                                                        {item1.title}
                                                        </Link>    
                                                    </Menu.Item>
                                            )
                                        })
                                    }
                                </SubMenu>
                            )
                        })
                    }
                </Menu>     
                
        </div>
        </Router>
    )
}

export default NavLeft;