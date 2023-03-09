import React, {Component} from 'react';
import Bg1 from '../assets/images/dddepth-311.jpg';
import QRCode from "qrcode.react";
export default class Content extends Component{
    constructor(){
        super();
        this.state={
            Qrcode:"",
        };
    }
    handleOnChange(event){
        this.setState({Qrcode: event.target.value});
    }
    downloadQrcode(){
        if(this.state.Qrcode === ""){
            alert("please fill the box please :)")
        } else {
        const canvas = document.getElementById("qr-gen");
        const pngUrl = canvas
        .toDataURL("images/png")
        .replace("image/png", "image/octet-stream");

        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = `${this.state.Qrcode} - qrcode.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }
    };
    render(){
        return(
    <section class="content">
        <div class="box-container">
            <div class="box">
            <h1>Interest</h1>
                <h2>Golang</h2>
                <div class="container">
                <div class="skills golang"></div>
                </div>

                <h2>CSS</h2>
                <div class="container">
                <div class="skills css"></div>
                </div>

                <h2>JavaScript</h2>
                <div class="container">
                <div class="skills js"></div>
                </div>

                <h2>PHP</h2>
                <div class="container">
                <div class="skills php"></div>
                </div>
            </div>
            <div class="box">
                <h1 class="title-qr">QRcode generator</h1>
                <div class="b-qrcode">
                <button type="button" onClick={this.downloadQrcode.bind(this)}>Download</button>
                </div>
                <QRCode
                id="qr-gen"
                value={this.state.Qrcode}
                size={130}
                level={"L"}
                includeMargin={true}
                class="qrcode"
                />
            <input type="text" class="input-qr" value={this.state.Qrcode} placeholder="paste here" onChange={this.handleOnChange.bind(this)}></input>
           <img src={Bg1} class="bg-1"></img>
            </div>
        </div>
        <div class="box-container">
            <div class="box-content2">
                <h1><i class="fa fa-cog"></i> Services</h1>
                <p>Not just for frontend, i do development for backend too!
                    Using php, or nodejs frameworks.
                </p>
            </div>
            <div class="box-content2">
                <h1><i class="fa fa-sitemap"></i> REST API</h1>
                <p> For the backend services, im using REST API Architechture</p>
            </div>
            <div class="box-content2">
                <h1>Frontend Frameworks</h1>
                <p>Im using reactJS and now learning angular for future
                    project
                </p>
            </div>
        </div>
    </section>
        )
    }
}