import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    onClick,
    children,
    primarySolid = false,
    primaryOutline = false,
    circleOutline = false,
    bigger = false,
    large = false,
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
        'primary-solid': primarySolid,
        'primary-outline': primaryOutline,
        'circle-outline': circleOutline,
        bigger: bigger,
        large: large,
    });

    return (
        <Comp className={clases} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
