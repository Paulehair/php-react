import React, { Fragment } from 'react';

const GlobalPart = ({ content, currentStepIndex, changeCurrentStep, slug, indexToGoFirst, indexToGoSecond, slide, handleScroll }) => {
    let code;
    if (content) {
        const currentStep = content[currentStepIndex];
        code =
            <Fragment>
                <div className={"globalpart-imgContainer"}>
                    <img className={"globalpart-img"} src={`./images/03-globalpart/${currentStep.img}`} alt="image" />
                </div>
                <div key={currentStep.id} className={"globalpart container"}>

                    <h1 className={"globalpart-title title"}>{currentStep.title}
                        <br />
                        <span className={"strong"}>{currentStep.title_span}</span>
                    </h1>

                    <p className={"globalpart-text1"}>{currentStep.main_text1}</p>

                    <p className={"globalpart-text2"}>{currentStep.main_text2}</p>

                    <div className={"globalpart-quotationContainer"}>
                        <p className={"globalpart-quotation"}>{currentStep.introduction}</p>
                        <p className={"globalpart-source"}>{currentStep.introduction2}</p>
                    </div>

                    <div onScroll={handleScroll} className={"globalpart-slider"}>
                        <div className={"globalpart-slider-dots"}>
                            <span className={"dot active"}></span>
                            <span className={slide ? 'dot active' : 'dot'}></span>
                            {currentStep.subtitle3 !== '' &&
                                <span className={slide ? 'dot active' : 'dot'}></span>
                            }
                        </div>

                        <div className={"globalpart-slide active"}>
                            <p className={"globalpart-slide-title"}>{currentStep.subtitle1}</p>
                            <p className={"globalpart-slide-text"}>{currentStep.subcontent1}</p>
                        </div>

                        <div className={"globalpart-slide"}>
                            <p className={"globalpart-slide-title"}>{currentStep.subtitle2}</p>
                            <p className={"globalpart-slide-text"}>{currentStep.subcontent2}</p>
                            <p className={"globalpart-slide-text"}>{currentStep.subcontent21}</p>
                        </div>

                        {currentStep.subtitle3 !== '' &&
                            <div className={"globalpart-slide"}>
                                <p className={"globalpart-slide-title"}>{currentStep.subtitle3}</p>
                                <p className={"globalpart-slide-text"}>{currentStep.subcontent3}</p>
                                <p className={"globalpart-slide-text"}>{currentStep.subcontent31}</p>
                            </div>
                        }
                    </div>

                <div className={"globalpart-btn group-btn"}>
                    <p>Choisir un article</p>
                    <div>
                        <button onClick={() => changeCurrentStep(indexToGoFirst)} className={"button"}>{currentStep.first_choice}</button>
                        <input ref={indexToGoFirst} type="hidden" value={currentStep.first_index} />
                        {currentStep.second_choice !== null &&
                            <Fragment>
                                <button onClick={() => changeCurrentStep(indexToGoSecond)} className={"button"}>{currentStep.second_choice}</button>
                                <input ref={indexToGoSecond} type="hidden" value={currentStep.second_index} />
                            </Fragment>
                        }
                    </div>
                </div>

            </div>
            <input ref={slug} type="hidden" defaultValue={currentStep.slug} />
        </Fragment>
    }

    return content && (
        <Fragment>
            {code}
        </Fragment>
    );
}

export default GlobalPart;