import React, { Component } from 'react'
import Loader from './Loader';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  };
  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  capitalizeFirstLetter=(string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - i-NEWS-Box`
    }
    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d1b761aaff7f475c84838dfa8aa2f4aa&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults:parsedData.totalResults,
            loading: false
        })
    }
    async componentDidMount() {
        this.updateNews();
    }
    handelPrev =async ()=>{
        this.state.page = this.state.page - 1;
        this.updateNews();
    }
    handelNext =async ()=>{
        this.state.page = this.state.page + 1;
        this.updateNews();
    }
    render() {
        return (
            <div>
                <div className="container my-3">
                    <h1 className="text-center" style={{margin: '35px'}}>i-NEWS Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && <Loader/>}
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url} >
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} author={element.author?element.author:"Unknown"} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    <div className="container my-2 d-flex justify-content-between">
                        <button type="button" className="btn btn-dark" disabled={this.state.page<=1} onClick={this.handelPrev}>&larr; Previous</button>
                        <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handelNext}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}
