import React, {useState} from "react";

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
        <a href="index.html" class="logo"></a><img src="#" alt="" class="icon-website"></img>
        <nav className={this.state.isClassActive ? 'navbar '+'active' : 'navbar'}>
            <a href="index.html">Home</a>
            <a href="about.html">Profile</a>
            <a href="package.html">Github</a>
            <a href="book.html">Project</a>
        </nav>
        <div id="menu-btn" className={this.state.isClassActive ? 'fa fa-times' : 'fa fa-bars'} onClick={this.toggleClass}></div>
    </section>
    )
}
}
export default Header;