import React, { Component, createRef } from 'react';

class Introduction extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            currentStep: 0,
        })
    }

    firstIndex = createRef();
    secondIndex = createRef();

    changeCurrentStep = index => {
        let indexToNumber = parseInt(index, 10);
        this.setState({
            currentStep: indexToNumber,
        })
    }

    updateCurrentIndex = index => {
        this.changeCurrentStep(index);
        const currentStep = this.state.currentStep;
        this.props.setIndex.setIndex(currentStep);

        //let slug = 'articles';
        //this.props.history.push(`/` + slug);
    }

    render() {
        return (
            <div>
                <h1>Introduction</h1>
                <button onClick={() => this.updateCurrentIndex(this.firstIndex.current.value)}>Click me</button>
                <input ref={this.firstIndex} type="hidden" defaultValue={0} />
                <button onClick={() => this.updateCurrentIndex(this.secondIndex.current.value)}>No, click me</button>
                <input ref={this.secondIndex} type="hidden" defaultValue={1} />
            </div>
        );
    }
}

export default Introduction;