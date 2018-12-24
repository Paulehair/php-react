import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ articles, goToFirstOption, goToSecondOption, currentArticleIndex, firstSlug, secondSlug }) => {
    let code;
    if (articles) {
        const currentArticle = articles[currentArticleIndex];
        code = <div key={currentArticle.id}>
            <h1>{currentArticle.title}</h1>
            <h4>{currentArticle.subtitle}</h4>
            <p>{currentArticle.firstText}</p>
            <p>{currentArticle.secondText}</p>
            <button onClick={goToFirstOption}>{currentArticle.firstChoice}</button>
            <input ref={firstSlug} type="hidden" defaultValue={currentArticle.firstSlug} />
            <button onClick={goToSecondOption}>{currentArticle.secondChoice}</button>
            <input ref={secondSlug} type="hidden" defaultValue={currentArticle.secondSlug} />
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