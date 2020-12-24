import {message} from 'antd'

 let myMessage ={
    
    success:(content,timeOut)=> {
        return    message.warning(content,timeOut);
    },
    warning:(content,timeOut)=>{
        return  message.warning(content,timeOut);
    },
    error:(content,timeOut)=>{
        return  message.error(content,timeOut);
    }
}
export default myMessage;