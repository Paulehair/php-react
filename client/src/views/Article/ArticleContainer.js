import React, { Component } from 'react';
import Article from './Article';
import { fetchData } from '../../helpers/api';

class ArticleContainer extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            articles: null
        })
    }


    async componentDidMount() {
        const data = await fetchData()
        this.setState({
            articles: data,
        })
    }

    render() {
        const { articles } = this.state;
        return (
            <div><Article articles={articles} /></div>
        );
    }
}

export default ArticleContainer;