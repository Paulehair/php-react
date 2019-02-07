import React, { Component } from 'react';
import MapArticle from './MapArticle';
import { fetchMapArticle } from '../../helpers/api';

class MapArticleContainer extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            content: null,
            sliderIndex: 0,
            isMobile: window.innerWidth <= 768,
            contentId: '',
            articleOpen: false,
            geoPaths: [
                'maps/world-50m.json',
                'maps/france.json',
                'maps/ch.json'
            ],
            center: [0 , 20],
            zoom: 1,
            pathId: 0
        })
    }

    async componentDidMount() {
        const data = await fetchMapArticle();
        this.setState({
            content: data,
        })
    }

    switchPaths = (e) => {
        const { detail , geoPaths } = this.state;
        this.setState({
            zoom: 60,
            contentId: e.id,
            articleOpen: true,
            pathId: e.pathId,
        });
        document.querySelector('.map').classList.add('articleOpen');
    };

    dezoomMap = () => {
        this.setState({ zoom: 1 , pathId: 0 , articleOpen: false});
        document.querySelector('.map').classList.remove('articleOpen');
    };

    render() {
        const { content, sliderIndex , isMobile , contentId , center , zoom , geoPaths, articleOpen , pathId} = this.state;
        const {changeCurrentStep , currentStep , indexToGoFirst } = this.props;
        return (
            <MapArticle
                content={content}
                sliderIndex={sliderIndex}
                isMobile={isMobile}
                changeCurrentStep={changeCurrentStep}
                currentStep={currentStep}
                indexToGoFirst={indexToGoFirst}
                contentId={contentId}
                articleOpen={articleOpen}
                dezoom={this.dezoomMap}
                zoom={zoom}
                center={center}
                geoPaths={geoPaths}
                switchPaths={this.switchPaths}
                pathId={pathId}
            />
        );
    }
}

export default MapArticleContainer;