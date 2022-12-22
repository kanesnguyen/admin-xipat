import React from "react";
import App from "../App";
import PostsManager from "../pages/postsManager";
import DashboardManager from "../pages/dashboardManager";
import SubCriptionChart from "../components/dashboardManager/subCriptionChart";
import RevenueChart from "../components/dashboardManager/revenueChart";
import SettingsManager from "../pages/settingsManager";
import { Route, Routes }  from 'react-router-dom';


export default function Router () {
    const settingDefaults = {
        title: '',
        email: '',
        background: '',
        activeDate: [],
    }
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="dashboard" element={<DashboardManager />}>
                    <Route path="subcription" element={<SubCriptionChart />} />
                    <Route path="evenue" element={<RevenueChart />} />
                </Route>
                <Route path="posts-manager" element={<PostsManager />} />
                <Route path="setting" element={<SettingsManager settingDefaults={settingDefaults} />} />
            </Route>
        </Routes>
    );
};