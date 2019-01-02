import React, { Component, createRef } from 'react';
import Introduction from './Introduction';
import { parseToNumber, pushHistory, setIndex } from '../../helpers/helpers';

class IntroductionContainer extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            content: null,
            currentIntroduction: this.props.dataFromApp.currentIndex,
            percentage: 0,
            display: false
        });
        this.counter = 0;
        this.startLoader();
        this.changeCurrentStep = this.changeCurrentStep.bind(this);
    };

    slug = createRef();
    indexToGo = createRef();

    changeCurrentStep = () => {
        let indexToNumber = parseToNumber(this.indexToGo.current.value);
        setIndex(this, indexToNumber);
        pushHistory(this, this.slug.current.value);
    }

    componentWillUnmount = () => {
        this.stopLoader();
    }

    loader = () => {
        this.setState({
            percentage: this.state.percentage += 1
        });
    }

    startLoader = () => {
        this.counter = setInterval(() => {
            this.loader();
            if (this.state.percentage === 100) {
                this.stopLoader();
            }
        }, 50);
    }

    stopLoader = () => {
        clearInterval(this.counter);
        this.setState({
            display: true
        })
    }

    render() {
        const { content, currentIntroduction, display } = this.state;
        return (
            <Introduction
                content={content}
                currentIntroductionIndex={currentIntroduction}
                slug={this.slug}
                indexToGo={this.indexToGo}
                changeCurrentStep={this.changeCurrentStep}
                percentage={this.state.percentage}
                display={display}
            />
        );
    }
}

export default IntroductionContainer;