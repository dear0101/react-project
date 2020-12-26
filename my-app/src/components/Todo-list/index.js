import React ,{useState,useEffect,useCallback}from 'react'
import './index.scss';
import MyModal from '../Modal/addModal';
import EditModal from '../Modal/editModal';
import { List,Card,Checkbox,Button ,Pagination } from 'antd';
import Util from '../../utils/utils';
import {CheckSquareOutlined ,FormOutlined,ClearOutlined } from '@ant-design/icons';
import myMessage from '../../utils/message';
function TodoList(props){
    const {todolist,toRemoveItem,toCompleted,toEditItem} = props;
    let pageSize = 7;
    const [currentPage,setCurrentPage] = useState(1);  //默认当前页
    
    const [todoData,setTodoData] = useState([]);      

    let [isShowModal,setShowModal] = useState(false), //默认查看模态框不显示
        [isShowEditModal,setShowEditModal] = useState(false),  //默认编辑模态框不显示
        [targetData,setTargetData] = useState({}),    //获取查看项
        [targetEditData,setTargetEditData] = useState({});    //获取修改项
        
    //切换列表页
    const onChangePage = (pages,pageSize)=>{
        setCurrentPage(pages)
    }  

    //查看模态框
    const handleCheckChange = useCallback(item=>{
            setTargetData(item)
            setShowModal(true);
    },[])
    
    //修改模态框
    const handleEditChange = useCallback(item=>{
        setTargetEditData(item)
        setShowEditModal(true);
    },[])

    //关闭修改模态框
    const close = useCallback(_=>{
        setShowEditModal(false);
    },[])

    //确认修改
    const handleOk = useCallback((newData,id)=>{
        toEditItem(newData,id)
        setShowEditModal(false);
        myMessage.success('修改成功!',2)
    },[])

    //删除
    const handleRemoveChange = useCallback(item=>{
        toRemoveItem(item)
        myMessage.success('删除成功!',2)
    },[])
    //是否完成
    const CheckChange = useCallback( (id)=>{
        toCompleted(id)
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
                                <Checkbox onChange={()=>CheckChange(item.id)} checked={item.isCompleted}></Checkbox>
                                <p className="item-content" style={{textDecoration: item.isCompleted?"line-through":"none" }}>{item.content}</p>
                                <div className="btn-operator">
                                    <Button type="primary"  icon={<CheckSquareOutlined />}   onClick={()=>handleCheckChange(item)}>查看</Button>
                                    <Button danger  icon={<FormOutlined />} onClick={()=>handleEditChange(item)}>编辑</Button>
                                    <Button type="danger" onClick={()=>handleRemoveChange(item)} icon={<ClearOutlined />}>删除</Button>
                                </div>
                        </div>
                        }</List.Item>}
                />
                    <div className="pagination">
                        <Pagination defaultCurrent defaultPageSize={pageSize} defaultCurrent={1} total={todolist.length} onChange={ onChangePage}  />
                    </div>
                </Card>
                <MyModal targetData={targetData} isShowModal={isShowModal} handleOk={()=>setShowModal(false)}/>

                <EditModal targetEditData={targetEditData} isShowEditModal={isShowEditModal}  close={close} handleOk={handleOk}/>
            </div>
            
        )
}

export default TodoList;