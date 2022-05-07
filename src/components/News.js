import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect,useState } from 'react';

const News = (props)=>{
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

 
  
  //FUNCTION FOR CAPITALIZE THE FIRST LETTER OF THE ""TITLE"""
  const capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

  
  


    
    // document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;

  const updateNews =  async ()=>{
    props.setProgress(10);
    console.log("cdm");
    const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&categoty=${props.category}&apiKey=7be91d68e19a43619ea346e552812330&page=${page}&pagesize=${props.pagesize}`;
    setLoading(true);
    let data =  await fetch(url);
    props.setProgress(30);
    let parseData= await data.json();
    props.setProgress(70);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    
    props.setProgress(100);
    
  }

  // API FETCHING
  useEffect(()=>{
  
   updateNews();
  },[])
  //it will run only one time

   const handlePrevClick =async ()=>{
  
    setPage(page-1);
    updateNews();


  }

  //FUNCTION FOR INFINITE SCROLL
 const fetchMoreData = async() => {
    setPage(page+1);
    // console.log("cdm");
    const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&categoty=${props.category}&apiKey=7be91d68e19a43619ea346e552812330&page=${page}&pagesize=${props.pagesize}`;
    let data =  await fetch(url);
    let parseData= await data.json();
    console.log(parseData)
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
   
    

  };

  //next click button function
 const  handlenextClick= async ()=>{
 
  
  setPage(page+1);
  updateNews();


  }


  
    console.log("render")
    return (
      <div className='container my-3'>
      <h2 className='text-center'>NewsHunt - Top Headlines from {capitalizeFirstLetter(props.category)} </h2>
      {loading&&<Spinner/>}
      
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<Spinner/>}
        >
        <div className='container'>
      <div className='row'>
      {/* //agar loadin true nhi hai tho card display kar na hai ya tho nhi */}
      
      { articles.map((element)=>{
       return <div className='col-md-3' key={element.url}>
      <NewsItems  title={element.title?element.title.slice(0,30):""} description={element.description?element.description.slice(0,60):""}  imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
      </div>
      })}
      
      </div>
     
      </div>
      </InfiniteScroll>
     

      
    
         
          
      </div>
    )
  

//function based components me props and proptype end me pass karthe hai
News.defaultProps={
  country:"in",
  pagesize:8,
  category:'general',
}

News.propTypes={
  country:PropTypes.string,
  pagesize:PropTypes.number,
  category:PropTypes.string
}
}
export default News;