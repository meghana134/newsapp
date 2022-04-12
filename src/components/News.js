import React, { Component } from 'react';
import NewsItems from './NewsItems';

export default class News extends Component {
  

  
  constructor(){
    super()
    console.log("i 5 am xonstructor")
    this.state={
     articles: [],
     loading : false,
     //initally page is to 1
     page:1

    }
  }

  // API FETCHING
  async componentDidMount(){
    console.log("cdm");
    let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=7be91d68e19a43619ea346e552812330&page=1&pagesize=20";
    let data =  await fetch(url);
    let parseData= await data.json();
    console.log(parseData)
    this.setState({articles:parseData.articles, totalResults:parseData.totalResults})
  }

  handlePrevClick=async ()=>{
    
    console.log("prevuous");
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=7be91d68e19a43619ea346e552812330&page=${this.state.page-1}&pagesize=20`;
    let data =  await fetch(url);
    let parseData= await data.json();
    console.log(parseData)
    
    this.setState({
      //page is decreasing
      page: this.state.page-1,
      articles: parseData.articles

    })


  }

  //next click button function
  handlenextClick= async ()=>{
    console.log("next");
    //to check next page exists or not
    if (this.state.page + 1>Math.ceil(this.state.totalResults/20)){

    }
else{
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=7be91d68e19a43619ea346e552812330&page=${this.state.page+1}&pagesize=20`;
    let data =  await fetch(url);
    let parseData= await data.json();
    console.log(parseData)
    
    this.setState({
      //page is increasing
      page: this.state.page + 1,
      articles: parseData.articles

    })
  }

  }


  render() {
    console.log("render")
    return (
      <div className='container my-3'>
      <h2>NewsHunt - Top Headlines</h2>
      
      <div className='row'>
      {this.state.articles.map((element)=>{
       return <div className='col-md-3' key={element.url}>
      <NewsItems  title={element.title?element.title.slice(0,30):""} description={element.description?element.description.slice(0,60):""}  imageUrl={element.urlToImage} newsUrl={element.url}/>
      </div>
      })}
      
      
     
      </div>
      <div className='container d-flex justify-content-between'>
      <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>  &larr; Previous </button>
      <button type="button" className="btn btn-dark" onClick={this.handlenextClick}>Next  &rarr;</button>

      </div>
    
         
          
      </div>
    )
  }
}
