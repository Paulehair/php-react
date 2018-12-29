import React, { Component, createRef } from 'react';
import Introduction from './Introduction';
import { parseToNumber, pushHistory, setIndex } from '../../helpers/helpers';

class IntroductionContainer extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            content: null,
            currentIntroduction: this.props.dataFromApp.currentIndex,
        })
        this.changeCurrentStep = this.changeCurrentStep.bind(this);
    };

    slug = createRef();
    indexToGo = createRef();

    changeCurrentStep = () => {
        let indexToNumber = parseToNumber(this.indexToGo.current.value);
        setIndex(this, indexToNumber);
        pushHistory(this, this.slug.current.value);
    }

    render() {
        const { content, currentIntroduction } = this.state;
        return (
            <Introduction
                content={content}
                currentIntroductionIndex={currentIntroduction}
                slug={this.slug}
                indexToGo={this.indexToGo}
                changeCurrentStep={this.changeCurrentStep}
            />
        );
    }
}

export default IntroductionContainer;