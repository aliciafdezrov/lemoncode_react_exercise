import * as apiModel from './api/character-detail.api-model';
import * as viewModel from './character-detail.vm';

export const mapCharacterFromApiToVm = (
    character: apiModel.Character
): viewModel.Character => ({
    ...character,
});
