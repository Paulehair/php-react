import React from 'react';
import MapArticle from '../MapArticle/MapArticleContainer';
import Header from '../../components/Header';


const Map = ({ content, currentStepIndex, changeCurrentStep, slug, indexToGoFirst }) => {

    let code;
    if (content) {
        const currentStep = content[currentStepIndex];
        code = <div className="map" key={currentStep.id}>
            <div className="container">
                <MapArticle changeCurrentStep={changeCurrentStep} currentStep={currentStep} indexToGoFirst={indexToGoFirst}/>
            </div>
            <input ref={indexToGoFirst} type="hidden" value={currentStep.first_index} />
            <input ref={slug} type="hidden" defaultValue={currentStep.slug} />
        </div>;
    }

    return content && (
        <div>
            {code}
        </div>
    );
}

export default Map;