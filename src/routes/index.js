import { Fragment } from 'react';
import { DefaultLayout, HeaderOnly } from '~/components/layout';
import { Home, Following, Search, Upload, Profile } from '~/pages';

const publicRoutes = [
    { path: '/', Component: Home, Layout: DefaultLayout },
    { path: '/following', Component: Following, Layout: DefaultLayout },
    { path: '/:nickname', Component: Profile, Layout: DefaultLayout },
    { path: '/search', Component: Search, Layout: HeaderOnly },
    { path: '/upload', Component: Upload, Layout: Fragment },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
