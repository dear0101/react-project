import React,{useState} from 'react'
import {Card,Button,Radio} from 'antd'
import './ui.scss';
import { RightOutlined,LeftOutlined,PlusSquareOutlined,SearchOutlined,EditOutlined,LoadingOutlined,VerticalAlignBottomOutlined } from '@ant-design/icons';
function Buttons(){
    let [falg,setFalg]=useState(true);
    let [size,setSize]=useState('default');
    const handleSizeChange=(e) =>{
        // console.log(e.target.value)
        setSize(e.target.value )
    }
    const handleCloseLoading = ()=>{
        setFalg(false);
    }
    return (
        <div className="button-swap">
            <Card title='基础按钮' className='cards-warp'>
                <Button type="primary">ICDJL</Button>
                <Button>ICDJL</Button>
                <Button type="dashed">ICDJL</Button>
                <Button type="danger">ICDJL</Button>
                <Button disabled>ICDJL</Button>
            </Card>
            <Card title='图形按钮'  className='cards-warp'>
                <Button icon={<PlusSquareOutlined />}>创建</Button>
                <Button icon={<EditOutlined />}>编辑</Button>
                <Button shape="circle" icon={<SearchOutlined />}></Button>
                <Button type="primary" icon={<SearchOutlined/>}>搜索</Button>
                <Button icon={<VerticalAlignBottomOutlined />} >下载</Button>
            </Card>
            <Card title='Loading按钮'  className='cards-warp'>
                <Button loading={falg} type="primary" icon={<LoadingOutlined />} onClick={handleCloseLoading}>确定</Button>
                <Button  loading={falg}  type="primary"  shape="circle" ></Button>
                <Button  loading={falg} >点击加载</Button>
                <Button  loading={falg} shape="circle" ></Button>
                <Button  type="primary"  onClick={handleCloseLoading}>关闭</Button>
            </Card>
            <Card title='按钮组'>
                <Button.Group>
                    <Button type="primary"   icon={<LeftOutlined />}>返回</Button>
                    <Button type="primary" icon={<RightOutlined />}>前进</Button>
                </Button.Group>
            </Card>
            <Card title='按钮大小'  className='cards-warp'>
                <Radio.Group  onChange={(e)=>handleSizeChange(e)}>
                    <Radio value="small">小</Radio>
                    <Radio value="default">中</Radio>
                    <Radio value="large">大</Radio>
                </Radio.Group>
                <Button size={size} type="primary">ICDJL</Button>
                <Button size={size}>ICDJL</Button>
                <Button size={size} type="dashed">ICDJL</Button>
                <Button size={size} type="danger">ICDJL</Button>
            </Card>
        </div>
    )
}
 
export default Buttons