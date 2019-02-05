import React , {Fragment} from 'react';
import Slider from 'react-slick';
import Globe from './Globe';


const sliderSettings = {
    dots: window.innerWidth <= 768 ? true : false,
    slidesToShow: 1,
    customPaging: function () {
        return (
            <div className='map-dots'></div>
        );
    },
    infinite: false,
    arrows: false,
    adaptiveHeight: true,
};


const MapArticle = ({ content , isMobile , changeCurrentStep , indexToGoFirst , currentStep}) => {
    return content && <div className="map-article">
        {!isMobile ?
            <div>
                <Globe/>
                <div className="map-discover_text">
                    <p>Cliquez sur les points pour découvrir l’histoire</p>
                </div>
                <div className="map-content"/>
                <div className="map-button">
                    <button onClick={() => changeCurrentStep(indexToGoFirst)} className="button btn-next">{currentStep.first_choice}</button>
                </div>
            </div>
            :
            <div>

                <Slider {...sliderSettings}>
                    {content.map(con => {
                        return (
                            <div className="map-slides" key={con.id}>
                                <div className="map-img">
                                    <img src={'maps/' + con.img_country + '.svg'} alt={con.img_country}/>
                                </div>

                                <div className="map-content">
                                    <h2 className='map-title title strong'>{con.title}</h2>
                                    <h4 className='map-subtitle subtitle'>{con.subtitle}</h4>
                                    <p className="map-text">{con.text1}</p>
                                    <div className="map-mediaContainer">
                                        {con.img === null ? (
                                            <video controls>
                                                <source src={`${con.video}`}/>
                                            </video>
                                            ) : (
                                            <img src={`${con.img}`} alt="image" />
                                            )
                                        }
                                    </div>
                                    {con.text2 !== '' &&
                                        <div className="map-moreContainer">
                                            <label for="show" className="map-moreText">
                                                En savoir plus
                                            </label>
                                            <input id="show" className="show" type="checkbox" />
                                            <div className="map-more">
                                                <p className="map-text">{con.text2}</p>
                                                <p className="map-text">{con.text3}</p>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        )
                    })}
                </Slider>
                <div className="map-button">
                    <button onClick={() => changeCurrentStep(indexToGoFirst)} className="button btn-next">{currentStep.first_choice}</button>
                </div>
            </div>
        }
    </div>;
}

export default MapArticle;