import React from 'react';


const Map = ({ content, currentStepIndex, changeCurrentStep, slug, indexToGoFirst, indexToGoSecond }) => {


    let code;
    if (content) {
        const currentStep = content[currentStepIndex];
        code = <div>
            {/* <h1>{currentStep.title}</h1>
            <button onClick={() => changeCurrentStep(indexToGoFirst)} className={"button"}>{currentStep.firstChoice}</button>
            <input ref={indexToGoFirst} type="hidden" value={currentStep.firstIndex} />
            <input ref={slug} type="hidden" defaultValue={currentStep.slug} /> */}
        </div>;
    }

    return content && (
        <div>{code}</div>
    );
}

export default Map;