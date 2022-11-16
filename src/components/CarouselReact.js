import React from "react";
import "../style.css";
import styled from "styled-components";
import customer1 from "../assets/customer-1.jpg";
import customer2 from "../assets/customer-2.jpg";
import customer3 from "../assets/customer-1.jpg";
import customer4 from "../assets/customer-2.jpg";
import {ReactComponent as FlechaIzquierda} from "../assets/arrow-left.svg";
import {ReactComponent as FlechaDerecha} from "../assets/arrow-right.svg";


const Titulo = styled.h2`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
    text-align: center;
`;

const MainCarousel = styled.div`
    max-width: 1000px;
    margin: 50px auto;
    overflow: hidden;
`;
const ContenedorPrincipal = styled.div`
    position: relative;
`;
const ContenedorSlideShow = styled.div`
    display: flex;  
    flex-wrap: nowrap;
`;
const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: .3s ease all;
    z-index: 10;
    max-height: 400px;
    position: relative;

    img {
        width: 100%;
        vertical-align: top;
    }

    
`;
const TextoSlide = styled.div`
    background: ${props => props.colorFondo ? props.colorFondo : "rgba(20, 25, 45, 0.75)"};
    color: ${props => props.colorTexto ? props.colorTexto : "#e7c138"};
    width: 100%;
    padding: 10px 60px;
    text-align: center;
    position: absolute;
    bottom:0;
    
    @media screen and (max-width: 400px){
        position: relative;
        background: rgba(20, 25, 45, .90);

    }
`;

const Controles = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
`;

const Boton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    width: 50px;
    height: 100%;
    position: absolute;
    transition: .3s ease all;
  

    path {
        filter: ${props => props.derecho ? "drop-shadow(-2px 0px 0px #fff)": "drop-shadow(2px 0px 0px #fff)"};
    }

    ${props => props.derecho ? "right: 0": "left: 0"}

`;





function CarouselReact() {


    return (
        <MainCarousel>
            
            <Titulo>Testimonios de mis compañeros...</Titulo>

            <ContenedorPrincipal>
                <ContenedorSlideShow>
                    <Slide>         
                        <img src={customer1} alt="customer1"/>
                        <TextoSlide>
                            <p>custom1</p>
                        </TextoSlide>
                    </Slide>
                    <Slide>
                        <img src={customer2} alt="customer2"/>
                        <TextoSlide>
                            <p>custom2</p>
                        </TextoSlide>
                    </Slide>
                </ContenedorSlideShow>
                <Controles>
                    <Boton>
                        <FlechaIzquierda />
                    </Boton>
                    <Boton derecho>
                        <FlechaDerecha />
                    </Boton>
                </Controles>
                
            </ContenedorPrincipal>
        </MainCarousel>
    );
}



export default CarouselReact;