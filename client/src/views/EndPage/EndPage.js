import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const EndPage = ({ content, currentStepIndex, changeCurrentStep, slug, indexToGoFirst, indexToGoSecond }) => {
    let code;
    if (content) {
        const currentStep = content[currentStepIndex];
        code =
            <div key={currentStep.id} className="endpage container">

                <div className="block">
                    <h1 className="endpage-title title strong">{currentStep.title}</h1>
                    <p className="endpage-text">{currentStep.text1}</p>
                </div>
                <div className="block">
                    <a onClick={() => changeCurrentStep(indexToGoFirst)} className="cardLink">
                        <div className="cardLink-imgContainer">
                            <img className="cardLink-img" src={`./images/02-endpage/${currentStep.img_1}`} alt="image" />
                        </div>
                        <p className="cardLink-text"><span>{currentStep.first_choice}</span></p>
                        <h4 className="cardLink-title">{currentStep.cardLink_title1}</h4>
                    </a>
                    <a onClick={() => changeCurrentStep(indexToGoSecond)} className="cardLink">
                        <div className="cardLink-imgContainer">
                            <img className="cardLink-img" src={`./images/02-endpage/${currentStep.img_2}`} alt="image" />
                        </div>
                        <p className="cardLink-text"><span>{currentStep.second_choice}</span></p>
                        <h4 className="cardLink-title">{currentStep.cardLink_title2}</h4>
                    </a>
                </div>

                <input ref={indexToGoFirst} type="hidden" defaultValue={currentStep.first_index} />
                <input ref={indexToGoSecond} type="hidden" defaultValue={currentStep.second_index} />
                <input ref={slug} type="hidden" defaultValue={currentStep.slug} />
            </div>
    }

    return content && (
        <Fragment>
            <div className="endpage-background"></div>
            {code}
        </Fragment>
    );
}

EndPage.propTypes = {
    article: PropTypes.shape({}),
};

export default EndPage;