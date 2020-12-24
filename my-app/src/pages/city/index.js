import React from 'react'
import {Card,Button,Form,Select} from 'antd'
import './index.scss';

const { Option } = Select;
function City(){
    return (
        <div className="swarp">
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
                <Form.Item
                    name="CarModel"
                    label="用车模式"
                >
                    <Select
                    placeholder="全部"
                    // onChange={onGenderChange}
                    allowClear
                    >
                    <Option value="male">扫码解锁</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="ClaModel"
                    label="运营模式"
                >
                    <Select
                    placeholder="全部"
                    // onChange={onGenderChange}
                    allowClear
                    >
                    <Option value="outLine">线下投放</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="handle"
                    label="加盟商授权状态"
                >
                    <Select
                    placeholder="全部"
                    // onChange={onGenderChange}
                    allowClear
                    >
                    <Option value="yi">已授权</Option>
                    <Option value="wei">未授权</Option>
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
        </div>
    )
}

export default City