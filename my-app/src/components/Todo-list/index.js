import React from 'react'
import './index.scss'
import { List,Card,Checkbox,Button } from 'antd';
import {CheckSquareOutlined ,FormOutlined,ClearOutlined } from '@ant-design/icons';
function TodoList(){
    const data = [
        'Racing car sprays burning fuel into crowd.',
    
      ];
        return(
            <div className="todo">
            <Card>
            <List
                size="large"
                bordered
                dataSource={data}
                renderItem={item => <List.Item>{
                    <div className="list-item">
                            <Checkbox ></Checkbox>
                            <p className="item-content">{item}</p>
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