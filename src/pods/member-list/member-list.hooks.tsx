import React from 'react';
import {createSearchParams, To, useLocation, useNavigate} from "react-router-dom";
import {Member} from "./member-list.vm";
import {getMemberList} from "./api/member-list.api";
import {mapMemberListFromApiToVm} from "./member-list.mapper";
import {routes} from "../../router";

interface Props {
    onLoadMemberList: (vmMembers: Member[]) => void;
}

export const useSearch = (props: Props) => {
    const navigate = useNavigate();

    const handleSearch = React.useCallback(async (queryParam: string) => {
        try {
            let vmMemberList: Member[] = [];
            const encondedQuery = encodeURIComponent(queryParam);
            let navigateDescriptor: To = {
                pathname: routes.members,
                search: `?${createSearchParams({
                    search: encodeURIComponent(queryParam)
                })}`
            };

            if (queryParam) {
                const apiMemberList = await getMemberList(queryParam);
                vmMemberList = mapMemberListFromApiToVm(apiMemberList);
            }

            navigate(navigateDescriptor);
            props.onLoadMemberList(vmMemberList)
        } catch (error) {
            props.onLoadMemberList([]);
        }
    }, []);

    return {
        onSearch: handleSearch,
    };
};

export const useSearchQueryParams = () => {
    const location = useLocation();

    const getQueryParam = React.useCallback((query: string) => {
        const searchParams = new URLSearchParams(location.search);
        const queryResult = searchParams.get(query);
        if (queryResult) {
            return queryResult;
        }
        return "lemoncode";
    }, []);

    return {
        getQueryParam,
    };
}
