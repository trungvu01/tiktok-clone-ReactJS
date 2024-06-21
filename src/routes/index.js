import { Fragment } from 'react';
import { DefaultLayout, HeaderOnly } from '~/components/layout';
import { Home, Following, Search, Upload } from '~/pages';

const publicRoutes = [
    { path: '/', Component: Home, Layout: DefaultLayout },
    { path: '/following', Component: Following, Layout: DefaultLayout },
    { path: '/search', Component: Search, Layout: HeaderOnly },
    { path: '/upload', Component: Upload, Layout: Fragment },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
