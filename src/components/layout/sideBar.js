import React, { useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";

import {
    SettingOutlined,
    DesktopOutlined,
    PieChartOutlined,
    LeftOutlined
} from '@ant-design/icons';
import { Menu, Button } from 'antd';
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('Dashboard', '/dashboard', <PieChartOutlined />),
    getItem('Posts Manager', '/posts-manager', <DesktopOutlined />),
    getItem('Setting', '/setting', <SettingOutlined />),
];
function SideBar() {
    const navigate = useNavigate();
    const location = useLocation();

    const [expand, setExpand] = useState(false);

    function handleClick({ key }) {
        navigate(key);
    }
    return (
        <div className={`flex flex-col items-center justify-between bg-[#001529] text-[#fff] min-h-screen ${expand ? 'w-auto' : 'w-[256px]'}`}>
            <div>
                <div className={expand ? 'd-none' : 'd-block'}>
                    <img src="/images/logo.png" alt="/" className={'mx-auto block mt-10'} />
                </div>
                <div className='flex flex-col gap-5 text-xl items-center pt-8'>
                    <div
                        style={{
                            width: expand ? 'auto' : 256,
                        }}
                    >
                        <Menu
                            defaultSelectedKeys={[`/${location.pathname.split('/')[1]}`]}
                            mode="inline"
                            theme="dark"
                            inlineCollapsed={expand}
                            items={items}
                            onClick={handleClick}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full p-3">
                <Button onClick={() => setExpand(!expand)} type="primary" className="w-full" icon={<LeftOutlined />}>
                    {
                        expand || 'Collapse Sidebar'
                    }
                </Button>
            </div>
        </div>
    )
}

export default SideBar