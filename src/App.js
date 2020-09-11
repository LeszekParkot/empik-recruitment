import React from 'react';
import Map from "./components/map/MapWrapper";
import Slider from "./components/slider/Slider";
import AppContext from "./context";

class App extends React.Component{

    state = {
        sliderOff: true
    }

    testFunction = (e) => {
        this.setState({ sliderOff: false });
        console.log(e.target.id);
    }

    testFunction2 = () => {
        console.log("siema");
    }

    render(){
        console.log(this.state.sliderOff);

        return (
            <AppContext.Provider value={{
                testFunction: this.testFunction,
                testFunction2: this.testFunction2}}>
                <Map />
                {
                    this.state.sliderOff || <Slider />
                }
            </AppContext.Provider>
        );
    }

}

export default App;
