import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, url, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card" >
                    <div style={{ display: "flex", justifyContent: " flex-end", position: "absolute", right: "0" }}>
                        <span className="badge rounded-pill bg-danger">
                            {source}
                        </span>
                    </div>
                    <img src={imageUrl ? imageUrl : 'https://images.indianexpress.com/2021/11/horoscope-today-24-november.jpg'} alt='some value' />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                        <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}