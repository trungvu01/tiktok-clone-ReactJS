import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { useState } from 'react';

import { PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ children, items = [], onChange = () => {}, hideOnClick = false }) {
    const [menus, setMenus] = useState([{ data: items }]);
    const [title, setTitle] = useState('');

    const currentMenu = menus[menus.length - 1];
    const renderItems = () => {
        return currentMenu.data.map((item, index) => {
            const isParent = !!item.children;

            const handleChangeDegree = () => {
                if (isParent) {
                    setTitle(item.children.title);
                    setMenus((prev) => [...prev, item.children]);
                } else {
                    onChange(item);
                }
            };

            return <MenuItem key={index} data={item} onClick={handleChangeDegree} />;
        });
    };

    const handleBack = () => {
        setMenus((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('wrapper-menu')}>
                {menus.length > 1 && <Header title={title} onBack={handleBack} />}
                <div className={cx('wrap-items')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    const handleReset = () => {
        setMenus((prev) => prev.slice(0, 1));
    };

    return (
        <HeadlessTippy
            delay={[0, 300]}
            interactive
            hideOnClick={hideOnClick}
            placement="bottom-end"
            offset={[12, 12]}
            render={renderResult}
            onHide={handleReset}
        >
            {children}
        </HeadlessTippy>
    );
}

export default Menu;
