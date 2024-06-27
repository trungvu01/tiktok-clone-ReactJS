import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cs = classNames.bind(styles);

function Wrapper({ children, className }) {
    const classes = cs('wrapper', {
        [className]: className,
    });
    return <div className={classes}>{children}</div>;
}

export default Wrapper;
