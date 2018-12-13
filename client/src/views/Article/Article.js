import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ articles }) => {
    return articles && (
        articles.map(article => (
            <div>
                <h1>{article.title}</h1>
                <h4>{article.subtitle}</h4>
                <p>{article.firstText}</p>
                <p>{article.secondText}</p>
                <button>{article.firstChoice}</button>
                <button>{article.secondChoice}</button>
            </div>
        ))
    );
}

Article.propTypes = {
    article: PropTypes.shape({}),
};

export default Article;