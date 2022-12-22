import React from 'react'
import { Modal } from 'antd';
function Dialog({ post, status, accept, cancel }) {
    return (
        <div>
            <Modal title="Detail Post" open={status} onOk={accept} onCancel={cancel}>
                <h2>{post?.title}</h2>
                <p>{post?.body}</p>
                <p className="font-semibold mt-5">{`Create By: User ${post?.userId}`}</p>
            </Modal>
        </div>
    )
}

export default Dialog