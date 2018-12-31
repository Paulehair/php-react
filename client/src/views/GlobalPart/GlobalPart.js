import React from 'react';

const GlobalPart = ({ content, currentStepIndex, changeCurrentStep, slug, indexToGoFirst, indexToGoSecond }) => {
    let code;
    let codeSecondChoice;
    if (content) {
        const currentStep = content[currentStepIndex];
        code = <div key={currentStep.id}>
            <h1>{currentStep.title}</h1>
            <button onClick={() => changeCurrentStep(indexToGoFirst)} >{currentStep.firstChoice}</button>
            <input ref={indexToGoFirst} type="hidden" value={currentStep.firstIndex} />
            <input ref={slug} type="hidden" defaultValue={currentStep.slug} />
        </div>;
        if (currentStep.secondChoice) {
            codeSecondChoice = <div key={currentStep.id}>
                <button onClick={() => changeCurrentStep(indexToGoSecond)} >{currentStep.secondChoice}</button>
                <input ref={indexToGoSecond} type="hidden" value={currentStep.secondIndex} />
            </div>
        }
    }

    return content && (
        <div>
            {code}
            {codeSecondChoice}
        </div>
    );
}

export default GlobalPart;