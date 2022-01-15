import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
    root: string;
    members: string;
    memberDetail: string;
}

export const switchRoutes: SwitchRoutes = {
    root: '/',
    members: '/list',
    memberDetail: '/detail/:id',
};

interface Routes extends Omit<SwitchRoutes, 'memberDetail'> {
    memberDetail: (id: string) => string;
}

export const routes: Routes = {
    ...switchRoutes,
    memberDetail: id => generatePath(switchRoutes.memberDetail, { id }),
};
