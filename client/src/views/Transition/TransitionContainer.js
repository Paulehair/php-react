import React, { Component, createRef } from 'react';
import Transition from './Transition';
import { fetchTransition } from '../../helpers/api';
import { parseToNumber, pushHistory, setIndex } from '../../helpers/helpers';

class TransitionContainer extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            content: null,
            currentStep: this.props.dataFromApp.currentIndex,
        })
    }

    slug = createRef();
    indexToGoFirst = createRef();
    indexToGoSecond = createRef();

    async componentDidMount() {
        const data = await fetchTransition();
        this.setState({
            content: data,
        })
    }

    changeCurrentStep = (index) => {
        let indexToNumber = parseToNumber(index.current.value);
        setIndex(this, indexToNumber);
        pushHistory(this, this.slug.current.value);
    }

    render() {
        const { content, currentStep } = this.state;
        return (
            <Transition
                content={content}
                currentStepIndex={currentStep}
                changeCurrentStep={this.changeCurrentStep}
                slug={this.slug}
                indexToGoFirst={this.indexToGoFirst}
                indexToGoSecond={this.indexToGoSecond}
            />
        );
    }
}

export default TransitionContainer;