import React, { useState } from 'react'
import { FundViewOutlined } from '@ant-design/icons';
function SideBar() {
    // eslint-disable-next-line
    const [expand, setExpand] = useState(true);
    return (
    <div className={`bg-[#1b2130] text-[#fff] min-h-screen ${expand ? 'w-[260px]' : 'w-auto'}`}>
        <div className={expand ? 'd-block' : 'd-none' }>
            <img src="./images/logo.png" alt="/" className={'mx-auto block mt-10'}/>
        </div>
        <div className='flex flex-col gap-5 text-xl items-center pt-8'>
            <div className={`flex items-center gap-3 justify-start w-4/5 px-4 py-1 bg-[#007aff] rounded-md `}>
                <FundViewOutlined />
                <p>Dashboard</p>
            </div>
        </div>
    </div>
  )
}

export default SideBar