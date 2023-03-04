import React, {useState} from "react";
import Eskacang from '../assets/images/Es Kacang Hijau.png';
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isClassActive: false,
        };
    }
    toggleClass = ()=>{
        this.setState({isClassActive : !this.state.isClassActive});
    }
render(){
    return (
    <section class="header">
        <a href="index.html" class="logo"><img src={Eskacang} alt="" class="icon-website"></img></a>
        <nav className={this.state.isClassActive ? 'navbar '+'active' : 'navbar'}>
            <a href="book.html">github</a>
        </nav>
        <div id="menu-btn" className={this.state.isClassActive ? 'fa fa-times' : 'fa fa-bars'} onClick={this.toggleClass}></div>
    </section>
    )
}
}
export default Header;