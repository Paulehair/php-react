import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ articles, goToNextOption, currentArticleIndex, slug, index }) => {
    let code;
    if (articles) {
        const currentArticle = articles[currentArticleIndex];
        code = <div key={currentArticle.id}>
            <h1>{currentArticle.title}</h1>
            <h4>{currentArticle.subtitle}</h4>
            <p>{currentArticle.firstText}</p>
            <p>{currentArticle.secondText}</p>
            <button onClick={() => goToNextOption(index)} className={"button"}>{currentArticle.firstChoice}</button>
            <input ref={index} type="hidden" defaultValue={currentArticle.firstIndex} />
            <input ref={slug} type="hidden" defaultValue={currentArticle.slug} />
        </div>;
    }

    return articles && (
        <div>
            {code}
        </div>
    );
}

Article.propTypes = {
    article: PropTypes.shape({}),
};

export default Article;