import React from "react";
import {CharacterListComponent} from "./character-list.component";
import {Character} from "./character-list.vm";
import {createInitialSearchTerm} from "./components/search-form/search-form.vm";
import {useSearch} from "./character-list.hooks";

export const CharacterListContainer: React.FC = () => {
    const [characters, setCharacters] = React.useState<Character[]>([]);
    const {onSearch} = useSearch({
        onLoadCharacterList: (vmCharacterList) => setCharacters(vmCharacterList),
    });

    React.useEffect(() => {
        onSearch(createInitialSearchTerm());
    }, []);

    return (
        <CharacterListComponent characters={characters} onSearch={onSearch}/>
    );
};
