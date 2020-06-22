import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
import Cats from './components/Cats'

class App extends Component {
  render() {
    return (
      <body>
        <Header />
        <main>
          <section class="cards">
            <Cats
              octiCatLink="https://octodex.github.com//terracottocat/"
              octiCatImage="https://octodex.github.com//images/Terracottocat_Single.png"
              octiCatNumber="149"
              octiCatName="Terracottocat"
              octiCatLink="https://octodex.github.com//terracottocat/"
              authorLink="https://github.com/chubbmo"
              authorImage="https://github.com/chubbmo.png"
              authorName="chubbmo"
            />
          </section>
        </main>
        <footer>
          <div>
            <p>© 2013 – 2020 GitHub, Inc. All rights reserved.</p>
          </div>
        </footer>
      </body>
    )
  }
}

export default App
