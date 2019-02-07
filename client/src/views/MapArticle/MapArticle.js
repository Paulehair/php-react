import React, { Fragment } from 'react';
import Slider from 'react-slick';
import Globe from '../Globe/Globe';
import { Spring } from 'react-spring'


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


const MapArticle = (
    {
        content,
        isMobile,
        changeCurrentStep,
        indexToGoFirst,
        currentStep,
        contentId,
        articleOpen,
        dezoom,
        zoom,
        center,
        geoPaths,
        switchPaths,
        pathId,
        slug
    }) => {
    if (content === null) {
        return <p className='map-loading'>Loading...</p>;
    }

    return <div className="map-article">
        {!isMobile ?
            <div className='map-article_container'>
                <Globe articleOpen={articleOpen} zoom={zoom} center={center} geoPaths={geoPaths} switchPaths={switchPaths} pathId={pathId} />
                <div className="map-discover_text">
                    <p onClick={!articleOpen ? null : dezoom}>{!articleOpen ? 'Cliquez sur les points pour découvrir l’histoire' : 'Cliquez ici pour revenir a la carte'}</p>
                </div>
                <div className="map-content">
                    {contentId !== '' &&
                        <Fragment>
                            <div className="map-bloc_left">
                                <h2 className="map-title">{content[contentId].title}</h2>
                                <h5 className="map-subtitle">{content[contentId].subtitle}</h5>
                                <div className="map-text">
                                    <p>{content[contentId].text1}</p>
                                </div>
                                <div className="map-text">
                                    <p>{content[contentId].text2}</p>
                                </div>
                            </div>
                            <div className="map-bloc_right">
                                <div className="map-media">
                                    {content[contentId].video !== null ?
                                        <iframe src={content[contentId].video}></iframe>
                                        :
                                        <img src={content[contentId].img} alt="" />
                                    }
                                </div>
                                <div className="map-text">
                                    <p>{content[contentId].text3}</p>
                                </div>
                                <div className="map-button">
                                    <button onClick={() => changeCurrentStep(indexToGoFirst)} className="button btn-next">{currentStep.first_choice}</button>
                                    <input ref={indexToGoFirst} type="hidden" value={currentStep.first_index} />
                                    <input ref={slug} type="hidden" defaultValue={currentStep.slug} />
                                </div>
                            </div>
                        </Fragment>
                    }
                </div>
            </div>
            :
            <div>

                <Slider {...sliderSettings}>
                    {content.map(con => {
                        return (
                            <div className="map-slides" key={con.id}>
                                <div className="map-img">
                                    <img src={'maps/' + con.img_country + '.svg'} alt={con.img_country} />
                                </div>

                                <div className="map-content">
                                    <h2 className='map-title title strong'>{con.title}</h2>
                                    <h4 className='map-subtitle subtitle'>{con.subtitle}</h4>
                                    <p className="map-text">{con.text1}</p>
                                    <div className="map-mediaContainer">
                                        {con.img === null ? (
                                            <iframe src={con.video} frameborder="0"></iframe>
                                        ) : (
                                                <img src={con.img} alt="" />
                                            )
                                        }
                                    </div>
                                    {con.text2 !== '' &&
                                        <div className="map-moreContainer">
                                            <input id="show" className="show" type="checkbox" />
                                            <label for="show" className="map-moreText">
                                                En savoir plus
                                            </label>
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
                    <input ref={indexToGoFirst} type="hidden" value={currentStep.first_index} />
                    <input ref={slug} type="hidden" defaultValue={currentStep.slug} />
                </div>
            </div>
        }
    </div>;
}

export default MapArticle;