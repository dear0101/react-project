import React ,{useState,useEffect,useCallback}from 'react';
import './index.scss';
import TodoInput from '../../components/Todo-input';
import TodoList from '../../components/Todo-list';
import {setStorages,getStorages} from '../../utils/storage';


function BikeMap(){
    const [todolist,setTodolist]=useState([]);
    useEffect(()=>{
       let  todoData=JSON.parse(getStorages()) ;
       setTodolist(todoData);
    },[])
    const addItem=(value)=>{
        let data={
            id:new Date().getTime(),
            content:value,
            isCompleted:false,
        }
        setTodolist(()=>[data,...todolist])   
        setStorages(data)
    }
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