import React from 'react';
import MapArticle from '../MapArticle/MapArticleContainer';
import Header from '../../components/Header';


const Map = ({ content, currentStepIndex, changeCurrentStep, slug, indexToGoFirst, indexToGoSecond }) => {


    let code;
    if (content) {
        const currentStep = content[currentStepIndex];
<<<<<<< HEAD
        code = <div>
            {/* <h1>{currentStep.title}</h1>
            <button onClick={() => changeCurrentStep(indexToGoFirst)} className={"button"}>{currentStep.firstChoice}</button>
            <input ref={indexToGoFirst} type="hidden" value={currentStep.firstIndex} />
            <input ref={slug} type="hidden" defaultValue={currentStep.slug} /> */}
=======
        code = <div key={currentStep.id}>
            <h1>{currentStep.title}</h1>
            <MapArticle />
            <button onClick={() => changeCurrentStep(indexToGoFirst)} className={"button"}>{currentStep.first_choice}</button>
            <input ref={indexToGoFirst} type="hidden" value={currentStep.first_index} />
            <input ref={slug} type="hidden" defaultValue={currentStep.slug} />
>>>>>>> 841e53f151c1d75adc53e5823b956852499c57f3
        </div>;
    }

    return content && (
<<<<<<< HEAD
        <div>{code}</div>
=======
        <div>
            <Header />
            {code}
        </div>
>>>>>>> 841e53f151c1d75adc53e5823b956852499c57f3
    );
}

export default Map;