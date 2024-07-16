import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { BlueCheckIcon } from '~/components/Icons';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/:${data.nickname}`} className={cx('wrapper')}>
            {/* avatar */}
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />

            {/* info */}
            <div>
                <h4 className={cx('user-id')}>
                    <span>{data.full_name}</span>
                    {data.tick && <BlueCheckIcon className={cx('blue-check-icon')} width="1.4rem" />}
                </h4>
                <p className={cx('user-name')}>{data.nickname}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
