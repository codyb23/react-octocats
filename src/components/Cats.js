import React, { Component } from 'react'

class Cats extends Component {
  render() {
    return (
      <article className="card">
        <a
          className="content-image"
          href="https://octodex.github.com//terracottocat/"
        >
          {this.props.mainImgLink}
          <img
            src="https://octodex.github.com//images/Terracottocat_Single.png"
            width="400"
            height="400"
            alt="Terracottocat"
          >
            {this.props.mainImg}{' '}
          </img>
        </a>
        <div className="card-info">
          <ul>
            <li>
              #149:
              <a href="https://octodex.github.com//terracottocat/">
                <strong>Terracottocat</strong>
              </a>
            </li>
            <li>
              <a href="https://github.com/chubbmo">
                <img
                  src="https://github.com/chubbmo.png"
                  width="24px"
                  height="24px"
                  alt="chubbmo"
                />
              </a>
            </li>
          </ul>
        </div>
      </article>
    )
  }
}
