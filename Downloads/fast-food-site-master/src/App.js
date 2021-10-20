import Header from './Containers/Header'
import Nav from './Containers/Nav'
import { Provider } from 'react-redux'
import store from './redux/store'
import nounPointer from './assets/noun-pointer.png'
import Explainer from './Containers/Explainer';
import styles from './App.module.css'
import { useEffect } from 'react'
import { fetchNouns } from './thunks/fetchNouns';

function App () {
  
  return (
    <Provider store={store}>
      <div style={{ cursor: `url(${nounPointer}) 20 0, auto` }}>
        <div className={styles.mobileCover}>
          Sorry, the drive-thru isn't taking mobile orders yet (we just bought
          the place like yesterday). Come back soon.
        </div>
        <Nav />
        <Header />
        <Explainer />
      </div>
    </Provider>
  )
}

export default App
