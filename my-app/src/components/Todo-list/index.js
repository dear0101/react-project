import React ,{useState,useEffect}from 'react'
import './index.scss'
import { List,Card,Checkbox,Button } from 'antd';
import {getStorages} from '../../utils/storage';
import {CheckSquareOutlined ,FormOutlined,ClearOutlined } from '@ant-design/icons';
function TodoList(props){
    const {todolist,onCheckChange} = props;
        return(
            <div className="todo">
            <Card>
            <List
                size="large"
                bordered
                dataSource={todolist}
                renderItem={item => <List.Item>{
                    <div className="list-item">
                            <Checkbox onChange={()=>onCheckChange(item.id)} checked={item.isCompleted}></Checkbox>
                            <p className="item-content" style={{textDecoration: item.isCompleted?"line-through":"none" }}>{item.content}</p>
                            <div className="btn-operator">
                                <Button type="primary"  icon={<CheckSquareOutlined />}>查看</Button>
                                <Button danger  icon={<FormOutlined />}>编辑</Button>
                                <Button type="danger"  icon={<ClearOutlined />}>删除</Button>
                            </div>
                    </div>
                    }</List.Item>}
                />
            </Card>
            </div>
            
        )
}

export default TodoList;