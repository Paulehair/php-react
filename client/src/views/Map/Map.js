import React from 'react';
import MapArticle from '../MapArticle/MapArticleContainer';
import Header from '../../components/Header';


const Map = ({ content, currentStepIndex, changeCurrentStep, slug, indexToGoFirst }) => {


    let code;
    if (content) {
        const currentStep = content[currentStepIndex];
        code = <div className="container" key={currentStep.id}>
            <h1>{currentStep.title}</h1>
            <MapArticle />
            <button onClick={() => changeCurrentStep(indexToGoFirst)} className={"button"}>{currentStep.first_choice}</button>
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