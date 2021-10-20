import React, { Component } from 'react'
import styles from './Header.module.css'
import ConnectButton from '../Components/ConectButton'
import Noun from '../Components/Noun'
import { connect } from 'react-redux'

class Header extends Component {
  render () {
    const { settings } = this.props
    return (
      <div className={styles.container} style={{ background: settings.backgroundColor || '' }}>
        <div className={styles.wrap}>
          <Noun />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    settings: state.settings
  }
}

export default connect(mapStateToProps)(Header)
