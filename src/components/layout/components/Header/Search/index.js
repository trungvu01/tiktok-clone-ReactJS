import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import { PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { DeleteIcon, SearchIcon, LoadIcon } from '~/components/Icons';
import { useDebounce } from '~/components/hooks';
import styles from './Search.module.scss';
import { search } from '~/apiServices';

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

        const fetchApi = async () => {
            setLoading(true);
            const result = await search(debounced);
            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();
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
        // Using <div> tag around the reference element solves
        // this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                appendTo="parent"
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                            {searchValue.trim() && (
                                <p className={cx('view-all-result')}>
                                    View all results for "<span>{searchValue}</span>"
                                </p>
                            )}
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

                    <Link to="" className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon width="2.4rem" />
                    </Link>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
