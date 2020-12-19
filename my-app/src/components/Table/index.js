import React from 'react';
import { Table, Button } from 'antd';
import DataList from '../../pages/order/orderList';

function Tables(){

    
    const data = [];
        return (
            <div style={{ marginBottom: 16 }}>
                <Table align='center' columns={DataList} dataSource={data} />
            </div>
        );
}


export default Tables;