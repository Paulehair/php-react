import React from 'react';
import PropTypes from 'prop-types';

const EndPage = ({ content, currentStepIndex, changeCurrentStep, slug, indexToGoFirst, indexToGoSecond }) => {
    console.log(currentStepIndex);

    let code;
    if (content) {
        const currentStep = content[currentStepIndex];
        code = <div key={currentStep.id}>
            <h1>{currentStep.title}</h1>
            <button onClick={() => changeCurrentStep(indexToGoFirst)} >Vaincre la maladie</button>
            <input ref={indexToGoFirst} type="hidden" defaultValue={0} />
            <button onClick={() => changeCurrentStep(indexToGoSecond)} >Vaincre le handicap</button>
            <input ref={indexToGoSecond} type="hidden" defaultValue={1} />
            <input ref={slug} type="hidden" defaultValue={'globalpart'} />
        </div>;
    }

    return content && (
        <div>
            {code}
        </div>
    );
}

EndPage.propTypes = {
    article: PropTypes.shape({}),
};

export default EndPage;