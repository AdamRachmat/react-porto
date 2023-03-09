import React, {Component} from 'react';

export default class Footer extends Component{
    render(){
        return(
        <footer>
   <section class="footer">
    <div class="box-container">
         <div class="box">
            <h3>Others</h3>
            <a href="mailto:adambarata@gmail.com"><i class="fa fa-angle-right"></i> Business Inquiries</a>
            <a href="https://github.com/AdamRachmat"><i class="fa fa-angle-right"></i> Github</a>
        </div>
        <div class="box">
            <h3>Contact</h3>
            <a href="#"><i class="fab fa-telegram"></i> Telegram</a>
            <a href="mailto:adambarata@gmail.com"><i class="fa fa-envelope"></i> Email</a>
            <a href="#"><i class="fa fa-map"></i> Jakarta, Indonesia</a>
        </div>
        <div class="box">
            <h3>Follow me !</h3>
            <a href="#"><i class=" fab fa-twitter"></i> Twitter</a>
            <a href="https://www.linkedin.com/in/adam-rachmat/"><i class="fab fa-linkedin"></i> Linkedin</a>
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