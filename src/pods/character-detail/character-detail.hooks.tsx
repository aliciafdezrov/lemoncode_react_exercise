import React from 'react';
import {Character, createInitialCharacter} from "./character-detail.vm";
import {getCharacterDetail} from "./api/character-detail.api";
import {mapCharacterFromApiToVm} from "./character-detail.mapper";

interface Props {
    onLoadCharacter: (vmCharacter: Character) => void;
}

export const useSearch = (props: Props) => {
    const handleSearch = React.useCallback(async (id: string) => {
        try {
            let vmCharacter: Character = createInitialCharacter();

            if (id) {
                const apiCharacterDetail = await getCharacterDetail(id);
                vmCharacter = mapCharacterFromApiToVm(apiCharacterDetail);
            }

            props.onLoadCharacter(vmCharacter)
        } catch (error) {
            props.onLoadCharacter(createInitialCharacter());
        }
    }, []);

    return {
        onSearch: handleSearch,
    };
};
