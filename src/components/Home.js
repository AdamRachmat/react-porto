import React, {Component} from 'react';
import Cendol from '../assets/images/cendolPixelart.png'
export default class Home extends Component{
    render(){
        return(
            <section class="home">
    <div class="box-container">
        <div class="box">
            
            <div class="container-image">
                <h1 class="pantun">Hello there ! Adam Rachmat here, I'm a frontend developer
                    i do lot of things such as, developing UI, designing website,<br></br>
                    and do artworks to !
                    </h1>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="blobred">
                <path fill="#198e6f" d="M42.3,-48.3C57.4,-37.8,73.8,-26.9,80,-11.3C86.1,4.3,81.9,24.6,72.4,42.5C62.9,60.4,48.1,76,30,82.8C11.8,89.7,-9.7,87.8,-22.9,76.9C-36.1,66.1,-40.9,46.2,-49.9,29.4C-58.9,12.5,-72.2,-1.3,-73.1,-15.8C-74,-30.3,-62.6,-45.6,-48.3,-56.3C-34,-66.9,-17,-73,-1.7,-71C13.6,-69,27.3,-58.9,42.3,-48.3Z" transform="translate(100 100)" />
              </svg>
            <img src={Cendol} alt="" class="cendol"></img>
        </div>
        </div>
        </div>
</section>
        )
    }
}