import React, { useEffect, useState } from 'react'
import "./App.css";
import { Outlet } from "react-router-dom";
import SideBar from "./components/layout/sideBar";
import Header from "./components/layout/header";

import { Layout } from "antd";
const { Content } = Layout;

function App() {
  const [tablet, setTablet] = useState(false);
  useEffect(() => {
    setTablet(window.innerWidth < 768)
  },[])
  return (
    <div className="overflow-hidden">
      <Layout className="flex sm:flex-row flex-col sm:gap-0 ">
        <div  className="hidden md:block">
          <SideBar />
        </div>
        <Layout>
          <Content className="bg-white m-0 h-screen overflow-hidden">
              {tablet && <Header />}
              <div className="p-4 md:p-8">
                
              <Outlet className="mt-10" />
              </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
