import React, { Component } from "react"
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
} from "react-simple-maps"

const wrapperStyles = {
    width: "100%",
    maxWidth: 980,
    margin: "0 auto",
}

class Globe extends Component {
    constructor(props){
        super(props);
        this.state = {
            center: [0 , 20],
            zoom: 1,
            countries : [
                {
                    name : 'United States' , coordinates : [-97.922211 , 39.381266]
                }
            ]
        };
    }
    render() {
        return (
            <div style={wrapperStyles}>
                <ComposableMap
                    projectionConfig={{
                        scale: 205,
                        rotation: [-11,0,0],
                    }}
                    width={980}
                    height={551}
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                >
                    <ZoomableGroup center={this.state.center} zoom={this.state.zoom} disablePanning>
                        <Geographies geography="maps/world-50m.json">
                            {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                                <Geography
                                    key={i}
                                    geography={geography}
                                    projection={projection}
                                    style={{
                                        default: {
                                            fill: "#ECEFF1",
                                            stroke: "#ECEFF1",
                                            strokeWidth: 0.75,
                                            outline: "none",
                                        },
                                        hover: {
                                            fill: "#ECEFF1",
                                            stroke: "#ECEFF1",
                                            strokeWidth: 0.75,
                                            outline: "none",
                                        },
                                        pressed: {
                                            fill: "#ECEFF1",
                                            stroke: "#ECEFF1",
                                            strokeWidth: 0.75,
                                            outline: "none",
                                        },
                                    }}
                                />
                            ))}
                        </Geographies>
                    </ZoomableGroup>
                </ComposableMap>
            </div>
        )
    }
}

export default Globe
