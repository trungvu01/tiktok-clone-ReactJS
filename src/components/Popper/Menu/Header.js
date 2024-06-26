import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { ChevronLeftIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <ChevronLeftIcon />
            </button>
            <h3 className={cx('title')}>{title}</h3>
        </header>
    );
}

export default Header;
