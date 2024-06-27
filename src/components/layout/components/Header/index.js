import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import {
    faSearch,
    faSpinner,
    faCircleXmark,
    faPlus,
    faCircle,
    faEarthAsia,
    faHouseUser,
    faCircleQuestion,
    faMoon,
    faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);
const MENU_LIST = [
    {
        icon: <FontAwesomeIcon icon={faHouseUser} />,
        title: 'Creator tools',
        children: {
            title: 'Creator tools',
            data: [
                {
                    icon: <FontAwesomeIcon icon={faLightbulb} />,
                    title: 'LIVE Creator Hub',
                    to: '/live/creator',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode',
        children: {
            title: 'Dark mode',
            data: [
                {
                    icon: <></>,
                    title: 'Use device theme',
                },
                {
                    icon: <></>,
                    title: 'Dark mode',
                },
                {
                    icon: <FontAwesomeIcon icon={faCheck} />,
                    title: 'Light mode',
                },
            ],
        },
    },
];

function handelChangeItem(item) {
    console.log(item);
}

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    return (
        <header className={cx('header')}>
            {/* logo */}
            <Link to="/">
                <img className={cx('logo')} src={images.logo} alt="TikTok" />
            </Link>

            {/* search */}
            <HeadlessTippy
                // visible={searchResult.length > 0}
                interactive
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <p className={cx('view-all-result')}>
                                View all results for "<span>hang</span>"
                            </p>
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input spellCheck={false} placeholder="Search" />
                    <FontAwesomeIcon className={cx('load')} icon={faSpinner} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </HeadlessTippy>

            {/* actions */}
            <div className={cx('actions')}>
                {/* buttons */}
                <Button bigger href="/upload" leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                    Upload
                </Button>
                <Button primarySolid>Log in</Button>

                {/* option */}
                <Menu items={MENU_LIST} onChange={handelChangeItem}>
                    <span className={cx('option')}>
                        <FontAwesomeIcon icon={faCircle} />
                        <FontAwesomeIcon icon={faCircle} />
                        <FontAwesomeIcon icon={faCircle} />
                    </span>
                </Menu>
            </div>
        </header>
    );
}

export default Header;
