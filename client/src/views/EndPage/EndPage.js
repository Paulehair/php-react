import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';

const EndPage = ({ content, currentStepIndex, changeCurrentStep, slug, indexToGoFirst, indexToGoSecond }) => {
    let code;
    if (content) {
        const currentStep = content[currentStepIndex];
        code =
            <div key={currentStep.id} className={"container"}>
                <div className={"endpage-title title"}>
                    <h1>{currentStep.title}</h1>
                    <h1>{currentStep.title_span}</h1>
                </div>
                <div className={"endpage-text"}>
                    <p>{currentStep.text1}</p>
                    <p>{currentStep.text2}</p>
                </div>
                <div className={"endpage-reference"}>
                    <p>{currentStep.source}</p>
                </div>
                <div className={"endpage-question"}>
                    <p>{currentStep.question}</p>
                </div>
                <div className={"endpage-choice"}>
                    <button onClick={() => changeCurrentStep(indexToGoFirst)} className={"endpage-choice-btn button"}>{currentStep.first_choice}</button>
                    <button onClick={() => changeCurrentStep(indexToGoSecond)} className={"endpage-choice-btn button"}>{currentStep.second_choice}</button>
                </div>
                <input ref={indexToGoFirst} type="hidden" defaultValue={currentStep.first_index} />
                <input ref={indexToGoSecond} type="hidden" defaultValue={currentStep.second_index} />
                <input ref={slug} type="hidden" defaultValue={'globalpart'} />
            </div>;
    }

    return content && (
        <div className={"endpage"}>
            <Header />
            {code}
        </div>
    );
}

EndPage.propTypes = {
    article: PropTypes.shape({}),
};

export default EndPage;