import React ,{useState,useEffect,useCallback}from 'react'
import './index.scss';
import MyModal from '../Modal';
import { List,Card,Checkbox,Button ,Pagination } from 'antd';
import Util from '../../utils/utils';
import {CheckSquareOutlined ,FormOutlined,ClearOutlined } from '@ant-design/icons';
function TodoList(props){
    const {todolist,onCheckChange} = props;
    let pageSize=7;

    const [currentPage,setCurrentPage]=useState(1);  //默认当前页
    
    const [todoData,setTodoData]=useState([]);      

    let [isShowModal,setShowModal]=useState(false);  //默认模态框不显示

    const [targetData,setTargetData]=useState({});

    //切换列表页
    const onChangePage=(pages,pageSize)=>{
        setCurrentPage(pages)
    }  

    //查看模态框
    const handleChange=useCallback((type,item)=>{
        if(type===1){
            setTargetData(item)
            setShowModal(true);

        }
        if( type===2){
            setShowModal(true);
            
        }
    },[])

    
    useEffect(() => {
        setTodoData(Util.pagination(todolist,pageSize,currentPage))
    },[currentPage,todolist])

        return(
            <div className="todo">
                <Card>
                <List 
                    size="large"
                    bordered
                    dataSource={todoData}
                    renderItem={item => <List.Item>{
                        <div className="list-item">
                                <Checkbox onChange={()=>onCheckChange(item.id)} checked={item.isCompleted}></Checkbox>
                                <p className="item-content" style={{textDecoration: item.isCompleted?"line-through":"none" }}>{item.content}</p>
                                <div className="btn-operator">
                                    <Button type="primary"  icon={<CheckSquareOutlined />}   onClick={()=>handleChange(1,item)}>查看</Button>
                                    <Button danger  icon={<FormOutlined />}>编辑</Button>
                                    <Button type="danger" onClick={()=>handleChange(2,item)} icon={<ClearOutlined />}>删除</Button>
                                </div>
                        </div>
                        }</List.Item>}
                />
                    <div className="pagination">
                        <Pagination defaultCurrent defaultPageSize={pageSize} defaultCurrent={1} total={todolist.length} onChange={ onChangePage}  />
                    </div>
                </Card>
                <MyModal targetData={targetData} isShowModal={isShowModal} handleCancel={()=>setShowModal(false)} handleOk={()=>setShowModal(false)}/>
            </div>
            
        )
}

export default TodoList;