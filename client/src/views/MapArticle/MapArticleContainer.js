import React, { Component } from 'react';
import MapArticle from './MapArticle';
import { fetchMapArticle } from '../../helpers/api';

class MapArticleContainer extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            content: null,
        })
    }

    async componentDidMount() {
        const data = await fetchMapArticle();
        this.setState({
            content: data,
        })
    }

    render() {
        const { content } = this.state;
        return (
            <MapArticle
                content={content}
            />
        );
    }
}

export default MapArticleContainer;