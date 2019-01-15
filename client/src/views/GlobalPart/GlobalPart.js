import React from 'react';

const GlobalPart = ({ content, currentStepIndex, changeCurrentStep, slug, indexToGoFirst, indexToGoSecond }) => {
    let code;
    if (content) {
        const currentStep = content[currentStepIndex];
        code = <div key={currentStep.id} className={"globalpart"}>
            <div className={"container"}>
                <h1 className={"globalpart-title title"}>{currentStep.title}</h1>
                <p className={"globalpart-quotation"}>{currentStep.subtitle}</p>

                <div className={"globalpart-main"}>
                    <p className={"globalpart-main-text"}>{currentStep.text1}</p>
                    <p className={"globalpart-main-text"}>{currentStep.text2}</p>
                    <p className={"globalpart-main-text"}>{currentStep.text3}</p>
                    <p className={"globalpart-main-text"}>{currentStep.text4}</p>
                </div>

                <div className={"globalpart-question"}>
                    <p className={"globalpart-question-text"}>{currentStep.question}</p>
                </div>
                <div className={"globalpart-btn"}>
                    <button onClick={() => changeCurrentStep(indexToGoFirst)} className={"button"}>{currentStep.first_choice}</button>
                    <input ref={indexToGoFirst} type="hidden" value={currentStep.first_index} />
                </div>
                {currentStep.secondChoice !== null &&
                    <div className={"globalpart-btn"}>
                        <button onClick={() => changeCurrentStep(indexToGoSecond)} className={"button"}>{currentStep.second_choice}</button>
                        <input ref={indexToGoSecond} type="hidden" value={currentStep.second_index} />
                    </div>
                }
                <input ref={slug} type="hidden" defaultValue={currentStep.slug} />
            </div>
        </div>;
    }

    return content && (
        <div>
            {code}
        </div>
    );
}

export default GlobalPart;