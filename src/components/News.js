import React, { Component } from 'react';
import NewsItems from './NewsItems';

export default class News extends Component {
  

  
  constructor(){
    super()
    console.log("i 5 am xonstructor")
    this.state={
     articles: [],
     loading : false

    }
  }

  async componentDidMount(){
    console.log("cdm");
    let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=7be91d68e19a43619ea346e552812330";
    let data =  await fetch(url);
    let parseData= await data.json();
    console.log(parseData)
    this.setState({articles:parseData.articles})
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
    
         
          
      </div>
    )
  }
}
