import React from "react";
import {SearchInput} from "../../common/components";
import {Placeholder} from "../../common/components/placeholder";
import {Character} from "./character-list.vm";
import {CharacterGrid} from "./components/characters-grid/characters-grid.component";

interface Props {
    characters: Character[];
    onSearch: () => void;
}

export const CharacterListComponent: React.FC<Props> = (props) => {
    const {characters, onSearch} = props;

    return (
        <>
            <h2>Hello from Rick and Morty page</h2>
            {characters.length ? (
                <CharacterGrid characters={characters}/>
            ) : (
                <Placeholder text='No results found. Try a different search to look up for more options.'/>
            )}
        </>
    );
};
