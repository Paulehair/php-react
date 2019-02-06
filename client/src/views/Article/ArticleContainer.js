import React, { Component, createRef } from 'react';
import Article from './Article';
import { fetchData } from '../../helpers/api';
import { parseToNumber, pushHistory, setIndex, } from '../../helpers/helpers';

class ArticleContainer extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            content: null,
            currentStep: this.props.dataFromApp.currentIndex,
        })
    }

    //create reference to get slug inside input hidden in Article.js
    slug = createRef();
    indexToGoFirst = createRef();
    //indexToGoSecond = createRef();

    //fetch data from server using api.js
    async componentDidMount() {
        const data = await fetchData()
        this.setState({
            content: data,
        })
    }

    //function to rederect to right component at the right instance
    changeCurrentStep = (index) => {
        let indexToNumber = parseToNumber(index.current.value);
        console.log(index.current.value)
        setIndex(this, indexToNumber);
        pushHistory(this, this.slug.current.value);
    };

    render() {
        const { content, currentStep } = this.state;
        return (
            <div className="page">
                <Article
                    content={content}
                    currentStepIndex={currentStep}
                    changeCurrentStep={this.changeCurrentStep}
                    slug={this.slug}
                    indexToGoFirst={this.indexToGoFirst}
                    indexToGoSecond={this.indexToGoSecond}
                />
            </div>
        );
    }
}

export default ArticleContainer;