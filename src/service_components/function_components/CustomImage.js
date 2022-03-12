import classNames from 'classnames';
import PropTypes from 'prop-types';

const CustomImage = ({
                         src, alt, className, height, width, circle, border, filter, ...attrs
                     }) => {

    const classes = classNames(
        className,
        {circle} ,
        {border} ,
        {filter} ,
    );

    if(!src){
        src = `https://via.placeholder.com/${width}x${height}`
    }


    return (
        <img
            src={src}
            alt={alt}
            className={classes}
            height={height}
            width={width}
            {...attrs}
        />
    );
};

CustomImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    circle: PropTypes.bool,
    border: PropTypes.bool,
    className: PropTypes.string,
};

export default CustomImage;