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
            <h1>Programming Languages</h1>
                <p>Golang</p>
                <div class="container">
                <div class="skills golang"></div>
                </div>

                <p>CSS</p>
                <div class="container">
                <div class="skills css"></div>
                </div>

                <p>JavaScript</p>
                <div class="container">
                <div class="skills js"></div>
                </div>

                <p>PHP</p>
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
            <div class="box">
                <h1>last content</h1>
            </div>
        </div>
    </section>
        )
    }
}