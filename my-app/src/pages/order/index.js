import React,{useState,useEffect} from 'react'
import {Card,Button,Table,Form,Select,Modal,message} from 'antd'
import './index.scss';
import Tables from '../../components/Table';
const { Option } = Select;
function Order(){
    return (
        <div  className="card-swap">
            <Card>
            <Form name="control-hooks" >
                <Form.Item
                    name="gender"
                    label="城市"
                >
                    <Select
                    placeholder="全部"
                    // onChange={onGenderChange}
                    allowClear
                    >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="gender"
                    label="用车模式"
                >
                    <Select
                    placeholder="全部"
                    // onChange={onGenderChange}
                    allowClear
                    >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="gender"
                    label="运营模式"
                >
                    <Select
                    placeholder="全部"
                    // onChange={onGenderChange}
                    allowClear
                    >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="gender"
                    label="加盟商授权状态"
                >
                    <Select
                    placeholder="全部"
                    // onChange={onGenderChange}
                    allowClear
                    >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                    </Select>
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="tijiao">
                        查询
                    </Button>
                    <Button htmlType="button" >
                    取消
                    </Button>
                </Form.Item>
            </Form>
            </Card>
            <Card className="card-button">
                <Button>订单详情</Button>
                <Button>结束订单</Button>
            </Card>
            <Card className="card-table">
                <Tables/>
            </Card>
        </div>
    )
}

export default Order