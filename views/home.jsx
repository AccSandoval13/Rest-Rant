// const React = require('react')
// const Def = require('./default')

import React from 'react'
import Def from './default'


function Home() {
  return (
    <Def>

      <main>
        <h1>HOME</h1>
        <div>
          <img src="/images/chia-fruit-drink.jpeg" alt="Chia Fruit Shake"  style={{ width: "485px", height: "400px" }} />
          </div> 
          <div>
            Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
          </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>

    </Def>
  )
}


module.exports = Home
