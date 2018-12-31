import React from 'react';

const Transition = ({ content, currentStepIndex, changeCurrentStep, slug, indexToGoFirst, indexToGoSecond }) => {
    let code;
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
    }

    return content && (
        <div>
            {code}
        </div>
    );
}

export default Transition;