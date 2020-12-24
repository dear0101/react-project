import React,{useState,useEffect} from 'react';
import "./index.scss"
import { Card ,Input,Button } from 'antd';
import {EditOutlined } from '@ant-design/icons';
function TodoInput(props){
    const {addItem}=props;
    const [inputVal,SetinputVal]=useState('');
    const submitValue=()=>{
        if(inputVal.trim().length===0){
            return;
        }
        addItem(inputVal)
        SetinputVal('')
    }
    const onInputChange=(e)=>{
        SetinputVal(e.target.value)
    }
    return (
        <div className="swarp">
            <Card>
                <div className="card-todo">
                    <span className="todo-title">TODOLISTS</span>
                    <div className="card-input">
                        <Input placeholder="Add Your TodoItem"  value={inputVal} onChange={onInputChange} onPressEnter={submitValue}/>
                    </div>
                    <Button type="primary" icon={<EditOutlined />}  onClick={submitValue}>新增</Button>
                </div>
            </Card>
        </div>
       
    )
}

export default TodoInput;