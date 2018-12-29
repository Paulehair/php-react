import React from 'react';
import PropTypes from 'prop-types';

const GlobalPart = ({ content, currentStepIndex, changeCurrentStep, slug, indexToGoFirst, indexToGoSecond }) => {
    let code;
    if (content) {
        const currentStep = content[currentStepIndex];
        code =
            <div key={currentStep.id}>
                hey
            </div>;
    }

    return content && (
        <div>
            {code}
        </div>
    );
}

GlobalPart.propTypes = {
    article: PropTypes.shape({}),
};

export default EndPage;