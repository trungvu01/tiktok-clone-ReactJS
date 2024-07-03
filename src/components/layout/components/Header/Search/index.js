import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import { PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { DeleteIcon, SearchIcon, LoadIcon } from '~/components/Icons';
import { useDebounce } from '~/components/hooks';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const searchRef = useRef();

    const debounced = useDebounce(searchValue);

    if (searchRef.focus) {
        setShowResult(true);
    }

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURI(debounced)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            });
    }, [debounced]);

    const handleClearInput = () => {
        setSearchValue('');
        setSearchResult([]);
        searchRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            visible={showResult && searchResult.length > 0}
            interactive
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                        <p className={cx('view-all-result')}>
                            View all results for "<span>{searchValue}</span>"
                        </p>
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={searchRef}
                    value={searchValue}
                    spellCheck={false}
                    placeholder="Search"
                    onChange={(e) => setSearchValue(e.target.value.trimStart())}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClearInput}>
                        <DeleteIcon width="1.6rem" />
                    </button>
                )}
                {loading && (
                    <span className={cx('load')}>
                        <LoadIcon width="1.6rem" />
                    </span>
                )}

                <Link to="/search" className={cx('search-btn')}>
                    <SearchIcon width="2.4rem" />
                </Link>
            </div>
        </HeadlessTippy>
    );
}

export default Search;