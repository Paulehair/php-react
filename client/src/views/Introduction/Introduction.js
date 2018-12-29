import React from 'react';

const Introduction = ({ changeCurrentStep, slug, indexToGo }) => {

    return (
        <div>
            <h1>Introduction</h1>
            <button onClick={() => changeCurrentStep()}>Go to homepage</button>
            <input ref={indexToGo} type="hidden" defaultValue={0} />
            <input ref={slug} type="hidden" defaultValue={'endpage'} />
        </div>
    );
};

export default Introduction;