import React from 'react';
import { Menu } from 'antd';
import MenuConfig from '../../router/menuConfig';
import {Link} from "react-router-dom";
import './index.scss';

const SubMenu = Menu.SubMenu;
function NavLeft() {
    
    return (
        <div className="logo">
                <h1>DEAR DJL</h1>               
                <Menu   theme="dark"  mode="vertical">
                {
                        MenuConfig.map((item,index)=>{
                            return (
                                    item.children?
                                    <SubMenu key={index} title={item.title}>
                                        {item.children.map((item)=>{
                                            return (
                                                <Menu.Item key={item.key}> <Link to={item.key}>{item.title}</Link></Menu.Item>
                                            )
                                        })}
                                    </SubMenu>
                                    :<Menu.Item key={index}>
                                        <Link to={item.key}>{item.title}</Link>
                                    </Menu.Item>
                            )
                        })
                    }
                </Menu>     
                
        </div>
    )
}

export default NavLeft;