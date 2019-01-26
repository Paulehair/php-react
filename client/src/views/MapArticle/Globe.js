import React from 'react';
import {
    ComposableMap,
    ZoomableGroup,
    ZoomableGlobe,
    Geographies,
    Geography
  } from "react-simple-maps"

const mapStyles = {
    width: "100%",
    height: "auto",
}

const cities = [
    { name: "France", coordinates: [2.618787,47.824905] },
    { name: "Etats-Unis", coordinates: [-100,40] },
    { name: "Chine", coordinates: [103,35] },
    { name: "Angleterre", coordinates: [-0.11667,51.5] },
    { name: "Japon", coordinates: [136,35] },
];

class Globe extends React.Component {
    state = {
        center: [0 , 0],
        zoom: 1,
    }
    redirectCity = center => () => {
        console.log('hello');
    }

    componentDidMount(){
        cities.forEach(element => {
            if(element.name.includes(this.props.location)){
                this.setState({
                    center: element.coordinates
                })
            } else {
                console.log('💩');
            }
        });
    }
    render(){
        return(
          <div>
          {/* <Motion
            defaultStyle={{
              x: center[0],
              y: center[1]
            }}
            style={{
              x: spring(center[0]),
              y: spring(center[1])
            }}
          > */}
              <ComposableMap
                width={500}
                height={500}
                projection="orthographic"
                projectionConfig={{ scale: 220 }}
                style={mapStyles}
              >
                <ZoomableGlobe center={this.state.center} zoom={this.state.zoom} style={{stroke: 'red'}} onChange={this.redirectCity}>
                  <circle
                    cx={250}
                    cy={250}
                    r={220}
                    fill="transparent"
                    stroke="#CFD8DC"
                  />
                  <Geographies
                    disableOptimization
                    geography="https://unpkg.com/world-atlas@1.1.4/world/110m.json"
                  >
                    {(geos, proj) =>
                      geos.map((geo, i) => (
                        <Geography
                          key={geo.id + i}
                          geography={geo}
                          projection={proj}
                          style={{
                            default: { fill: "#CFD8DC" },
                            stroke: 'red'
                          }}
                        />
                      ))
                    }
                  </Geographies>
                </ZoomableGlobe>
              </ComposableMap>
          {/* </Motion> */}
        </div>
        )
    }
  }

  export default Globe;