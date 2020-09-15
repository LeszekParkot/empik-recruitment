import React from 'react';
import Map from "./components/map/MapWrapper";
import Slider from "./components/slider/Slider";
import AppContext from "./context";
import HeaderPrimary from "./components/header/HeaderPrimary";

class App extends React.Component {

   state = {
      sliderOff: true,
      sliderProvince: ""
   }

   // function passed to ProvinceArea, shows slider for chosen province
   showSlider = (e) => {
      this.setState({
         sliderOff: false,
         sliderProvince: e.target.id
      });
   }

   // function passed to Slider, hides slider
   hideSlider = () => {
      this.setState({
         sliderOff: true,
         sliderProvince: ""
      });
   }


   render() {
      return (
         <AppContext.Provider value={{ showSlider: this.showSlider }}>

            <div className="container-header">
               <HeaderPrimary>
                  Zadanie Rekrutacyjne
               </HeaderPrimary>
            </div>

            <div className="container-main">
               <Map />
               {
               // conditional rendering slider
                  this.state.sliderOff ?
                     undefined :
                     <Slider
                        province={this.state.sliderProvince}
                        hideSlider={this.hideSlider} />
               }
            </div>

         </AppContext.Provider>
      )
   }
}

export default App;