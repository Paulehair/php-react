import React, { Fragment } from 'react';

const Transition = ({ content, currentStepIndex, changeCurrentStep, slug, indexToGoFirst, indexToGoSecond, indexToGoThird }) => {
    let code;
    let codeThirdChoice;
    if (content) {
        const currentStep = content[currentStepIndex];
        code = <div key={currentStep.id}>
            <h1>{currentStep.title}</h1>
            <button onClick={() => changeCurrentStep(indexToGoFirst)} className={"button"}>{currentStep.firstChoice}</button>
            <input ref={indexToGoFirst} type="hidden" value={currentStep.firstIndex} />
            <button onClick={() => changeCurrentStep(indexToGoSecond)} className={"button"}>{currentStep.secondChoice}</button>
            <input ref={indexToGoSecond} type="hidden" value={currentStep.secondIndex} />
            <input ref={slug} type="hidden" defaultValue={currentStep.slug} />
            {currentStep.thirdChoice !== null &&
                <Fragment>
                    <button onClick={() => changeCurrentStep(indexToGoThird)} className={"button"}>{currentStep.thirdChoice}</button>
                    <input ref={indexToGoThird} type="hidden" value={currentStep.thirdIndex} />
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