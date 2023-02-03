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
        <a href="#" class="box">
            <i class="fa fa-tasks"></i>
            <h3>Skills</h3>
        </a>
        <div class="box">
            <a href="#"><i class="fa fa-graduation-cap"></i></a>
            <h3>education</h3>
        </div>
         <div class="box">
            <a href="#"><i class="fa fa-file-text"></i></a>
            <h3>CV</h3>
        </div>
        <div class="box">
            <a href="#"><i class="fab fa-deviantart"></i></a>
            <h3>Deviantart</h3>
        </div>
        </div>
</section>
        )
    }
}