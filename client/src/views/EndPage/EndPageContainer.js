import React, { Component, createRef } from 'react';
import EndPage from './EndPage';
import { fetchEndpoint } from '../../helpers/api';
import { parseToNumber, pushHistory, setIndex } from '../../helpers/helpers';

class EndPageContainer extends Component {
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
        const data = await fetchEndpoint()
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
            <EndPage
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

export default EndPageContainer;