import React, {useEffect,useState} from 'react';
import './index.scss';
import {useHistory } from 'react-router-dom';
function Form(props){
    const [nowPath,setNowPath] = useState(useHistory)
    useEffect(() => {
        redirectPath()

    },[])

    const redirectPath=()=>{
        console.log(nowPath)
    }

    return (
        <>form</>
    )
}

export default Form