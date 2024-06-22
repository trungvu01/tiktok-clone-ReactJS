import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import { useState } from 'react';
import { faSearch, faSpinner, faCircleXmark, faPlus, faCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    return (
        <header className={cx('header')}>
            {/* logo */}
            <Link to="/">
                <img className={cx('logo')} src={images.logo} alt="TikTok" />
            </Link>

            {/* search */}
            <Tippy
                // visible={searchResult.length > 0}
                visible={false}
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
            </Tippy>

            {/* actions */}
            <div className={cx('actions')}>
                {/* buttons */}
                <Button bigger href="/upload">
                    <FontAwesomeIcon className={cx('plus')} icon={faPlus} />
                    <span>Upload</span>
                </Button>
                <Button primarySolid>Log in</Button>

                {/* option */}
                <span className={cx('option')}>
                    <FontAwesomeIcon icon={faCircle} />
                    <FontAwesomeIcon icon={faCircle} />
                    <FontAwesomeIcon icon={faCircle} />
                </span>
            </div>
        </header>
    );
}

export default Header;
