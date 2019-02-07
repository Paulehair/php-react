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
            isChecked: false
        })
        window.scroll(0, 0);
    }

    async componentDidMount() {
        const data = await fetchMapArticle();
        this.setState({
            content: data,
        })

    }

    handleChecked = () => {
        this.setState(prevState => ({
            isChecked : !prevState.isChecked
            })
        );
    }

    render() {
        const { content, sliderIndex , isMobile, isChecked } = this.state;
        const {changeCurrentStep , currentStep , indexToGoFirst } = this.props;
        return (
            <MapArticle
                content={content}
                sliderIndex={sliderIndex}
                isMobile={isMobile}
                changeCurrentStep={changeCurrentStep}
                currentStep={currentStep}
                isChecked={isChecked}
                handleChecked={this.handleChecked}
                indexToGoFirst={indexToGoFirst}
            />
        );
    }
}

export default MapArticleContainer;