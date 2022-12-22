import React, { useState } from 'react'
import { Table, Tag } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import Dialog from './Dialog';
import axios from 'axios';
function TableManager({ data }) {
    const [dialog, setDialog] = useState({
        open: false,
        post: null,
    });
    const showDetail = async (id) => {
        if ( !dialog.post || id !== dialog.post.id) {
            await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => setDialog({ post: response.data, open: true }))
            .catch(err => console.log(err))
        }
    }
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            align: 'center',
        },
        {
            title: 'User ID',
            dataIndex: 'userId',
            key: 'userId',
            align: 'center',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            align: 'left',
            render: (text) => <p className='truncate' key={text}>{text}</p>,
        },
        {
            title: 'Action',
            key: 'action',
            align: 'center',
            render: (_, record) => (
                <Tag onClick={() => { showDetail(record.id); }} color={'green'} key={record.id} className='w-8 h-8 flex items-center justify-center mx-auto cursor-pointer'>
                    <EyeOutlined />
                </Tag>
            ),
        },
    ];
    return (
        <div>
            <Table rowKey="id" columns={columns} dataSource={data} />
            <Dialog post={dialog.post} status={dialog.open} accept={() => setDialog({ ...dialog, open: false })} cancel={() => setDialog({ ...dialog, open: false })} />
        </div>
    )
}

export default TableManager