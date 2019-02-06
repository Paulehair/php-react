import React, { Fragment } from 'react';

const Transition = ({ content, currentStepIndex, changeCurrentStep, slug, indexToGoFirst, indexToGoSecond, indexToGoThird }) => {
    let code;
    console.log(content, currentStepIndex)
    if (content && content.length) {
        const currentStep = content[currentStepIndex];
        code = <Fragment>
            <h3 className="title-part">{currentStep.title_part}</h3>
            <div className="endpage container" key={currentStep.id}>

                <div className="block">
                    <h1 className="endpage-title title strong">{currentStep.title}</h1>
                    <p className="endpage-text">{currentStep.text1}</p>
                </div>

                <div className="block">

                    {currentStep.third_choice == null ? (
                        <Fragment>
                            <a onClick={() => changeCurrentStep(indexToGoFirst)} className="cardLink">
                                <div className="cardLink-imgContainer">
                                    <img className="cardLink-img" src="./images/06-transition/cerveau.png" alt="image" />
                                </div>
                                <p className="cardLink-text"><span>{currentStep.first_choice}</span></p>
                                <h4 className="cardLink-title">{currentStep.cardLink_title1}</h4>
                            </a>
                            <a onClick={() => changeCurrentStep(indexToGoSecond)} className="cardLink">
                                <div className="cardLink-imgContainer">
                                    <img className="cardLink-img" src="./images/06-transition/eugenisme.png" alt="image" />
                                </div>
                                <p className="cardLink-text"><span>{currentStep.second_choice}</span></p>
                                <h4 className="cardLink-title">{currentStep.cardLink_title2}</h4>
                            </a>
                            <input ref={indexToGoFirst} type="hidden" value={currentStep.first_index} />
                            <input ref={indexToGoSecond} type="hidden" value={currentStep.second_index} />
                        </Fragment>
                    ) : (
                            <div className="transition-btn">
                                <p className="transition-discover">Découvrir...</p>
                                <button onClick={() => changeCurrentStep(indexToGoFirst)} className={"button"}>{currentStep.first_choice}</button>
                                <button onClick={() => changeCurrentStep(indexToGoSecond)} className={"button"}>{currentStep.second_choice}</button>
                                <button onClick={() => changeCurrentStep(indexToGoThird)} className={"button"}>{currentStep.third_choice}</button>
                                <input ref={indexToGoFirst} type="hidden" value={currentStep.first_index} />
                                <input ref={indexToGoSecond} type="hidden" value={currentStep.second_index} />
                                <input ref={indexToGoThird} type="hidden" value={currentStep.third_index} />
                            </div>
                        )
                    }
                </div>
                <input ref={slug} type="hidden" defaultValue={currentStep.slug} />
            </div>
        </Fragment>;
    }

    return content && (
        <Fragment>
            <div className="endpage-background"></div>
            {code}
        </Fragment>
    );
}

export default Transition;