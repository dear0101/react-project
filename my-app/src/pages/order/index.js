import React,{useState,useEffect} from 'react'
import {Card,Button,Table,Form,Select,Modal,message,DatePicker, Space} from 'antd'
import './index.scss';
import Tables from '../../components/Table';
const { RangePicker } = DatePicker;
const { Option } = Select;
function Order(){
    return (
        <div  className="swarp">
            <Card>
            <Form name="control-hooks" >
                <Form.Item
                    name="City"
                    label="城市"
                >
                    <Select
                    placeholder="全部"
                    // onChange={onGenderChange}
                    allowClear
                    >
                    <Option value="GZ">广州</Option>
                    <Option value="SZ">深圳</Option>
                    <Option value="SH">上海</Option>
                    </Select>
                </Form.Item>
                <div className="data-picker">
                    <span>订单时间： </span>
                    <Space direction="vertical" size={12}>
                        <RangePicker
                        showTime={{ format: 'HH:mm' }}
                        format="YYYY-MM-DD HH:mm"
                        />
                    </Space>
                </div>
                <Form.Item
                    name="order"
                    label="订单状态"
                >
                    <Select
                    placeholder="全部"
                    // onChange={onGenderChange}
                    allowClear
                    >
                    <Option value="line">正在使用</Option>
                    <Option value="timeOut">已结束</Option>
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