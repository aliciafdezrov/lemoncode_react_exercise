import {Character} from "./character-list.api-model";
import {SearchTerm} from "../components/search-form/search-form.vm";

const buildRequestEndpoint = (searchTerm: SearchTerm): string => {
    let endpoint= `https://rickandmortyapi.com/api/character`;

    if(Object.keys(searchTerm).some(term => term)) {
        endpoint = `${endpoint}?`;

        for (const [key, value] of Object.entries(searchTerm)) {
            if(value) {
                endpoint = `${endpoint}${key}=${value}&`
            }
        }

        if(endpoint.slice(-1) === "&") {
            endpoint = endpoint.slice(0, -1);
        }
    }

    return endpoint;
}

export const getCharacterList = async (searchTerm: SearchTerm): Promise<Character[]> => {
    let characterApiList = [];
    try {
        const endpoint = buildRequestEndpoint(searchTerm);
        const response = await fetch(endpoint);

        if (response.ok) {
            const json = await response.json();
            characterApiList = json.results;
        }

        return characterApiList;
    } catch (ex) {
        console.log(ex);
    }
};
