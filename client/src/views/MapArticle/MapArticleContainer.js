import React, { Component } from 'react';
import MapArticle from './MapArticle';
import { fetchMapArticle } from '../../helpers/api';

class MapArticleContainer extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            content: null,
            sliderIndex: 0
        })
    }

    async componentDidMount() {
        const data = await fetchMapArticle();
        this.setState({
            content: data,
        })
    }

    render() {
        const { content, sliderIndex } = this.state;
        return (
            <MapArticle
                content={content}
                sliderIndex={sliderIndex}
            />
        );
    }
}

export default MapArticleContainer;