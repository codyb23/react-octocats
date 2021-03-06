import React, { Component } from 'react'
import Header from './components/Header'
import Cats from './components/Cats'
import CatsArticles from './CatsArticle.json'

class App extends Component {
  render() {
    const catsFromData = CatsArticles.map(cat => (
      <Cats
        key={cat.id}
        octiCatLink={cat.octiCatLink}
        octiCatImage={cat.octiCatImage}
        octiCatNumber={cat.octiCatNumber}
        octiCatName={cat.octiCatName}
        authorLink={cat.authorLink}
        authorImage={cat.authorImage}
        authorName={cat.authorName}
        authorLink2={cat.authorLink2}
        authorImage2={cat.authorImage2}
        authorName2={cat.authorName2}
        authorImageWidth2={cat.authorImageWidth2}
        authorImageHeight2={cat.authorImageHeight2}
      />
    ))
    return (
      <body>
        <Header />
        <main>
          <section class="cards">{catsFromData}</section>
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
