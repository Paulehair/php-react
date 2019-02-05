import React, { Component } from 'react';
import MapArticle from './MapArticle';
import { fetchMapArticle } from '../../helpers/api';

class MapArticleContainer extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            content: null,
            sliderIndex: 0,
            isMobile: window.innerWidth <= 768,
        })
    }

    async componentDidMount() {
        const data = await fetchMapArticle();
        this.setState({
            content: data,
        })

    }

    render() {
        const { content, sliderIndex , isMobile} = this.state;
        const {changeCurrentStep , currentStep , indexToGoFirst } = this.props;
        return (
            <MapArticle
                content={content}
                sliderIndex={sliderIndex}
                isMobile={isMobile}
                changeCurrentStep={changeCurrentStep}
                currentStep={currentStep}
                indexToGoFirst={indexToGoFirst}
            />
        );
    }
}

export default MapArticleContainer;