import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ articles, goToNextOption, currentArticleIndex, slug }) => {
    let code;
    if (articles) {
        const currentArticle = articles[currentArticleIndex];
        code = <div key={currentArticle.id}>
            <h1>{currentArticle.title}</h1>
            <h4>{currentArticle.subtitle}</h4>
            <p>{currentArticle.firstText}</p>
            <p>{currentArticle.secondText}</p>
            <button onClick={goToNextOption}>{currentArticle.firstChoice}</button>
            <input type="hidden" defaultValue={currentArticle.indexOfFirst} />
            <button onClick={goToNextOption}>{currentArticle.secondChoice}</button>
            <input type="hidden" defaultValue={currentArticle.indexOfSecond} />
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