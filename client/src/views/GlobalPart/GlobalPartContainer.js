import React, { Component, createRef } from 'react';
import GlobalPart from './GlobalPart';
import { fetchGlobalPart } from '../../helpers/api';
import { parseToNumber, pushHistory, setIndex, getStorage, setStorage } from '../../helpers/helpers';


class GlobalPartContainer extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            content: null,
            currentStep: this.props.dataFromApp.currentIndex,
            slide: false,
        })
    }

    slug = createRef();
    indexToGoFirst = createRef();
    indexToGoSecond = createRef();

    async componentDidMount() {
        const data = await fetchGlobalPart();
        this.setState({
            content: data,
        })
    }

    changeCurrentStep = (index) => {
        let indexToNumber = parseToNumber(index.current.value);
        setIndex(this, indexToNumber);
        pushHistory(this, this.slug.current.value);
    }

    handleSlide = () => {
        console.log('test');
        this.setState({
            slide: true,
        })
    }

    render() {
        const { content, currentStep, slide } = this.state;
        return (
            <div className="page">
                <GlobalPart
                    content={content}
                    currentStepIndex={currentStep}
                    slide={slide}
                    changeCurrentStep={this.changeCurrentStep}
                    slug={this.slug}
                    indexToGoFirst={this.indexToGoFirst}
                    indexToGoSecond={this.indexToGoSecond}
                    handleSlide={this.handleSlide}
                />
            </div>
        );
    }
}

export default GlobalPartContainer;