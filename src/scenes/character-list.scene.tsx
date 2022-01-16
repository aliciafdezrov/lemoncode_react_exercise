import React from 'react';
import {CenteredLayout} from "../layouts/centered.layout";
import ResponsiveAppBar from "../layouts/app-bar.layout";
import {CharacterListContainer} from "../pods/character-list/character-list.container";

export const CharacterListScene: React.FC = () => {
    return (
        <ResponsiveAppBar>
            <CenteredLayout>
                <CharacterListContainer/>
            </CenteredLayout>
        </ResponsiveAppBar>
    );
};
