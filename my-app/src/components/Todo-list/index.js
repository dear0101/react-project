import React ,{useState,useEffect}from 'react'
import './index.scss'
import { List,Card,Checkbox,Button ,Pagination } from 'antd';
import Util from '../../utils/utils'
import {CheckSquareOutlined ,FormOutlined,ClearOutlined } from '@ant-design/icons';
function TodoList(props){
    const {todolist,onCheckChange} = props;
    let pageSize=7;
    const [currentPage,setCurrentPage]=useState(1);
    const [todoData,setTodoData]=useState([]);
    
    const onChangePage=(pages,pageSize)=>{
        setCurrentPage(pages)
    }  

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
                                <Button type="primary"  icon={<CheckSquareOutlined />}>查看</Button>
                                <Button danger  icon={<FormOutlined />}>编辑</Button>
                                <Button type="danger"  icon={<ClearOutlined />}>删除</Button>
                            </div>
                    </div>
                    }</List.Item>}
                />
                <div className="pagination">
                    <Pagination defaultCurrent defaultPageSize={pageSize} defaultCurrent={1} total={todolist.length} onChange={ onChangePage}  />
                </div>
            </Card>
            </div>
            
        )
}

export default TodoList;