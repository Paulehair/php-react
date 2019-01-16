import React, { Component, createRef, Fragment } from 'react';
import Map from './Map';
import MapArticle from '../MapArticle/MapArticleContainer';
import Header from '../../components/Header';
import { fetchMap } from '../../helpers/api';
import { parseToNumber, pushHistory, setIndex } from '../../helpers/helpers';

class MapContainer extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            content: null,
            currentStep: this.props.dataFromApp.currentIndex,
            currentSlide: this
        })
    }


    slug = createRef();
    indexToGoFirst = createRef();
    indexToGoSecond = createRef();

    async componentDidMount() {
        const data = await fetchMap();
        this.setState({
            content: data,
        })
    }

    changeCurrentStep = (index) => {
        let indexToNumber = parseToNumber(index.current.value);
        setIndex(this, indexToNumber);
        pushHistory(this, this.slug.current.value);
    }

    sliderNav = element => {
        // element.preventDefault();
    }

    render() {
        const { content, currentStep } = this.state;
        return (
            <div className="map">
                <Header />
                {/* <Map
                    content={content}
                    currentStepIndex={currentStep}
                    changeCurrentStep={this.changeCurrentStep}
                    slug={this.slug}
                    indexToGoFirst={this.indexToGoFirst}
                    indexToGoSecond={this.indexToGoSecond}
                /> */}
                <MapArticle />
            </div>
        );
    }
}

export default MapContainer;