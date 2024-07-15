import { Fragment } from 'react';
import { DefaultLayout, HeaderOnly } from '~/components/layout';
import { Home, Following, Search, Upload, Profile } from '~/pages';
import routesConfig from '~/config/routes';

const publicRoutes = [
    { path: routesConfig.home, Component: Home, Layout: DefaultLayout },
    { path: routesConfig.following, Component: Following, Layout: DefaultLayout },
    { path: routesConfig.profile, Component: Profile, Layout: DefaultLayout },
    { path: routesConfig.search, Component: Search, Layout: HeaderOnly },
    { path: routesConfig.upload, Component: Upload, Layout: Fragment },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
