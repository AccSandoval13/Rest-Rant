const React = require('react')
const Def = require('./default')

function Error404 () {
    return (
      <Def>
        <main>
          
          <h1>404: PAGE NOT FOUND</h1>
          
          <p>Oops, sorry, we can't find this page!</p>
          
          <div>
          <img src="/images/102.jpeg" alt="Cat Error Image" style={{ width: "485px", height: "400px" }} />
          <div>
            Photo by <a href="AUTHOR_LINK"> HTTP Cat </a> on <a href="UNSPLASH_LINK">Unsplash</a>
          </div>
          </div>
          
          </main>
      </Def>
    )
  }
  

module.exports = Error404
