import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import {
    CheckIcon,
    CoinsIcon,
    CreatorIcon,
    DarkmodeIcon,
    DeleteIcon,
    FavorIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    LiveIcon,
    LoadIcon,
    LogoutIcon,
    MessagesIcon,
    OptionIcon,
    PlusIcon,
    QuestionIcon,
    SearchIcon,
    SettingsIcon,
    UserIcon,
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

const MENU_USER = [
    {
        icon: <UserIcon />,
        title: 'View profile',
        to: '/@trung01',
    },
    {
        icon: <FavorIcon />,
        title: 'Favorites',
    },
    {
        icon: <CoinsIcon />,
        title: 'Get Coins',
        to: '/coins',
    },
    {
        icon: <SettingsIcon />,
        title: 'Settings',
        to: '/setting',
    },
    {
        icon: <LiveIcon />,
        title: 'LIVE Studio',
    },
    ...MENU_LIST,
    {
        icon: <LogoutIcon />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function handelChangeItem(item) {
    console.log(item);
}

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    return (
        <header className={cx('header')}>
            {/* logo */}
            <Link className={cx('logo')} to="/">
                <img src={images.logo} alt="TikTok" />
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

                {currentUser ? (
                    <>
                        <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                            <Link className={cx('messages')} to="/foryou">
                                <MessagesIcon width="2.6rem" />
                            </Link>
                        </Tippy>
                        <Tippy content="Inbox" placement="bottom">
                            <InboxIcon className={cx('inbox')} width="3.2rem" />
                        </Tippy>
                    </>
                ) : (
                    <Button primarySolid>Log in</Button>
                )}

                {/* option */}

                <Menu items={currentUser ? MENU_USER : MENU_LIST} onChange={handelChangeItem}>
                    {currentUser ? (
                        <Image
                            className={cx('user-avatar')}
                            src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/a703edd276d4b3f86f29b347c416e222~c5_720x720.jpeg?lk3s=a5d48078&nonce=13143&refresh_token=454bb3ce417b2c01b3a2cabd3b866667&x-expires=1719756000&x-signature=hodtlG9tadhEJPjQvnFSFXIqtLg%3D&shp=a5d48078&shcp=81f88b70"
                            alt="trungvu01"
                            fallback="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVNp-IZYMbvnhvQAfzEuTEmhT1ihNzzmmx6w&s"
                        />
                    ) : (
                        <div className={cx('option')}>
                            <OptionIcon />
                        </div>
                    )}
                </Menu>
            </div>
        </header>
    );
}

export default Header;
