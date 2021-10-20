import React from 'react'
import styles from './Explainer.module.css'

const Explainer = () => {
  return (
    <div className={styles.explainer}>
      <h1 >You want fries with that?</h1>
      <div>
        Fast Food Nouns is an on-chain NFT project run by the FastFoodDAO. FFNs
        are rendered entirely on chain, and can be customized by their owners
        with on chain clothing and accessories. The designs are curated and funded
        by the DAO. Shout out to the original <a href='https://nouns.wtf'>Nouns</a>,
        without whom we would not be here serving up delicious french fries and
        shakes. Join us on <a href='https://discord.gg/c4stArj9'>Discord</a>. 
      </div>
    </div>
  )
}

export default Explainer