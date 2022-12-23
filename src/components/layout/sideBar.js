import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";

import {
    SettingOutlined,
    DesktopOutlined,
    PieChartOutlined,
    LeftOutlined,
    RightOutlined
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
function SideBar(inDraw) {
    const navigate = useNavigate();
    const location = useLocation();

    const [expand, setExpand] = useState(false);

    function handleClick({ key }) {
        navigate(key);
    }
    useEffect(() => {
        if(inDraw) {
            setExpand(false)
        }
        else {
            setExpand(window.innerWidth <= 768)
        }
    }, [inDraw])
    return (
        <div className={`flex flex-col items-center justify-between bg-[#001529] text-[#fff] min-h-screen ${expand ? 'w-auto' : 'md:w-[256px]'}`}>
            <div>
                <div className={expand ? 'hidden' : 'hidden md:block'}>
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
            <div className="w-full p-3 hidden md:block">
                    <Button onClick={() => setExpand(!expand)} type="primary" className="w-full" icon={!expand ? <LeftOutlined /> : <RightOutlined />}>
                        {
                            expand || 'Collapse Sidebar'
                        }
                    </Button>
                </div>
        </div>
    )
}

export default SideBar