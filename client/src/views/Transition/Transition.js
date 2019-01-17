import React, { Fragment } from 'react';

const Transition = ({ content, currentStepIndex, changeCurrentStep, slug, indexToGoFirst, indexToGoSecond, indexToGoThird }) => {
    let code;
    let codeThirdChoice;
    if (content) {
        const currentStep = content[currentStepIndex];
        code = <div className="container" key={currentStep.id}>
            <h1>{currentStep.title}</h1>
            <button onClick={() => changeCurrentStep(indexToGoFirst)} className={"button"}>{currentStep.first_choice}</button>
            <input ref={indexToGoFirst} type="hidden" value={currentStep.first_index} />
            <button onClick={() => changeCurrentStep(indexToGoSecond)} className={"button"}>{currentStep.second_choice}</button>
            <input ref={indexToGoSecond} type="hidden" value={currentStep.second_index} />
            <input ref={slug} type="hidden" defaultValue={currentStep.slug} />
            {currentStep.third_choice !== null &&
                <Fragment>
                    <button onClick={() => changeCurrentStep(indexToGoThird)} className={"button"}>{currentStep.third_choice}</button>
                    <input ref={indexToGoThird} type="hidden" value={currentStep.third_index} />
                </Fragment>
            }
        </div>;
    }

    return content && (
        <div>
            {code}
        </div>
    );
}

export default Transition;