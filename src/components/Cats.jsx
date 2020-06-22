import React, { Component } from 'react'

export default class Cats extends Component {
  render() {
    return (
      <article className="card">
        <a className="content-image" href={this.props.octiCatLink}>
          <img
            src={this.props.octiCatImage}
            width="400"
            height="400"
            alt={this.props.octiCatName}
          />
        </a>
        <div className="card-info">
          <ul>
            <li>
              #{this.props.octiCatNumber}:
              <a href={this.props.octiCatLink}>
                <strong>{this.props.octiCatName}</strong>
              </a>
            </li>
            <li>
              <a href={this.props.authorLink}>
                <img
                  src={this.props.authorImage}
                  width="24px"
                  height="24px"
                  alt={this.props.authorName}
                />
              </a>
              <a href={this.props.authorLink2}>
                <img
                  src={this.props.authorImage2}
                  width={this.props.authorImageWidth2}
                  height={this.props.authorImageHeight2}
                  alt={this.props.authorName2}
                />
              </a>
            </li>
          </ul>
        </div>
      </article>
    )
  }
}
