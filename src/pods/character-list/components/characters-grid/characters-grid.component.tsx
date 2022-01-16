import React from 'react';
import * as classes from "./characters-grid.styles";
import {CharacterGridItem} from "./character-grid-item.component";
import {Character} from "../../character-list.vm";

interface Props {
    characters: Character[];
}

export const CharacterGrid: React.FC<Props> = (props) => {
    const {characters} = props;

    return (
            <div>
                <div className={classes.gridContainer}>
                    {
                        characters.map(character => <CharacterGridItem key={character.id} character={character}/>)
                    }
                </div>
            </div>
    );
};
