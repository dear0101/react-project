import React from 'react';
import "./index.scss"
import { Card ,Input,Button } from 'antd';
import {EditOutlined } from '@ant-design/icons';
const { Search } = Input;
function TodoInput(){
    return (
        <div className="swarp">
            <Card>
                <div className="card-todo">
                    <span className="todo-title">TODOLISTS</span>
                    <div className="card-input">
                        <Input placeholder="Add Your TodoItem" />
                    </div>
                    <Button type="primary" icon={<EditOutlined />}>新增</Button>
                </div>
            </Card>
        </div>
       
    )
}

export default TodoInput;