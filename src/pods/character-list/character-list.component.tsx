import React from "react";
import {Placeholder} from "../../common/components/placeholder";
import {Character} from "./character-list.vm";
import {CharacterGrid} from "./components/characters-grid/characters-grid.component";
import {SearchForm} from "./components/search-form/search-form.component";
import {SearchTerm} from "./components/search-form/search-form.vm";

interface Props {
    characters: Character[];
    onSearch: (searchTerm: SearchTerm) => void;
}

export const CharacterListComponent: React.FC<Props> = (props) => {
    const {characters, onSearch} = props;

    return (
        <>
            <div style={{marginBottom: '5%'}}>
                <SearchForm onSearch={onSearch}/>
            </div>
            {characters.length ? (
                <CharacterGrid characters={characters}/>
            ) : (
                <Placeholder text='No results found. Try a different search to look up for more options.'/>
            )}
        </>
    );
};
