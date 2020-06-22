import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="left-nav">
          <ul>
            <li>
              <a href="#">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  width="45rem"
                  height="45rem"
                  alt="GithubLogo"
                />
              </a>
            </li>
            <li className="octodex-title">
              <a href="#">Octodex</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="https://octodex.github.com/faq/">FAQ</a>
            </li>
          </ul>
        </nav>

        <nav className="right-nav">
          <ul>
            <li>
              <a href="https://twitter.com/githubdesign">
                Follow us on Twitter
              </a>
            </li>
            <li className="back-to-git">
              <a href="https://github.com/">Back to GitHub.com</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
export default Header
