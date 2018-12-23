import React, { Component } from 'react';
import Article from './Article';
import { fetchData } from '../../helpers/api';

class ArticleContainer extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            articles: null,
            currentArticle: 0
        })
    }

    async componentDidMount() {
        const data = await fetchData()
        this.setState({
            articles: data,
        })
    }

    goToNextPage = () => {
        this.props.history.push(`/someNextPage`);
    };

    render() {
        const { articles, currentArticle } = this.state;
        return (
            <Article
                articles={articles}
                currentArticleIndex={currentArticle}
                goToNextPage={this.goToNextPage} />
        );
    }
}

export default ArticleContainer;