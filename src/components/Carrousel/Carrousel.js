import React, { Component } from "react";
import Slider from "react-slick";
import Curiosity from "./Texts"
import './styles.css'


export default class SimpleSlider extends Component {
    constructor(props){
        super(props)
        this.state = {
            render:false,
            numberOfText:0,
            show:false,
        }
        this.mostra = this.mostra.bind(this)
    }

    mostra(){
        this.setState({render: !this.state.render})
    }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
          
    };
    return (
      <div className="conteudo">
        <h2> Netuno</h2>
        <Slider {...settings} >
         {Curiosity.map((coisas)=>{
             return(
                 <div>
                     <p key={coisas.id}>{coisas.title}</p>
                     {this.state.render && <div></div>}
                 </div>
             )
         })}
        </Slider>
      </div>
    );
  }
}