import * as apiModel from './api/character-list.api-model';
import * as viewModel from './character-list.vm';

const mapCharacterFromApiToVm = (
    character: apiModel.Character
): viewModel.Character => ({
    ...character,
});

export const mapCharacterListFromApiToVm = (
    characterList: apiModel.Character[]
): viewModel.Character[] => characterList.map(character => mapCharacterFromApiToVm(character));
