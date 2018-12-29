import React, { Component, createRef } from 'react';
import Article from './Article';
import { fetchData } from '../../helpers/api';

class ArticleContainer extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            articles: null,
            currentArticle: this.props.dataFromApp.currentIndex,
        })
    }

    //create reference to get slug inside input hidden in Article.js
    slug = createRef();

    //fetch data from server using api.js
    async componentDidMount() {
        const data = await fetchData()
        this.setState({
            articles: data,
        })
    }

    changeCurrentIndex = () => {
        this.setState({
            currentArticle: 1,
        })
    }

    //function to rederect to right component at the right instance
    goToNextOption = () => {
        this.changeCurrentIndex()
        //get slug thanks to ref
        let slug = this.slug.current.value;
        //push slug in url
        //this.props.history.push(`/` + slug);
        //set index in App.js to pass right index to the component pushed in url
        this.props.setIndex.setIndex(this.state.currentArticle);
    };

    render() {
        const { articles, currentArticle } = this.state;
        return (
            <Article
                articles={articles}
                currentArticleIndex={currentArticle}
                slug={this.slug}
                goToNextOption={this.goToNextOption}
            />
        );
    }
}

export default ArticleContainer;