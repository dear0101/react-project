import React from 'react';

import { Modal } from 'antd';
import Util from '../../utils/utils';
function MyModal(props){
    const {targetData, isShowModal,handleOk,handleCancel} =props;
    return (
        <>
            <Modal title="details" visible={isShowModal} onOk={handleOk} onCancel={handleCancel}>
                    {/* {
                        
                    } */}
                    <p>时间: {Util.formateDate(targetData.id)}</p>
                    <p>内容: {targetData.content}</p>
                    <p>状态: {targetData.isCompleted?'已完成':'未完成'}</p>
            </Modal>
        </>
    )
}


export default MyModal;