import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ articles, goToNextOption, currentArticleIndex, slug, index }) => {
    let code;
    if (articles) {
        const currentArticle = articles[currentArticleIndex];
        code = <div className={"container"} key={currentArticle.id}>
            <h1 className={"article-title title"}>{currentArticle.title}</h1>
            <h4 className={"article-subtitle subtitle"}>{currentArticle.subtitle}</h4>
            <p className={"article-text"}>{currentArticle.text1}</p>
            <div className="article-imgContainer">
                <img className={"article-img"} src="./images/03-article/img.png" alt=""/>
            </div>
            <p className={"article-text"}>{currentArticle.text2}</p>
            <div className="container">
                <button onClick={() => goToNextOption(index)} className={"button"}>{currentArticle.first_choice}</button>
            </div>
            <input ref={index} type="hidden" defaultValue={currentArticle.first_index} />
            <input ref={slug} type="hidden" defaultValue={currentArticle.slug} />
        </div>;
    }

    return articles && (
        <div className="article">
            {code}
        </div>
    );
}

Article.propTypes = {
    article: PropTypes.shape({}),
};

export default Article;