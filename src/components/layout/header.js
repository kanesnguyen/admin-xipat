import React, { useState } from 'react'
import { Button, Drawer } from 'antd';
import Sidebar from './sideBar'
import { MenuOutlined } from '@ant-design/icons';
function Header() {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <div className="site-drawer-render-in-current-wrapper px-4 py-2 bg-[#001529]">
                <div className="flex items-center justify-between">
                    <Button type="primary" onClick={showDrawer} icon={<MenuOutlined />}/>
                    <div>
                    <img src="/images/logo.png" alt="/" />
                    </div>
                </div>
                <Drawer
                    className="p-0"
                    placement="left"
                    closable={false}
                    onClose={onClose}
                    open={open}
                    width={'256px'}
                >
                    <Sidebar inDraw={true}/>
                </Drawer>
            </div>
        </div>
    )
}

export default Header