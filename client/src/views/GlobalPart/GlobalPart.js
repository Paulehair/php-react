import React from 'react';

const GlobalPart = ({ content, currentStepIndex, changeCurrentStep, slug, indexToGoFirst, indexToGoSecond }) => {
    let code;
    let codeSecondChoice;
    if (content) {
        const currentStep = content[currentStepIndex];
        code = <div key={currentStep.id} className={"globalpart"}>
            <div className={"container"}>
                <h1 className={"globalpart-title title"}>{currentStep.title}</h1>
                <p className={"globalpart-quotation"}>{currentStep.quotation} <span className={"globalpart-quotation-span"}>{currentStep.spanQuotation} </span><span>{currentStep.quotationMore} </span><span className={"globalpart-quotation-colored strong"}>{currentStep.colorQuotation}</span></p>
                <div className={"globalpart-source"}>
                    <p className={"globalpart-source-text"}>{currentStep.sourceQuotation}</p>
                </div>

                <div className={"globalpart-main"}>
                    <p className={"globalpart-main-text"}>{currentStep.mainText}</p>
                    <p className={"globalpart-main-text"}>{currentStep.mainText2}</p>
                </div>

                <div className={"globalpart-main"}>
                    <p className={"globalpart-main-text subtitle strong"}>{currentStep.firstSubtitle}</p>
                    <p className={"globalpart-part-text"}>{currentStep.firstContent}</p>
                </div>
                <div className={"globalpart-main"}>
                    <p className={"globalpart-main-text subtitle strong"}>{currentStep.secondSubtitle}</p>
                    <p className={"globalpart-main-text"}>{currentStep.secondContent}</p>
                    <p className={"globalpart-main-text"}>{currentStep.secondContentMore}</p>
                </div>
                <div className={"globalpart-question"}>
                    <p className={"globalpart-question-text"}>{currentStep.question}</p>
                </div>
                <div className={"globalpart-btn"}>
                    <button onClick={() => changeCurrentStep(indexToGoFirst)} className={"button"}>{currentStep.firstChoice}</button>
                    <input ref={indexToGoFirst} type="hidden" value={currentStep.firstIndex} />
                </div>
                {currentStep.secondChoice.length > 0 &&
                    <div className={"globalpart-btn"}>
                        <button onClick={() => changeCurrentStep(indexToGoSecond)} className={"button"}>{currentStep.secondChoice}</button>
                        <input ref={indexToGoSecond} type="hidden" value={currentStep.secondIndex} />
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