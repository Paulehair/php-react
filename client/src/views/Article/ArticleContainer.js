import React, { Component, createRef, Fragment } from 'react';
import Article from './Article';
import Header from '../../components/Header';
import { fetchData } from '../../helpers/api';
import { parseToNumber, pushHistory, setIndex } from '../../helpers/helpers';

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
    index = createRef();

    //fetch data from server using api.js
    async componentDidMount() {
        const data = await fetchData()
        this.setState({
            articles: data,
        })
    }

    //function to rederect to right component at the right instance
    goToNextOption = index => {
        let indexToNumber = parseToNumber(index.current.value);
        setIndex(this, indexToNumber);
        pushHistory(this, this.slug.current.value);
    };

    render() {
        const { articles, currentArticle } = this.state;
        return (
            <Fragment>
                <Header />
                <Article
                    articles={articles}
                    currentArticleIndex={currentArticle}
                    slug={this.slug}
                    index={this.index}
                    goToNextOption={this.goToNextOption}
                />
            </Fragment>
        );
    }
}

export default ArticleContainer;