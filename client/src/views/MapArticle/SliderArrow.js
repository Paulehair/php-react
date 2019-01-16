import React from 'react';

const SliderArrow = ({to , onClick , sliderNav}) => {
    let icon = to === 'prev' ?  <button type="button" onClick={onClick} className="icon-prev slick-arrow slick-prev slick-disabled"></button> : <button onClick={onClick} className="icon-next slick-arrow slick-next slick-disabled"></button>;
    
    return(
        <div>{icon}</div>
    )
}

export default SliderArrow;