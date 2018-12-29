import React from 'react';

const GlobalPart = ({ content, currentStepIndex, changeCurrentStep, slug, indexToGoFirst, indexToGoSecond }) => {
    let code;
    if (content) {
        const currentStep = content[currentStepIndex];
        code = <div key={currentStep.id}>
            <h1>{currentStep.title}</h1>
            <button onClick={() => changeCurrentStep(indexToGoFirst)} >{currentStep.firstChoice}</button>
            <input ref={indexToGoFirst} type="hidden" defaultValue={currentStep.firstIndex} />
            <button onClick={() => changeCurrentStep(indexToGoSecond)} >{currentStep.firstChoice}</button>
            <input ref={indexToGoSecond} type="hidden" defaultValue={currentStepIndex.secondIndex} />
            <input ref={slug} type="hidden" defaultValue={currentStep.slug} />
        </div>;
    }

    return content && (
        <div>
            {code}
        </div>
    );
}

export default GlobalPart;