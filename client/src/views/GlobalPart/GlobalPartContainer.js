import React, { Component, createRef } from 'react';
import GlobalPart from './GlobalPart';
import { fetchGlobalPart } from '../../helpers/api';
import { parseToNumber, pushHistory, setIndex } from '../../helpers/helpers';

class GlobalPartContainer extends Component {
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
        const data = await fetchGlobalPart();
        this.setState({
            content: data,
        })
    }

    changeCurrentStep = (index) => {
        let indexToNumber = parseToNumber(index.current.value);
        console.log(this.indexToGoFirst.current.value);
        setIndex(this, indexToNumber);
        console.log('etape2');
        pushHistory(this, this.slug.current.value);
        console.log('etape3');
    }

    render() {
        const { content, currentStep } = this.state;
        return (
            <GlobalPart
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

export default GlobalPartContainer;