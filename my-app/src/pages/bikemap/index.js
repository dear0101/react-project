import React ,{useState,useEffect,useCallback}from 'react';
import './index.scss';
import TodoInput from '../../components/Todo-input';
import TodoList from '../../components/Todo-list';
import {setStorages,getStorages} from '../../utils/storage';


function BikeMap(){
    let [todolist,setTodolist]=useState([]); 

    useEffect(()=>{
        const todoData=JSON.parse(getStorages())
        setTodolist(todoData);
    },[]) 

    useEffect(()=>{
        setStorages(todolist);   
    },[todolist])

    const addItem=useCallback((value)=>{
        let data = {
            id:new Date().getTime(),
            content:value,
            isCompleted:false,
        }
        setTodolist(()=>[data,...todolist])
    },[])

    const onCheckChange=useCallback((id)=>{
        // todolist.forEach((item)=>{
        //        if(id===item.id){
        //         item.isCompleted=!item.isCompleted
        //     }
        //     })
    },[])
    return (
        <>
            <div className='swarp'>
                <TodoInput  addItem={addItem}/>
                <TodoList onCheckChange={onCheckChange} todolist={todolist}/>
            </div>
        </>
    )
}

export default BikeMap;