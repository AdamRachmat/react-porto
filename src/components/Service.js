import React, {Component, useState} from "react";

export default class Service extends Component{
    render(){
        return(
            <section class="services">
    <h1 class="heading-title"></h1>
    <div class="box-container">
        <a href="#popup1" class="box">
            <i class="fa fa-calendar"></i>
            <h3>PrayerTimes</h3>
        </a>
        <a href="https://discordapp.com/users/334701535671877633" class="box">
            <i class="fab fa-discord"></i>
            <h3>Discord</h3>
        </a>
        <a href="mailto:adambarata@gmail.com" class="box">
            <a ><i class="fa fa-envelope"></i></a>
            <h3>Contact me</h3>
        </a>
         <a href="https://www.linkedin.com/in/adam-rachmat/"class="box">
            <i class="fab fa-linkedin"></i>
            <h3>Linkedin</h3>
        </a>
        <a href="https://www.deviantart.com/envreddish" class="box">
           <i class="fab fa-deviantart"></i>
            <h3>Deviantart</h3>
        </a>
        </div>
</section>
        )
    }
}