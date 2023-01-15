import React, {Component} from 'react';
import axios from 'axios';

export default class Modals extends Component{
fetchData = e => {
    const kota = e.target.value
    fetch(`https://api.myquran.com/v1/sholat/kota/cari/${kota}`)
    .then(response=> { return response.json()});
    

}
    render(){
        return(
            <section class="modals">
    <div class="box-container">
        <div class="box">
        
            <div class="popup" id="popup1">
                <div class="popup-inner">
                    <p>Select Kota</p>
                    <input type="text" class="input-kota" placeholder="Input Here"></input>
                    <p>
                        From API My Quran Valid Till 2030
                        <table class="ibadah">
                            <tr>
                              <th>Pray</th>
                              <th>Times</th>
                            </tr>
                            <tr>
                              <td>Subuh</td>
                              <td>Griffin</td>
                              
                            </tr>
                            <tr>
                              <td>Dzuhur</td>
                              <td>Griffin</td>
                              
                            </tr>
                            <tr>
                              <td>Ashar</td>
                              <td>Swanson</td>
                              
                            </tr>
                            <tr>
                              <td>Magrib</td>
                              <td>Brown</td>
                              
                            </tr>
                            <tr>
                                <td>Isya</td>
                                <td>Brown</td>
                                
                              </tr>
                          </table>
                    </p>
                    <a href="#" class="button">Close popup</a>
                </div>
            </div>
            
        </div>
        </div>
</section>
        )
    }    
}