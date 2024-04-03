import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right:'0'
          }
        }>
          <span className="badge rounded-pill bg-danger">{source}</span>
            </div>
          <img src={!imageUrl ? "https://www.livemint.com/lm-img/img/2024/03/11/1600x900/INDIA-INFRASTRUCTURE--4_1710154904967_1710154946032.JPG" : imageUrl} classNameName="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
          </div>

          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    )
  }
}

export default NewsItem
