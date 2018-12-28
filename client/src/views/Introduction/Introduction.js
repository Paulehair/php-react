import React, { Component, createRef } from 'react';
import { parseToNumber, pushHistory, setIndex } from '../../helpers/helpers';

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
        let indexToNumber = parseToNumber(index);
        setIndex(this, indexToNumber);
        pushHistory(this, 'endpage');
    }

    render() {
        return (
            <div>
                <h1>Introduction</h1>
                <button onClick={() => this.changeCurrentStep(this.firstIndex.current.value)}>Click me</button>
                <input ref={this.firstIndex} type="hidden" defaultValue={0} />
                <button onClick={() => this.changeCurrentStep(this.secondIndex.current.value)}>No, click me</button>
                <input ref={this.secondIndex} type="hidden" defaultValue={1} />
            </div>
        );
    }
}

export default Introduction;