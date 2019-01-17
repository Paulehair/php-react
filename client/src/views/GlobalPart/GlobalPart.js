import React from 'react';
import Header from '../../components/Header';

const GlobalPart = ({ content, currentStepIndex, changeCurrentStep, slug, indexToGoFirst, indexToGoSecond }) => {
    let code;
    if (content) {
        const currentStep = content[currentStepIndex];
        code = <div key={currentStep.id} className={"globalpart"}>
            <div className={"container"}>
                <h1 className={"globalpart-title title"}>{currentStep.title}</h1>
                <p className={"globalpart-title title strong"}>{currentStep.title_span}</p>

                <div className={"globalpart-main"}>
                    <p className={"globalpart-main-text"}>{currentStep.main_text1}</p>
                    <p className={"globalpart-main-text"}>{currentStep.main_text2}</p>
                </div>

                <div>
                    <img src="" alt="" />
                    <p>{currentStep.introduction}</p>
                    <p>{currentStep.introduction2}</p>
                </div>

                <div className={"globalpart-main"}>
                    <p className={"globalpart-main-text"}>{currentStep.subtitle1}</p>
                    <p className={"globalpart-main-text"}>{currentStep.subcontent1}</p>
                </div>

                <div className={"globalpart-main"}>
                    <p className={"globalpart-main-text"}>{currentStep.subtitle2}</p>
                    <p className={"globalpart-main-text"}>{currentStep.subcontent2}</p>
                    <p className={"globalpart-main-text"}>{currentStep.subcontent21}</p>
                </div>

                {currentStep.subtitle3 !== null &&
                    <div className={"globalpart-main"}>
                        <p className={"globalpart-main-text"}>{currentStep.subtitle3}</p>
                        <p className={"globalpart-main-text"}>{currentStep.subcontent3}</p>
                        <p className={"globalpart-main-text"}>{currentStep.subcontent31}</p>
                    </div>
                }

                <div className={"globalpart-btn"}>
                    <button onClick={() => changeCurrentStep(indexToGoFirst)} className={"button"}>{currentStep.first_choice}</button>
                    <input ref={indexToGoFirst} type="hidden" value={currentStep.first_index} />
                </div>

                {currentStep.second_choice !== null &&
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