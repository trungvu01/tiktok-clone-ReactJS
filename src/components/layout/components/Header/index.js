import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import {
    CheckIcon,
    CreatorIcon,
    DarkmodeIcon,
    DeleteIcon,
    KeyboardIcon,
    LanguageIcon,
    LoadIcon,
    OptionIcon,
    PlusIcon,
    QuestionIcon,
    SearchIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);
const MENU_LIST = [
    {
        icon: <CreatorIcon />,
        title: 'LIVE Creator Hub',
        to: '/live/creator',
    },
    {
        icon: <LanguageIcon />,
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
        icon: <QuestionIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <DarkmodeIcon />,
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
                    icon: <CheckIcon width="1.6rem" />,
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
            <div>
                <HeadlessTippy
                    visible={searchResult.length > 0}
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
                        <span className={cx('load')}>
                            <LoadIcon width="1.6rem" />
                        </span>
                        <button className={cx('clear')}>
                            <DeleteIcon width="1.6rem" />
                        </button>

                        <button className={cx('search-btn')}>
                            <SearchIcon width="2.4rem" />
                        </button>
                    </div>
                </HeadlessTippy>
            </div>

            {/* actions */}
            <div className={cx('actions')}>
                {/* buttons */}
                <Button bigger href="/upload" leftIcon={<PlusIcon />}>
                    Upload
                </Button>
                <Button primarySolid>Log in</Button>

                {/* option */}
                <Menu items={MENU_LIST} onChange={handelChangeItem}>
                    <div className={cx('option')}>
                        <OptionIcon />
                    </div>
                </Menu>
            </div>
        </header>
    );
}

export default Header;
