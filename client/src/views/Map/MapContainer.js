import React, { Component, createRef } from 'react';
import Map from './Map';
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
        window.scroll(0, 0);
    }


    slug = createRef();
    indexToGoFirst = createRef();

    async componentDidMount() {
        const data = await fetchMap();
        this.setState({
            content: data,
        })
    }

    changeCurrentStep = (index) => {
        console.log(index.current.value);
        console.log(this.slug.current.value);


        let indexToNumber = parseToNumber(index.current.value);
        setIndex(this, indexToNumber);
        //pushHistory(this, this.slug.current.value);
    }


    render() {
        const { content, currentStep } = this.state;
        return (
            <div className="page">
                <Map
                    content={content}
                    currentStepIndex={currentStep}
                    changeCurrentStep={this.changeCurrentStep}
                    slug={this.slug}
                    indexToGoFirst={this.indexToGoFirst}
                />
            </div>
        );
    }
}

export default MapContainer;