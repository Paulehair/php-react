import React, { Fragment } from 'react';
import Slider from 'react-slick';

const GlobalPart = ({ content, currentStepIndex, changeCurrentStep, slug, indexToGoFirst, indexToGoSecond }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: function () {
            return (
                <div className='globalpart-slider-dots'>
                    <span className={"dot"}></span>
                </div>
            );
        },
    };

    let code;
    if (content) {
        const currentStep = content[currentStepIndex];
        code =
            <Fragment>
                <h3 className="title-part">{currentStep.title_part}</h3>
                <div className={"globalpart-imgContainer"}>
                    <img className={"globalpart-img"} src={`./images/03-globalpart/${currentStep.img}`} alt="" />
                </div>
                <div key={currentStep.id} className={"globalpart container"}>

                    <h1 className={"globalpart-title title"}>{currentStep.title}
                        <br />
                        <span className={"strong"}>{currentStep.title_span}</span>
                    </h1>

                    <p className={"globalpart-text1"}>{currentStep.main_text1}</p>

                    <p className={"globalpart-text2"}>{currentStep.main_text2}</p>

                    <div className={"globalpart-quotationContainer"}>
                        <p className={"globalpart-quotation"}>{currentStep.introduction}</p>
                        <p className={"globalpart-source"}>{currentStep.introduction2}</p>
                    </div>
                    <div className="globalpart-slider">
                        <Slider {...settings} >
                            <div className={"globalpart-slide"}>
                                <p className={"globalpart-slide-title"}>{currentStep.subtitle1}</p>
                                <p className={"globalpart-slide-text"}>{currentStep.subcontent1}</p>
                            </div>

                            <div className={"globalpart-slide"}>
                                <p className={"globalpart-slide-title"}>{currentStep.subtitle2}</p>
                                <p className={"globalpart-slide-text"}>{currentStep.subcontent2}</p>
                                <p className={"globalpart-slide-text"}>{currentStep.subcontent21}</p>
                            </div>
                            {currentStep.subtitle3 !== '' &&

                                <div className={"globalpart-slide"}>
                                    <p className={"globalpart-slide-title"}>{currentStep.subtitle3}</p>
                                    <p className={"globalpart-slide-text"}>{currentStep.subcontent3}</p>
                                    <p className={"globalpart-slide-text"}>{currentStep.subcontent31}</p>
                                </div>

                            }
                        </Slider>
                    </div>

                    <div className={"globalpart-btn group-btn"}>
                        <p>Choisir un article</p>
                        <div>
                            <button onClick={() => changeCurrentStep(indexToGoFirst)} className={"button"}>{currentStep.first_choice}</button>
                            <input ref={indexToGoFirst} type="hidden" value={currentStep.first_index} />
                            {currentStep.second_choice !== null &&
                                <Fragment>
                                    <button onClick={() => changeCurrentStep(indexToGoSecond)} className={"button"}>{currentStep.second_choice}</button>
                                    <input ref={indexToGoSecond} type="hidden" value={currentStep.second_index} />
                                </Fragment>
                            }
                        </div>
                    </div>

                </div>
                <input ref={slug} type="hidden" defaultValue={currentStep.slug} />
            </Fragment>
    }

    return content && (
        <Fragment>
            {code}
        </Fragment>
    );
}

export default GlobalPart;