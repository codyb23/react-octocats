import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
import Cats from './components/Cats'
import CatsArticles from './CatsArticle.json'

class App extends Component {
  render() {
    const catsArticlesFromData = CatsArticles.map(article => (
      <Cats
        octiCatLink={article.octiCatLink}
        octiCatImage={article.octiCatImage}
        octiCatNumber={article.octiCatNumber}
        octiCatName={article.octiCatName}
        octiCatLink={article.octiCatLink}
        authorLink={article.authorLink}
        authorImage={article.authorImage}
        authorName={article.authorName}
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
