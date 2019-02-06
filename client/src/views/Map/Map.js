import React, { Fragment } from 'react';
import MapArticle from '../MapArticle/MapArticleContainer';
import Header from '../../components/Header';


const Map = ({ content, currentStepIndex, changeCurrentStep, slug, indexToGoFirst }) => {

    let code;
    if (content) {
        const currentStep = content[currentStepIndex];
        code = 
        <Fragment>
            <h3 className="title-part">{currentStep.title_part}</h3>
            <div className="map" key={currentStep.id}>
                <div className="container">
                    <MapArticle changeCurrentStep={changeCurrentStep} currentStep={currentStep} indexToGoFirst={indexToGoFirst} />
                </div>
                <input ref={indexToGoFirst} type="hidden" value={currentStep.first_index} />
                <input ref={slug} type="hidden" defaultValue={currentStep.slug} />
            </div>
        </Fragment>   
    }

    return content && (
        <Fragment>
            {code}
        </Fragment>
    );
}

export default Map;