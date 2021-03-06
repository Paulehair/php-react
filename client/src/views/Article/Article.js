import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Article = ({ content, currentStepIndex, slug, changeCurrentStep, indexToGoFirst, indexToGoSecond }) => {
    let code;
    if (content) {
        const currentStep = content[currentStepIndex];
        code =
            <Fragment>
                <h3 className="title-part">{currentStep.title_part}</h3>
                <div className={"article container"} key={currentStep.id}>
                    <h1 className={"article-title title"}>{`${currentStep.title} `}
                        <br />
                        <span className=" strong">{currentStep.title_span}</span>
                    </h1>
                    <p className={"article-text1"}>{currentStep.text1}</p>
                    <div className="article-imgContainer">
                        <img className={"article-img"} src={`./images/04-article/${currentStep.img}`} alt="" />
                    </div>
                    <p className={"article-text2"}>{currentStep.text2}</p>
                    <p className={"article-text3"}>{currentStep.text3}</p>
                    {currentStep.text4 !== '' &&
                        <div className="article-moreContainer">
                            <input id="show" className="show" type="checkbox" />
                            <label for="show" className="article-moreText">
                                En savoir plus
                            </label>
                            <div className="article-more">
                                <p className={"article-text4"}>{currentStep.text4}</p>
                                <p className={"article-text5"}>{currentStep.text5}</p>
                                <p className={"article-text6"}>{currentStep.text6}</p>
                            </div>
                        </div>
                    }
                </div>
                <div className={"article-btn group-btn"}>
                    <button onClick={() => changeCurrentStep(indexToGoFirst)} className={"button"}>{currentStep.first_choice}</button>
                </div>
                <input ref={indexToGoFirst} type="hidden" defaultValue={currentStep.first_index} />
                <input ref={slug} type="hidden" defaultValue={currentStep.slug} />
            </Fragment>
            ;
    }

    return content && (
        <Fragment>
            <div className="article-background"></div>
            {code}
        </Fragment>
    );
}

Article.propTypes = {
    article: PropTypes.shape({}),
};

export default Article;