import React from "react";

const NewsItems =(props)=> {
  

  
      let {title, description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div className="my-3">
        <div className="card" style={{ height:"28rem"}}>
          <img src={!imageUrl?"https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?s=612x612":imageUrl} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{title}  <span class="badge badge-primary left=90%">{source}</span>
  </h5>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary bg-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
export default NewsItems;
