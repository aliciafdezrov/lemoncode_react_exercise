import React from "react";
import {CharacterDetailComponent} from "./character-detail.component";
import {Character, createInitialCharacter} from "./character-detail.vm";
import {useSearch} from "./character-detail.hooks";

interface Props {
    id: string;
}

export const CharacterDetailContainer: React.FC<Props> = (props) => {
    const {id} = props;
    const [character, setCharacter] = React.useState<Character>(createInitialCharacter());
    const {onSearch} = useSearch({
        onLoadCharacter: (vmCharacter) => setCharacter(vmCharacter),
    });

    React.useEffect(() => {
        onSearch(id);
    }, []);

    return character && (
    <CharacterDetailComponent character={character}/>
    );
};
