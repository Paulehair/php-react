import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';

const Article = ({ articles, goToNextOption, currentArticleIndex, slug, index }) => {
    let code;
    if (articles) {
        const currentArticle = articles[currentArticleIndex];
        code = <div className={"article container"} key={currentArticle.id}>
            <h1 className={"article-title title strong"}>{currentArticle.title}</h1>
            <p className={"article-text"}>{currentArticle.text1}</p>
            <div className="article-imgContainer">
                <img className={"article-img"} src="./images/03-article/img.png" alt="" />
            </div>
            <p className={"article-text"}>{currentArticle.text2}</p>
            <p className={"article-text"}>{currentArticle.text3}</p>
            <p className={"article-text"}>{currentArticle.text4}</p>
            <p className={"article-text"}>{currentArticle.text5}</p>
            <p className={"article-text"}>{currentArticle.text6}</p>
            <div className="container">
                <button onClick={() => goToNextOption(index)} className={"button"}>{currentArticle.first_choice}</button>
            </div>
            <input ref={index} type="hidden" defaultValue={currentArticle.first_index} />
            <input ref={slug} type="hidden" defaultValue={currentArticle.slug} />
        </div>;
    }

    return articles && (
        <Fragment>
            {code}
        </Fragment>
    );
}

Article.propTypes = {
    article: PropTypes.shape({}),
};

export default Article;