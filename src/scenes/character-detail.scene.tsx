import React from 'react';
import {CenteredLayout} from "../layouts/centered.layout";
import ResponsiveAppBar from "../layouts/app-bar.layout";
import {CharacterDetailContainer} from "../pods/character-detail";
import {useParams} from "react-router-dom";

export const CharacterDetailScene: React.FC = () => {
    const {id} = useParams();

    return (
        <ResponsiveAppBar>
            <CenteredLayout>
                <CharacterDetailContainer id={id}/>
            </CenteredLayout>
        </ResponsiveAppBar>
    );
};
