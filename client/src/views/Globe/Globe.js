
import React, { Component } from "react"
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
    Markers,
    Marker
} from "react-simple-maps"
import { Spring } from 'react-spring'

const wrapperStyles = {
    width: "100%",
    maxWidth: 980,
    margin: "0 auto",
};

const markers = [
    { id: 0 , pathId: 1,coordinates: [2 , 47]}, // France
    { id: 1 ,  pathId: 2,coordinates: [-118.2436849, 34.0522342] }, // USA (Los Angeles)
    { id: 2 ,  pathId: 2,coordinates : [-73.935242 , 40.730610] }, // USA (New York)
    { id: 3 , pathId: 3,coordinates: [101.901875 , 35.486703]}, // China
    { id: 4 , pathId: 4,coordinates: [-0.11667, 51.5]}, // England
    { id: 5 , pathId: 5,coordinates: [136 , 35]}, // Japan
    { id: 6 , pathId: 2,coordinates: [-96.342476, 30.615011]}, // USA (Texas)
    { id: 7 , pathId: 5,coordinates: [141 , 38]}, // Japan
];


const Globe = ({articleOpen , zoom , center , geoPaths , switchPaths , pathId}) => {
    return (
        <div style={wrapperStyles} className='map-globe'>
            <Spring
                from={{ zoom: 1 }}
                to={{ zoom: zoom }}
            >
                {styles => (
                    <ComposableMap style={{ width: "100%", height: "auto" }}>
                        <ZoomableGroup center={center} zoom={styles.zoom}>
                            <Geographies geography={geoPaths[pathId]} disableOptimization>
                                {(geos, proj) =>
                                    geos.map((geo, i) => (
                                        <Geography
                                            key={i}
                                            geography={geo}
                                            projection={proj}
                                            style={{
                                                default: {
                                                    fill: '#b9b9b9',
                                                    outline: "none"
                                                },
                                                hover: {
                                                    fill: '#b9b9b9',
                                                    outline: "none"
                                                },
                                                pressed: {
                                                    outline: "none"
                                                }
                                            }}
                                        />
                                    ))
                                }
                            </Geographies>
                            <Markers>
                                {markers.map(marker => (
                                    <Marker
                                        marker={marker}
                                        style={{
                                            default: { fill: "#666" , outline: "none"},
                                            hover:   { fill: "#999", outline: 'none' },
                                            pressed: { fill: "#000", outline: 'none' },
                                        }}
                                        onClick={switchPaths}
                                        key={marker.id}
                                    >
                                        <circle cx={ 0 } cy={ 0 } r={ 5 } className="map-markers"/>
                                    </Marker>
                                ))}
                            </Markers>
                        </ZoomableGroup>
                    </ComposableMap>
                )}
            </Spring>
        </div>
    )
};

export default Globe
