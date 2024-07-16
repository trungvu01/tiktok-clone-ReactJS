import { Fragment } from 'react';
import { DefaultLayout, HeaderOnly } from '~/layouts';
import { Home, Following, Search, Upload, Profile } from '~/pages';
import config from '~/config';

const publicRoutes = [
    { path: config.routes.home, Component: Home, Layout: DefaultLayout },
    { path: config.routes.following, Component: Following, Layout: DefaultLayout },
    { path: config.routes.profile, Component: Profile, Layout: DefaultLayout },
    { path: config.routes.search, Component: Search, Layout: HeaderOnly },
    { path: config.routes.upload, Component: Upload, Layout: Fragment },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
