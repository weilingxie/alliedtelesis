import React from 'react';
import { Link } from 'react-router-dom';
import { getNews } from '../actions/NewsActions';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            articles: [],
            errors: [],
            searchText: null,
            filteredArticles: []
        }
    }
    
    componentDidMount() {        
        this.getNewsList();
    }

    getNewsList = () => {
        this.setState({ errors: [] });

        getNews()
            .then(({ articles }) => {
                if (articles)
                    this.setState({ articles });
                    console.log(articles);
                return Promise.resolve();
            }).catch((errors) => {
                this.setState({ errors: errors });
                console.log(errors);
            });
    }

    renderArticle = (article, index) => {
        return (
            <div key={index} className="col-md-4">
                <div className="thumbnail">
                    <Link to={"\/\/" + article.url.slice(7)} target="_blank">
                        <img className="img-responsive img-rounded" src={article.urlToImage} />
                        <div className="caption">
                            <p>{ article.title }</p>
                        </div>
                    </Link>
                </div>
            </div>
            );
    }

    searchBar = () => {
        return (            
            <div className="row">
                <div className="input-group mb-3 col-lg-4 col-lg-offset-4">
                    <span className="input-group-addon">
                        <i className="glyphicon glyphicon-search"></i>
                    </span>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Search" 
                        onChange={ this.filter }
                    />
                </div>
                <hr />
            </div>
        );
    }

    filter = (e) => {        
        let text = e.target.value.toUpperCase();        
        console.log("Filter :: " + text);
        let filteredArticles = this.state.articles.filter((article) => article.title.toUpperCase().match(text) ? true : false );
        this.setState({ filteredArticles, searchText: text });
    }

    articlePane = () => {
        
        return (
            <div>
                <div>
                    {
                        this.state.searchText === null ?
                            this.state.articles.map((article, index) => {
                                return this.renderArticle(article, index);
                            })
                            :
                            this.state.filteredArticles.map((article, index) => {
                                return this.renderArticle(article, index);
                            })
                    }
                </div>
            </div>
            );
    }

    render() {
        return (
            <div>
                {this.searchBar()}                
                {this.articlePane()}
            </div>
        );
    }
}

export default HomePage;
