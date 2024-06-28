import { useState, forwardRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const Image = forwardRef(({ className, src, alt, fallback: customFallback = images.errorImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const classes = cx('wrapper', {
        [className]: className,
    });

    const handleErrorImage = () => {
        setFallback(customFallback);
    };

    return <img className={classes} src={fallback || src} alt={alt} ref={ref} {...props} onError={handleErrorImage} />;
});

export default Image;
