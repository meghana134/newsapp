import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps={
    country:"in",
    pagesize:8,
    category:'general',
  }

  static propTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string
  }
  
  //FUNCTION FOR CAPITALIZE THE FIRST LETTER OF THE ""TITLE"""
  capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

  
  constructor(props){
    super(props)
    console.log("i 5 am xonstructor")
    this.state={
     articles: [],
     loading : false,
     //initally page is to 1
     page:1,
     totalResults:0


    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }

  async updateNews(pageNo){
    this.props.setProgress(10);
    console.log("cdm");
    const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&categoty=${this.props.category}&apiKey=7be91d68e19a43619ea346e552812330&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    let data =  await fetch(url);
    this.props.setProgress(30);
    let parseData= await data.json();
    this.props.setProgress(70);
    console.log(parseData)
    this.setState({articles:parseData.articles, totalResults:parseData.totalResults,
    loading:false,})
    this.props.setProgress(100);
    
  }

  // API FETCHING
  async componentDidMount(){
   this.updateNews();
  }

  handlePrevClick=async ()=>{
    
    // console.log("prevuous");
    // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&categoty=${this.props.category}&apiKey=7be91d68e19a43619ea346e552812330&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
    // this.setState({loading:true})
    // let data =  await fetch(url);
    // let parseData= await data.json();
    // // console.log(parseData)
    
    // this.setState({
    //   //page is decreasing
    //   page: this.state.page-1,
    //   articles: parseData.articles,
    //   loading:false

    // })
    this.setState({page:this.state.page-1})
    this.updateNews();


  }

  //FUNCTION FOR INFINITE SCROLL
  fetchMoreData = async() => {
    this.setState({page:this.state.page+1})
    // console.log("cdm");
    const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&categoty=${this.props.category}&apiKey=7be91d68e19a43619ea346e552812330&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    let data =  await fetch(url);
    let parseData= await data.json();
    console.log(parseData)
    this.setState({
      articles:this.state.articles.concat(parseData.articles),
       totalResults:parseData.totalResults,
  })
    

  };

  //next click button function
  handlenextClick= async ()=>{
  //   console.log("next");
  //   //to check next page exists or not
  //   if (!(this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pagesize))){

    
  //   let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&categoty=${this.props.category}&apiKey=7be91d68e19a43619ea346e552812330&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
  //   {this.setState({loading:true})}
  //   let data =  await fetch(url);
  //   let parseData= await data.json();
  //   // console.log(parseData)
    
  //   this.setState({
  //     //page is increasing
  //     page: this.state.page + 1,
  //     articles: parseData.articles,
  //     loading:false

  //   })
  // }
  this.setState({page:this.state.page+ 1});
  this.updateNews();


  }


  render() {
    console.log("render")
    return (
      <div className='container my-3'>
      <h2 className='text-center'>NewsHunt - Top Headlines from {this.capitalizeFirstLetter(this.props.category)} </h2>
      {this.state.loading&&<Spinner/>}
      
      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className='container'>
      <div className='row'>
      {/* //agar loadin true nhi hai tho card display kar na hai ya tho nhi */}
      
      { this.state.articles.map((element)=>{
       return <div className='col-md-3' key={element.url}>
      <NewsItems  title={element.title?element.title.slice(0,30):""} description={element.description?element.description.slice(0,60):""}  imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
      </div>
      })}
      
      </div>
     
      </div>
      </InfiniteScroll>
     

      
    
         
          
      </div>
    )
  }
}
