import React from 'react';
import Map from "./components/map/MapWrapper";
import Slider from "./components/slider/Slider";
import AppContext from "./context";

class App extends React.Component{

    state = {
        sliderOff: true,
        sliderProvince: ""
    }

    showSlider = (e) => {
        this.setState({
            sliderOff: false,
            sliderProvince: e.target.id
        });
        console.log(e.target.id);
    }

    hideSlider = () => {
        this.setState({
            sliderOff: true,
            sliderProvince: ""
        });
    }



    render(){
        console.log(this.state.sliderOff);

        return (
            <AppContext.Provider
                value={{ showSlider: this.showSlider }}>
                <Map />
                {
                    this.state.sliderOff ?
                    undefined :
                    <Slider
                        province = { this.state.sliderProvince }
                        hideSlider = { this.hideSlider } />
                }
            </AppContext.Provider>
        );
    }

}

export default App;
