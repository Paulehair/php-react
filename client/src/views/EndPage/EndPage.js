import React from 'react';
import PropTypes from 'prop-types';

const EndPage = ({ content, currentStepIndex, changeCurrentStep, slug, indexToGoFirst, indexToGoSecond }) => {
    let code;
    if (content) {
        const currentStep = content[currentStepIndex];
        code =
            <div key={currentStep.id} className={"endpage container"}>
                <div className={"endpage-title title"}>
                    <h1>{currentStep.title}</h1>
                    <h1>{currentStep.spanTitle}</h1>
                </div>
                <div className={"endpage-text"}>
                    <p>{currentStep.text}</p>
                    <p>{currentStep.moreText}</p>
                </div>
                <div className={"endpage-reference"}>
                    <p>{currentStep.reference}</p>
                </div>
                <div className={"endpage-question"}>
                    <p>{currentStep.question}</p>
                </div>
                <div className={"endpage-choice"}>
                    <button onClick={() => changeCurrentStep(indexToGoFirst)} className={"endpage-choice-btn button"}>{currentStep.firstChoice}</button>
                    <button onClick={() => changeCurrentStep(indexToGoSecond)} className={"endpage-choice-btn button"}>{currentStep.secondChoice}</button>
                </div>
                <input ref={indexToGoFirst} type="hidden" defaultValue={currentStep.firstIndex} />
                <input ref={indexToGoSecond} type="hidden" defaultValue={currentStep.secondIndex} />
                <input ref={slug} type="hidden" defaultValue={'globalpart'} />
            </div>;
    }

    return content && (
        <div>
            {code}
        </div>
    );
}

EndPage.propTypes = {
    article: PropTypes.shape({}),
};

export default EndPage;