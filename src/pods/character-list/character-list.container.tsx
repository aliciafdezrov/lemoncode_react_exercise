import React from "react";
import {getCharacterList} from "./api/character-list.api";
import {CharacterListComponent} from "./character-list.component";
import {mapCharacterListFromApiToVm} from "./character-list.mapper";
import {Character} from "./character-list.vm";
import {createInitialSearchTerm, SearchTerm} from "./components/search-form/search-form.vm";

export const CharacterListContainer: React.FC = () => {
    const [characters, setCharacters] = React.useState<Character[]>([]);

    const onLoadCharacterList = async (searchTerm: SearchTerm) => {
        const apiCharacterList = await getCharacterList(searchTerm);
        const viewModelCharacterList = mapCharacterListFromApiToVm(apiCharacterList);
        setCharacters(viewModelCharacterList);
    };

    React.useEffect(() => {
        onLoadCharacterList(createInitialSearchTerm());
    }, []);

    return (
        <CharacterListComponent characters={characters} onSearch={onLoadCharacterList}/>
    );
};
