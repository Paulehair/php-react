import React from 'react';
import PropTypes from 'prop-types';

const EndPage = ({ content, currentStepIndex }) => {
    let code;
    if (content) {
        const currentStep = content[currentStepIndex];
        code = <div key={currentStep.id}>
            <h1>{currentStep.title}</h1>
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