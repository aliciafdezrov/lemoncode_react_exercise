import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {CharacterListScene, LoginScene, MemberListScene, MemberDetailScene, CharacterDetailScene} from "../scenes";
import { switchRoutes } from "./routes";

export const RouterComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path={switchRoutes.root} element={<LoginScene />} />
                <Route path={switchRoutes.members} element={<MemberListScene />} />
                <Route path={switchRoutes.memberDetail} element={<MemberDetailScene />} />
                <Route path={switchRoutes.characters} element={<CharacterListScene/>}/>
                <Route path={switchRoutes.characterDetail} element={<CharacterDetailScene/>}/>
            </Routes>
        </Router>
    );
};
