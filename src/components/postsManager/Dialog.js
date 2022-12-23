import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import { Modal, Spin } from 'antd';
function Dialog({ post, status, accept, cancel, loading }) {
    return (
        <div>
            <Modal title="Detail Post" open={status} onOk={accept} onCancel={cancel}>
                {loading ? <div
                    className="py-4 mx-auto flex items-center justify-center"><Spin indicator={<LoadingOutlined
                        style={{
                            fontSize: 36,
                        }}
                        spin
                    />} /></div> : <div><h2>{post?.title}</h2>
                    <p>{post?.body}</p>
                    <p className="font-semibold mt-5">{`Create By: User ${post?.userId}`}</p></div>}

            </Modal>
        </div>
    )
}

export default Dialog