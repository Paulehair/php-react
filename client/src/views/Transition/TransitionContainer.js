import React, { Component, createRef, Fragment } from 'react';
import Transition from './Transition';
import { fetchTransition } from '../../helpers/api';
import { parseToNumber, pushHistory, setIndex , getStorage , setStorage} from '../../helpers/helpers';

class TransitionContainer extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            content: null,
            currentStep: getStorage('transitionIndex') || this.props.dataFromApp.currentIndex,
        })
    }

    slug = createRef();
    indexToGoFirst = createRef();
    indexToGoSecond = createRef();
    indexToGoThird = createRef();

    async componentDidMount() {
        const data = await fetchTransition();
        this.setState({
            content: data,
        })
        if(this.props.dataFromApp.currentIndex > getStorage('transitionIndex') || getStorage('transitionIndex') == null){
            setStorage('transitionIndex' , this.props.dataFromApp.currentIndex);
        }
    }

    changeCurrentStep = (index) => {
        let indexToNumber = parseToNumber(index.current.value);
        setIndex(this, indexToNumber);
        pushHistory(this, this.slug.current.value);
    }

    render() {
        const { content, currentStep } = this.state;
        return (
            <div className="page">
                <Transition
                    content={content}
                    currentStepIndex={currentStep}
                    changeCurrentStep={this.changeCurrentStep}
                    slug={this.slug}
                    indexToGoFirst={this.indexToGoFirst}
                    indexToGoSecond={this.indexToGoSecond}
                    indexToGoThird={this.indexToGoThird}
                />
            </div>
        );
    }
}

export default TransitionContainer;