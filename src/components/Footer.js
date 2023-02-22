import React, {Component} from 'react';

export default class Footer extends Component{
    render(){
        return(
        <footer>
   <section class="footer">
    <div class="box-container">
        <div class="box">
            <h3>quick links</h3>
            <a href="home.html"><i class="fa fa-angle-right"></i> home</a>
            <a href="about.html"><i class="fa fa-angle-right"></i> about</a>
            <a href="package.html"><i class="fa fa-angle-right"></i> package</a>
            <a href="book.html"><i class="fa fa-angle-right"></i> book</a>
        </div>
         <div class="box">
            <h3>extra links</h3>
            <a href="#"><i class="fa fa-angle-right"></i> ask question</a>
            <a href="#"><i class="fa fa-angle-right"></i> about me</a>
            <a href="#"><i class="fa fa-angle-right"></i> social media</a>
            <a href="#"><i class="fa fa-angle-right"></i> contact me</a>
        </div>
        <div class="box">
            <h3>contact ME</h3>
            <a href="#"><i class="fab fa-telegram"></i> Telegram</a>
            <a href="#"><i class="fa fa-envelope"></i> email</a>
            <a href="#"><i class="fa fa-map"></i> Jakarta, Indonesia</a>
        </div>
        <div class="box">
            <h3>Follow me !</h3>
            <a href="#"><i class=" fab fa-twitter"></i> twitter</a>
            <a href="#"><i class="fab fa-linkedin"></i> linkedin</a>
        </div>
        <div class="box">
            <img src="assets/icon-photos/Es Kacang Hijau.png" alt="" class="icon-footer"></img>
    </div>
    </div>
    <div class="credit">Created by<span> Adam Rachmat </span> all pixel Art in this website designed by me</div>
   </section> 
</footer>
        )
    }
}