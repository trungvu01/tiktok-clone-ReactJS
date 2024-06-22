import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    onClick,
    children,
    className,
    primarySolid = false,
    primaryOutline = false,
    circleOutline = false,
    bigger = false,
    large = false,
    leftIcon,
    rightIcon,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const clases = cx('wrapper', {
        [className]: className,
        'primary-solid': primarySolid,
        'primary-outline': primaryOutline,
        'circle-outline': circleOutline,
        bigger,
        large,
    });

    return (
        <Comp className={clases} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
