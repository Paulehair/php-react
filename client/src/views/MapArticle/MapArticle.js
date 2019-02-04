import React from 'react';

const MapArticle = ({ content }) => {
    return content && (
        content.map(currentContent => (
            <div key={currentContent.id}>
                <h4>{currentContent.title}</h4>
                <p>{currentContent.subtitle}</p>
            </div>
        ))
    );
}

export default MapArticle;