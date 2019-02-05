import React, { Component, createRef } from 'react';
import Introduction from './Introduction';
import { parseToNumber, pushHistory, setIndex } from '../../helpers/helpers';

class IntroductionContainer extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            content: null,
            animation: false
        });
        this.changeCurrentStep = this.changeCurrentStep.bind(this);
    };

    slug = createRef();
    indexToGo = createRef();

    componentDidMount() {
        localStorage.clear();
    }

    sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    changeCurrentStep = async () => {
        this.setState({
            animation: true
        });
        await this.sleep(5000);
        let indexToNumber = parseToNumber(this.indexToGo.current.value);
        setIndex(this, indexToNumber);
        pushHistory(this, this.slug.current.value);
    }

    render() {
        const { content, animation } = this.state;
        return (
            <Introduction
                content={content}
                animation={animation}
                slug={this.slug}
                indexToGo={this.indexToGo}
                changeCurrentStep={this.changeCurrentStep}
            />
        );
    }
}

export default IntroductionContainer;