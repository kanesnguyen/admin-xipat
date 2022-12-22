import React from 'react'
import { Button, Layout } from 'antd';
import { LineChartOutlined } from '@ant-design/icons';
import { useNavigate, useLocation , Outlet, useOutlet } from "react-router-dom";
import SubCriptionChart from '../../components/dashboardManager/subCriptionChart'
const { Content } = Layout;
function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const outlet = useOutlet()
  function handleClick(chart) {
    navigate(`/dashboard/${chart}`);
}
  return (
    <div>
      <Layout className="bg-white">
        <div className="flex gap-5 mb-5 bg-white">
          <Button type={ (location.pathname.includes("/subcription") || location.pathname==='/dashboard') && "primary" } onClick={() => handleClick("subcription")} className="" icon={<LineChartOutlined />}>
            Subcription
          </Button>

          <Button type={ location.pathname.includes("/evenue") && "primary" } onClick={() => handleClick("evenue")} icon={<LineChartOutlined />}>
            Revenue
          </Button>
        </div>
        <Layout>
          <Content className="bg-white">
            { outlet  ? <Outlet className="mt-10" /> : <SubCriptionChart />}
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default Dashboard