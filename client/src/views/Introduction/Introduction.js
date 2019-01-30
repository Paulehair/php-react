import React from 'react';

const Introduction = ({ changeCurrentStep, slug, indexToGo, percentage, display }) => {

    return (
        <div className="page">
            <div className={"introduction"}>
                {/* <div className={"introduction-video"}>
                    <video autoPlay muted loop>
                        <source src="./images/01-introduction/digital-memory.mp4" type="video/mp4" />
                    </video>
                </div> */}
                <div className={"introduction-content"}>
                    <ul className={"introduction-title"}>
                        <li className={"introduction-title-letter mirror"}>E</li>
                        <li className={"introduction-title-letter ghost"}>V</li>
                        <li className={"introduction-title-letter ghost"}>O</li>
                        <li className={"introduction-title-letter ghost"}>L</li>
                        <li className={"introduction-title-letter ghost"}>V</li>
                        <li className={"introduction-title-letter"}>E</li>
                    </ul>
                    <div className={"introduction-loader"}><span></span></div>
                    <div className={"introduction-loader-percentage"}>
                        <p>CHARGEMENT <span>{percentage}%</span></p>
                    </div>
                    {display &&
                        <a onClick={() => changeCurrentStep()} className={"start"}>
                            <img src="./images/01-introduction/start.png" alt="start"/>
                        </a>
                    }
                </div>
                <input ref={indexToGo} type="hidden" defaultValue={0} />
                <input ref={slug} type="hidden" defaultValue={'endpage'} />
            </div>
        </div>
    );
};

export default Introduction;