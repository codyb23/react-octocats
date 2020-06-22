import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
import Cats from './components/Cats'
import CatsArticles from './CatsArticle.json'

class App extends Component {
  render() {
    const catsArticlesFromData = CatsArticles.map(cat => (
      <Cats
        octiCatLink={cat.octiCatLink}
        octiCatImage={cat.octiCatImage}
        octiCatNumber={cat.octiCatNumber}
        octiCatName={cat.octiCatName}
        octiCatLink={cat.octiCatLink}
        authorLink={cat.authorLink}
        authorImage={cat.authorImage}
        authorName={cat.authorName}
      />
    ))
    return (
      <body>
        <Header />
        <main>
          <section class="cards">{catsArticlesFromData}</section>
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
