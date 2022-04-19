import React, { Component } from "react";

export default class NewsItems extends Component {
  

  render() {
      let {title, description,imageUrl,newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ height:"25rem"}}>
          <img src={!imageUrl?"https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?s=612x612":imageUrl} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary bg-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
