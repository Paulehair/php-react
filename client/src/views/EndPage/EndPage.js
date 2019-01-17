import React from 'react';
import PropTypes from 'prop-types';

const EndPage = ({ content, currentStepIndex, changeCurrentStep, slug, indexToGoFirst, indexToGoSecond }) => {
    let code;
    if (content) {
        const currentStep = content[currentStepIndex];
        code =
            <div key={currentStep.id} className="container">

                <div className="block">
                    <h1 className="endpage-title title">{currentStep.title}</h1>
                    <p className="endpage-text">{currentStep.text1}</p>
                </div>

                <div className="block">
                    <a onClick={() => changeCurrentStep(indexToGoFirst)} className="cardLink">{currentStep.first_choice}
                        <div className="cardLink-imgContainer">
                            <img src="#" alt="image"/>
                        </div>
                        <p className="cardLink-text">{currentStep.cardLink_text1}</p>
                        <h4 className="cardLink-title">{currentStep.cardLink_title1}</h4>
                    </a>
                    <a onClick={() => changeCurrentStep(indexToGoSecond)} className="cardLink">{currentStep.second_choice}
                        <div className="cardLink-imgContainer">
                            <img src="#" alt="image" />
                        </div>
                        <p className="cardLink-text">{currentStep.cardLink_text2}</p>
                        <h4 className="cardLink-title">{currentStep.cardLink_title2}</h4>
                    </a>
                </div>

                <input ref={indexToGoFirst} type="hidden" defaultValue={currentStep.first_index} />
                <input ref={indexToGoSecond} type="hidden" defaultValue={currentStep.second_index} />
                <input ref={slug} type="hidden" defaultValue={currentStep.slug} />
            </div>
    }

    return content && (
        <div className="endpage">
            <div className="background"></div>
            {code}
        </div>
    );
}

EndPage.propTypes = {
    article: PropTypes.shape({}),
};

export default EndPage;