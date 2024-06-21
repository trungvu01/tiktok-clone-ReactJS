import { Header, Sidebar } from '~/components/layout/components';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />

            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
