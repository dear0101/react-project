import React ,{useRef,useEffect}from 'react';

import { Modal,Input,Checkbox } from 'antd';
import Util from '../../../utils/utils';
import myMessage from '../../../utils/message';

const { TextArea } = Input;


function MyEditModal (props){

    const   {targetEditData, isShowEditModal,handleOk,close} = props,
            editRef = useRef(),
            checkRef = useRef();
    useEffect(()=>{
        console.log("111")
    },[])      
    //组装新数据     
    const isOK = ()=>{
        let val = editRef.current.props.value.trim()
        console.log(val);
        console.log(checkRef.current.state.checked);
        if(val.length===0){
            editRef.current.props.value=targetEditData.content     
            myMessage.warning('数据未修改!',2)
            return ;
        }
        const newData = {
            id:new Date().getTime(),
            content:val,
            isCompleted:checkRef.current.state.checked
        }
        handleOk(newData,targetEditData.id)
    }

    return (
        <>
            <Modal title="details" visible={isShowEditModal} onOk={isOK} onCancel={close}>
                    <p>时间:&nbsp;&nbsp;&nbsp;&nbsp;{Util.formateDate(targetEditData.id)}</p>
                    <p style={{display:'flex',alignItems: 'center'}}>
                    内容:&nbsp;&nbsp;&nbsp;&nbsp;<TextArea ref={editRef} style={{width:'90%'}} defaultValue={targetEditData.content} autoSize  />
                    </p>
                    <p>状态:&nbsp;&nbsp;&nbsp;&nbsp;<Checkbox ref={checkRef} defaultChecked={targetEditData.isCompleted?true:false}></Checkbox></p>
            </Modal>
        </>
    )
}


export default MyEditModal;