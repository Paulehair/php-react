import React from 'react';

const Introduction = ({ changeCurrentStep, slug, indexToGo, percentage, display }) => {

    return (
        <div className={"introduction"}>
            <div className={"introduction-ctnr"}>
                <h1 className={"introduction-title"}>EVOLVE</h1>
                <div className={"introduction-loader"}><span></span></div>
                <div className={"introduction-loader-percentage"}>
                    <p>CHARGEMENT <span>{percentage}%</span></p>
                </div>
                {display &&
                    <button onClick={() => changeCurrentStep()} className={"button"}>commencer</button>
                }
                <input ref={indexToGo} type="hidden" defaultValue={0} />
                <input ref={slug} type="hidden" defaultValue={'endpage'} />
            </div>
        </div>
    );
};

export default Introduction;