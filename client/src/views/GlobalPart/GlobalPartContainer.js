import React, { Component, createRef, Fragment } from 'react';
import GlobalPart from './GlobalPart';
import { fetchGlobalPart } from '../../helpers/api';
import { parseToNumber, pushHistory, setIndex, getStorage, setStorage } from '../../helpers/helpers';


class GlobalPartContainer extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            content: null,
            currentStep: getStorage('globalPartIndex') || this.props.dataFromApp.currentIndex,
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
        if (this.props.dataFromApp.currentIndex > getStorage('globalPartIndex') || getStorage('globalPartIndex') == null) {
            setStorage('globalPartIndex', this.props.dataFromApp.currentIndex);
        }
    }

    changeCurrentStep = (index) => {
        let indexToNumber = parseToNumber(index.current.value);
        setIndex(this, indexToNumber);
        pushHistory(this, this.slug.current.value);
    }

    handleScroll = () => {
        console.log('test');
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
                    handleScroll={this.handleScroll}
                />
            </div>
        );
    }
}

export default GlobalPartContainer;