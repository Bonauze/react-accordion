import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './accordion.css';

const Accordion = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>{children}</ul>
    </div>
  );
};

Accordion.Card = (props) => {
  const { label, content, isOpen } = props;
  const [isOpenState, setIsOpenState] = useState(isOpen);
  const [contentMaxHeight, setContentMaxHeight] = useState('0px');
  const contentRef = useRef(null);

  const iconClasses = classNames({
    [styles.buttonIcon]: true,
    [styles.rotated]: isOpenState,
  });

  const changeContentMaxHeight = () => {
    const { scrollHeight } = contentRef.current;
    setContentMaxHeight(isOpenState ? `${scrollHeight}px` : '0px');
  };

  const handleButtonClick = () => {
    setIsOpenState((prevState) => !prevState);
  };

  useEffect(changeContentMaxHeight, [isOpenState]);

  useEffect(() => {
    window.addEventListener('resize', changeContentMaxHeight);

    return () => {
      window.removeEventListener('resize', changeContentMaxHeight);
    };
  }, [isOpenState]);

  return (
    <li className={styles.item}>
      <button type="button" className={styles.button} onClick={handleButtonClick}>
        <div className={styles.buttonText}>{label}</div>
        <div className={iconClasses}>↞</div>
      </button>

      <div className={styles.content} ref={contentRef} style={{ maxHeight: contentMaxHeight }}>
        <div className={styles.contentText}>{content}</div>
      </div>
    </li>
  );
}

Accordion.Card.defaultProps = {
  isOpen: false,
};

Accordion.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

Accordion.Card.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.element.isRequired,
  isOpen: PropTypes.bool,
};

export default Accordion;
