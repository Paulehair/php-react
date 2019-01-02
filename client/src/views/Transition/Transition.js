import React from 'react';

const Transition = ({ content, currentStepIndex, changeCurrentStep, slug, indexToGoFirst, indexToGoSecond, indexToGoThird }) => {
    let code;
    let codeThirdChoice;
    if (content) {
        const currentStep = content[currentStepIndex];
        code = <div key={currentStep.id}>
            <h1>{currentStep.title}</h1>
            <button onClick={() => changeCurrentStep(indexToGoFirst)} >{currentStep.firstChoice}</button>
            <input ref={indexToGoFirst} type="hidden" value={currentStep.firstIndex} />
            <button onClick={() => changeCurrentStep(indexToGoSecond)} >{currentStep.secondChoice}</button>
            <input ref={indexToGoSecond} type="hidden" value={currentStep.secondIndex} />
            <input ref={slug} type="hidden" defaultValue={currentStep.slug} />
        </div>;
        if (currentStep.thirdChoice) {
            codeThirdChoice =
                <div key={currentStep.id}>
                    <button onClick={() => changeCurrentStep(indexToGoThird)} >{currentStep.thirdChoice}</button>
                    <input ref={indexToGoThird} type="hidden" value={currentStep.thirdIndex} />
                </div>
        }
    }

    return content && (
        <div>
            {code}
            {codeThirdChoice}
        </div>
    );
}

export default Transition;