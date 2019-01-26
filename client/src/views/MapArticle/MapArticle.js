import React from 'react';
import SliderArrow from './SliderArrow';
import Slider from 'react-slick';
import Globe from './Globe';


const sliderSettings = {
    dots: true,
    slidesToShow: 1,
    customPaging: function () {
        return (
            <i className="icon-circle"></i>
        );
    },
    infinite: false,
    prevArrow: <SliderArrow to="prev" />,
    nextArrow: <SliderArrow to="next" />
};


const MapArticle = ({ content }) => {
    return content && (
        <div className="mapArticle">
            <Slider {...sliderSettings}>
                {content.map(con => {
                    return (
                        <div className="map-slides" key={con.id}>
                            {/* <img src='./images/05-map/map.png' alt="map" /> */}   
                            <Globe location={con.img_country} />      
                            <div className="map-content">
                                <h2>{con.title}</h2>
                                <h4>{con.subtitle}</h4>
                                <p>{con.text1}</p>
                                <p>{con.text2}</p>
                                <p>{con.text3}</p>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}

export default MapArticle;