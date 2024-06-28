import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { BlueCheckIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            {/* avatar */}
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/4ac7cfcce65646768eb616591613286f~c5_300x300.webp?lk3s=a5d48078&nonce=15275&refresh_token=89b27852399b8ba9e07daf8577efa680&x-expires=1719198000&x-signature=hRuNVjYrXAscZ4PLDRL55aDitnE%3D&shp=a5d48078&shcp=c1333099"
                alt="hangdumuc"
            />

            {/* info */}
            <div>
                <h4 className={cx('user-id')}>
                    <span>hangkat6668</span>
                    <BlueCheckIcon className={cx('blue-check-icon')} width="1.4rem" />
                </h4>
                <p className={cx('user-name')}>Hằng Du Mục</p>
            </div>
        </div>
    );
}

export default AccountItem;
