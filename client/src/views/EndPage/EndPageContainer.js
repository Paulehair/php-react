import React, { Component } from 'react';
import EndPage from './EndPage';
import { fetchEndpoint } from '../../helpers/api';

class EndPageContainer extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            content: null,
            currentStep: this.props.dataFromApp.currentIndex,
        })
    }

    async componentDidMount() {
        const data = await fetchEndpoint()
        this.setState({
            content: data,
        })
    }

    render() {
        const { content, currentStep } = this.state;
        return (
            <EndPage content={content} currentStepIndex={currentStep} />
        );
    }
}

export default EndPageContainer;