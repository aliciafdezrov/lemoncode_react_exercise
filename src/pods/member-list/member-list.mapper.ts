import * as apiModel from './api/member-list.api-model';
import * as viewModel from './member-list.vm';

const mapMemberFromApiToVm = (
    member: apiModel.Member
): viewModel.Member => ({
    ...member,
});

export const mapMemberListFromApiToVm = (
    memberList: apiModel.Member[]
): viewModel.Member[] => memberList.map(e => mapMemberFromApiToVm(e));
