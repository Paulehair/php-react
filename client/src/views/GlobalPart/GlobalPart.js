import React from 'react';

const GlobalPart = ({ content, currentStepIndex, changeCurrentStep, slug, indexToGoFirst, indexToGoSecond }) => {
    let code;
    let codeSecondChoice;
    if (content) {
        const currentStep = content[currentStepIndex];
        code = <div key={currentStep.id}>
            <h1>{currentStep.title}</h1>
            <p>{currentStep.quotation}<span>{currentStep.spanQuotation}</span><span>{currentStep.quotationMore}</span><span>{currentStep.colorQuotation}</span></p>
            <p>{currentStep.sourceQuotation}</p>
            <p>{currentStep.mainText}</p>
            <p>{currentStep.mainText2}</p>
            <p>{currentStep.firstSubtitle}</p>
            <p>{currentStep.firstContent}</p>
            <p>{currentStep.secondSubtitle}</p>
            <p>{currentStep.secondContent}</p>
            <p>{currentStep.secondContentMore}</p>
            <button onClick={() => changeCurrentStep(indexToGoFirst)} className={"button"}>{currentStep.firstChoice}</button>
            <input ref={indexToGoFirst} type="hidden" value={currentStep.firstIndex} />
            <input ref={slug} type="hidden" defaultValue={currentStep.slug} />
        </div>;
        if (currentStep.secondChoice) {
            codeSecondChoice = <div key={currentStep.id}>
                <button onClick={() => changeCurrentStep(indexToGoSecond)} className={"button"}>{currentStep.secondChoice}</button>
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