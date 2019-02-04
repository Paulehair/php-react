import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';

const Article = ({ content, currentStepIndex, slug, changeCurrentStep, indexToGoFirst, indexToGoSecond }) => {
    let code;
    if (content) {
        const currentStep = content[currentStepIndex];
        code = <div className={"article container"} key={currentStep.id}>
            <h1 className={"article-title title strong"}>{currentStep.title}</h1>
            <p className={"article-text1"}>{currentStep.text1}</p>
            <div className="article-imgContainer">
                <img className={"article-img"} src="./images/04-article/algorithmes.png" alt="" />
            </div>
            <p className={"article-text2"}>{currentStep.text2}</p>
            <p className={"article-text3"}>{currentStep.text3}</p>

            <div className="article-moreContainer">
                <label for="show" className="article-moreText">
                    En savoir plus
                </label>
                    <input id="show" className="show" type="checkbox" />
                <div className="article-more">
                    <p className={"article-text4"}>{currentStep.text4}</p>
                    <p className={"article-text5"}>{currentStep.text5}</p>
                    <p className={"article-text6"}>{currentStep.text6}</p>
                </div>
            </div>

            <div className={"article-btn group-btn"}>
                <button onClick={() => changeCurrentStep(indexToGoFirst)} className={"button"}>{currentStep.first_choice}</button>
                {currentStep.second_choice !== null &&
                    <Fragment>
                        <button onClick={() => changeCurrentStep(indexToGoSecond)} className={"button"}>{currentStep.second_choice}</button>
                    </Fragment>
                }
            </div>
            <input ref={indexToGoFirst} type="hidden" defaultValue={currentStep.first_index} />
            <input ref={indexToGoSecond} type="hidden" defaultValue={currentStep.second_index} />
            <input ref={slug} type="hidden" defaultValue={currentStep.slug} />
        </div>;
    }

    return content && (
        <Fragment>
            {code}
        </Fragment>
    );
}

Article.propTypes = {
    article: PropTypes.shape({}),
};

export default Article;