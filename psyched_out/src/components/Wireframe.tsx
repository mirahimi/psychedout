import React, { FC } from 'react';
import styles from './Wireframe.module.css';

const Wireframe: FC = () => {
  return (
    <div className={styles.wireframe1}>
      <div className={styles.background}>
        <div className={styles.psychedOut}>Psyched Out</div>
        <div className={styles.backgroundChild} />
        <div className={styles.backgroundItem} />
      </div>
      <img className={styles.image1Icon} alt="" src="image 1.png" />
    </div>
  );
};

export default Wireframe;