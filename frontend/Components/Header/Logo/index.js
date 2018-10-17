import React, { Component } from 'react';
import styles from './styles';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logo}>
        <img className={styles.logo} src='https://s3.amazonaws.com/files.enjin.com/955881/site_logo/avatar.png'></img>
      </div>
      <div className={styles.logoTitle}>Raze - Alonsus</div>
    </div>
  );
};

export default Logo;
