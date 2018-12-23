import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ articles, goToNextPage, currentArticleIndex }) => {
    let code;
    if (articles) {
        const currentArticle = articles[currentArticleIndex];
        code = <div key={currentArticle.id}>
            <h1>{currentArticle.title}</h1>
            <h4>{currentArticle.subtitle}</h4>
            <p>{currentArticle.firstText}</p>
            <p>{currentArticle.secondText}</p>
            <button onClick={goToNextPage}>{currentArticle.firstChoice}</button>
            {/* 
                A MEDITER
                createRef pour un input qui serait de type invisible 
                avec comme value ce qu'il faut push dans l'history en bdd
                pour aller à la bonne page suivante ??? 
                */}
            <button>{currentArticle.secondChoice}</button>
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