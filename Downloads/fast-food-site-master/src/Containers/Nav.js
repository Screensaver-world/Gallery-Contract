import React, { Component } from 'react'
import ConnectButton from '../Components/ConectButton';
import styles from './Nav.module.css'

class Nav extends Component {
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.column}>
            <span>Fast Food Nouns</span>
          </div>
          <div className={styles.column}>
            <ConnectButton />
          </div>
        </div>        
      </div>
    )
  }
}

export default Nav
