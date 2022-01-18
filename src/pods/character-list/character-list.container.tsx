import React from "react";
import {getCharacterList} from "./api/character-list.api";
import {CharacterListComponent} from "./character-list.component";
import {mapCharacterListFromApiToVm} from "./character-list.mapper";
import {Character} from "./character-list.vm";

export const CharacterListContainer: React.FC = () => {
    const [characters, setCharacters] = React.useState<Character[]>([]);

    const onLoadCharacterList = async (searchTerm) => {
        const apiCharacterList = await getCharacterList(searchTerm);
        const viewModelCharacterList = mapCharacterListFromApiToVm(apiCharacterList);
        setCharacters(viewModelCharacterList);
    };

    React.useEffect(() => {
        onLoadCharacterList({});
    }, []);

    return (
        <CharacterListComponent characters={characters} onSearch={onLoadCharacterList}/>
    );
};
