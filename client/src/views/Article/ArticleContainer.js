import React, { Component, createRef } from 'react';
import Article from './Article';
import { fetchData } from '../../helpers/api';

class ArticleContainer extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            articles: null,
            currentArticle: 0,
        })
    }

    //create reference to get slug inside input hidden in Article.js
    firstSlug = createRef();
    secondSlug = createRef();

    //fetch data from server using api.js
    async componentDidMount() {
        const data = await fetchData()
        this.setState({
            articles: data,
        })
    }

    changeCurrentIndex = () => {
        this.setState({
            currentArticle: null,
        })
    }

    //function to rederect to right component at the right instance
    goToFirstOption = () => {
        //get slug thanks to ref
        let slug = this.firstSlug.current.value;
        //push slug in url
        this.props.history.push(`/` + slug);
        //set index in App.js to pass right index to the component pushed in url
        this.props.setIndex.setIndex(this.state.currentArticle);
    };

    goToSecondOption = () => {
        let slug = this.secondSlug.current.value;
        this.props.history.push(`/` + slug);
        this.props.setIndex.setIndex(this.state.currentArticle);
    }

    render() {
        const { articles, currentArticle } = this.state;
        return (
            <Article
                articles={articles}
                currentArticleIndex={currentArticle}
                firstSlug={this.firstSlug}
                secondSlug={this.secondSlug}
                goToFirstOption={this.goToFirstOption}
                goToSecondOption={this.goToSecondOption}
            />
        );
    }
}

export default ArticleContainer;