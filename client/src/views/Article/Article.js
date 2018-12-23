import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Article = ({ articles, goToNextPage, currentArticleIndex }) => {


    {/*const currentArticle = articles[currentArticleIndex];*/ }

    {/* 
        find a way not to map here, juste need to render datas of 
        currentArticleIndex which is in the state of ArticleContainer
        SO WE CAN USE currentArticle.data INSTEAD OF article.data
    */ }
    return articles && (
        articles.map(article => (
            <div key={article.id}>
                <h1>{article.title}</h1>
                <h4>{article.subtitle}</h4>
                <p>{article.firstText}</p>
                <p>{article.secondText}</p>
                <button onClick={goToNextPage}>{article.firstChoice}</button>
                {/* 
                A MEDITER
                createRef pour un input qui serait de type invisible 
                avec comme value ce qu'il faut push dans l'history en bdd
                pour aller à la bonne page suivante ??? 
                */}
                <button>{article.secondChoice}</button>
            </div>
        ))
    );
}

Article.propTypes = {
    article: PropTypes.shape({}),
};

export default Article;