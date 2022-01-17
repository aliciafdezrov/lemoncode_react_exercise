import React from "react";
import {getCharacterDetail} from "./api/character-detail.api";
import {CharacterDetailComponent} from "./character-detail.component";
import {mapCharacterFromApiToVm} from "./character-detail.mapper";
import {Character} from "./character-detail.vm";

interface Props {
    id: string;
}

export const CharacterDetailContainer: React.FC<Props> = (props) => {
    const {id} = props;
    const [character, setCharacter] = React.useState<Character>(null);

    const onLoadCharacterDetail = async (id: string) => {
        const apiCharacterDetail = await getCharacterDetail(id);
        const viewModelCharacterDetail = mapCharacterFromApiToVm(apiCharacterDetail);
        setCharacter(viewModelCharacterDetail);
    };

    React.useEffect(() => {
        onLoadCharacterDetail(id);
    }, []);

    return character && (
    <CharacterDetailComponent character={character}/>
    );
};
