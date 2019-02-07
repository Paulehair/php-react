import React, { Fragment } from 'react';
import MapArticle from '../MapArticle/MapArticleContainer';

const Map = ({ content, currentStepIndex, changeCurrentStep, slug, indexToGoFirst }) => {

    let code;
    if (content) {
        const currentStep = content[currentStepIndex];
        code = <div className="map" key={currentStep.id}>
            <h1>{currentStep.title}</h1>
            <div className={window.width <= 768 ? 'container' : ''}>
                <MapArticle changeCurrentStep={changeCurrentStep} currentStep={currentStep} indexToGoFirst={indexToGoFirst} slug={slug} />
            </div>
        </div>
    }

    return content && (
        <Fragment>
            {code}
        </Fragment>
    );
}

export default Map;