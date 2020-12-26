import React ,{useState,useEffect,useCallback}from 'react';
import './index.scss';
import TodoInput from '../../components/Todo-input';
import TodoList from '../../components/Todo-list';
function BikeMap(){
    const [todolist,setTodolist] = useState([]); 
    useEffect(()=>{
        setTodolist(JSON.parse(localStorage.getItem('todolist')||'[]'));
    },[]) 
    //添加
    const addItem = useCallback((value)=>{
        const dataItem = {
            id:new Date().getTime(),
            content:value,
            isCompleted:false,
        }
        setTodolist((todolist)=>[dataItem,...todolist])
    },[])

    //删除
    const toRemoveItem = useCallback((item)=>{
        console.log(item)
        setTodolist((todolist)=>todolist.filter(items=>items.id!==item.id))
    },[])
    
    //修改
    const toEditItem = useCallback((newItem,id)=>{
        console.log(id)
        setTodolist((todolist)=>
        todolist.map(items=>{
        if(items.id===id){
            items=newItem
        }
        return items;
        }))
    },[])
    //是否完成
    const toCompleted = useCallback((id)=>{
        setTodolist((todolist)=>
        todolist.map(item=>{
        if(item.id===id){
            item.isCompleted=!item.isCompleted;
        }
        return item;
    }))
    },[])
    useEffect(()=>{
        localStorage.setItem('todolist',JSON.stringify(todolist)); 
    },[todolist])

    return (
        <>
            <div className='swarp'>
                <TodoInput  addItem={addItem}/>
                <TodoList  todolist={todolist} toRemoveItem={toRemoveItem} toCompleted={toCompleted} toEditItem={toEditItem}/>
            </div>
        </>
    )
}

export default BikeMap;