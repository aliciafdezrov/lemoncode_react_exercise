import React from 'react';
import {Character} from "./character-list.vm";
import {SearchTerm} from "./components/search-form/search-form.vm";
import {getCharacterList} from "./api/character-list.api";
import {mapCharacterListFromApiToVm} from "./character-list.mapper";

interface Props {
    onLoadCharacterList: (vmCharacterList: Character[]) => void;
}

export const useSearch = (props: Props) => {
    const handleSearch = React.useCallback(async (searchTerm: SearchTerm) => {
        try {
            const apiCharacterList = await getCharacterList(searchTerm);
            const vmCharacterList = mapCharacterListFromApiToVm(apiCharacterList);
            props.onLoadCharacterList(vmCharacterList)
        } catch (error) {
            props.onLoadCharacterList([]);
        }
    }, []);

    return {
        onSearch: handleSearch,
    };
};
