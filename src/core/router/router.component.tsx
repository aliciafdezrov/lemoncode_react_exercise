import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {LoginScene} from "../../scenes";
import {MemberListScene} from "../../scenes/member-list.scene";
import {MemberDetailScene} from "../../scenes/member-detail.scene";
import { switchRoutes } from "./routes";

export const RouterComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path={switchRoutes.root} element={<LoginScene />} />
                <Route path={switchRoutes.members} element={<MemberListScene />} />
                <Route path={switchRoutes.memberDetail} element={<MemberDetailScene />} />
            </Routes>
        </Router>
    );
};
