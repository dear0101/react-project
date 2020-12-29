import { Col, Row } from 'antd';
import React,{useState,useEffect}from 'react';
import './index.scss';
import Util from '../../utils/utils'

function Header(){
    const [userName,setUserName] =useState('DJL');
    let [sysTime,setSysTime] =useState('');

    useEffect(()=>{
        setInterval(()=>{
            setSysTime( Util.formateDate(new Date().getTime())) 
        },1000)
    },[])

    return (
        <div className="header">
            <Row className="header-top">
                <Col span="24">
                    <span>欢迎，{userName}</span>
                    <a href="#">退出</a>
                </Col>
            </Row>
            <Row className="breadcrumb">
                <Col span="4" className="breadcrumb-title">
                   首页
                </Col>
                <Col span="20" className="breadcrumb-weather">
                    <span className="date">{sysTime}</span>
                    <span className="weather-detail">晴转多云</span>
                </Col>
            </Row>
        </div>
    )
}

export default Header;