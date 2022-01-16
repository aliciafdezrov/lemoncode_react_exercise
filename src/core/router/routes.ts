import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
    root: string;
    members: string;
    memberDetail: string;
    characters: string;
    characterDetail: string;
}

export const switchRoutes: SwitchRoutes = {
    root: '/',
    members: '/list',
    memberDetail: '/detail/:id',
    characters: '/characters',
    characterDetail: '/character/:id',
};

interface Routes extends Omit<SwitchRoutes, 'memberDetail'|'characterDetail'> {
    memberDetail: (id: string) => string;
    characterDetail: (id: string) => string;
}

export const routes: Routes = {
    ...switchRoutes,
    memberDetail: id => generatePath(switchRoutes.memberDetail, { id }),
    characterDetail: id => generatePath(switchRoutes.characterDetail, {id})
};
