import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  constructor(){
    super();
    this.state = {
      articles: [],
      loading : false,
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=9aea07d691514dc1badddfee475adafd";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles:parsedData.articles})
  }

  render() {
    return (
        <>
        <br></br>
      <div className="container">
                         <h3 align="center" style={{color:'red'}}>Top Headlines...</h3><br></br>
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
      
      
      
      
      </>
    )
  }
}
