import React from 'react';
import './index.scss'
import TodoInput from '../../components/Todo-input'
import TodoList from '../../components/Todo-list'
function BikeMap(){
    return (
        <>
            <div className='swarp'>
                <TodoInput/>
                <TodoList/>
            </div>
        </>
    )
}

export default BikeMap;