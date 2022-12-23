import React, { useState } from 'react'
import { Table, Tag } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import Dialog from './Dialog';
import axios from 'axios';
function TableManager({ data }) {
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const handleChange = (pagination, filters, sorter) => {
        setFilteredInfo(filters);
        setSortedInfo(sorter);
      };
    const [dialog, setDialog] = useState({
        open: false,
        post: null,
        loading: false,
    });
    const showDetail = async (id) => {
        if (!dialog.post || id !== dialog.post.id) {
            setDialog({ ...dialog, loading: true, open: true });
            await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(response => setDialog({ open: true, post: response.data, loading: false }))
                .catch(err => console.log(err))
        }
        else {
            setDialog({ ...dialog, open: true })
        }
    }
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: 100,
            align: 'center',
        },
        {
            title: 'User ID',
            dataIndex: 'userId',
            key: 'userId',
            width: 100,
            align: 'center',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            width: 300,
            align: 'left',
            render: (text) => <p className='truncate' key={text}>{text}</p>,
            filteredValue: filteredInfo.title || null,
            onFilter: (value, record) => record.title.includes(value),
            sorter: (a, b) => ('' + a.title).localeCompare(b.title),
            sortOrder: sortedInfo.columnKey === 'title' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Action',
            key: 'action',
            align: 'center',
            width: 100,
            fixed: 'right',
            render: (_, record) => (
                <Tag onClick={() => { showDetail(record.id); }} color={'green'} key={record.id} className='w-8 h-8 flex items-center justify-center mx-auto cursor-pointer'>
                    <EyeOutlined />
                </Tag>
            ),
        },
    ];
    return (
        <div>
            <Table rowKey="id" columns={columns} dataSource={data} onChange={handleChange} scroll={{ y: '70vh' }}/>
            <Dialog loading={dialog.loading} post={dialog.post} status={dialog.open} accept={() => setDialog({ ...dialog, open: false })} cancel={() => setDialog({ ...dialog, open: false })} />
        </div>
    )
}

export default TableManager