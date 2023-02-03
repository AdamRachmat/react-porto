import React, {Component} from 'react';

export default class Modals extends Component{
        constructor(){
        super();
        this.state={
            kota: '',
            data:[],
            jadwal:[],
            isLoaded:false
        };
        };
        async handleChange(event){
            this.setState({kota: event.target.value});
        };
        async handleKeyDown(event){
            if(event.key==='Enter'){
                const headers = {'Content-Type': 'application/json', 'Accept': 'application/json'};
                const url = `https://api.myquran.com/v1/sholat/kota/cari/${this.handleChangeResult()}`;
                
                await fetch(url,{headers})
                .then(async response=>{
                    const dt = await response.json();
                    if(!response.ok){
                        const error = (dt && dt.Message) || response.statusText;
                        return Promise.reject(error);
                    }
                    this.setState({data: dt.data});
                })
                .catch(error=>{
                    this.setState({data: error.toString()});
                    return ('Ada Kesalahan',error);
                });
                this.fetchJadwal();
            }
        };
        async fetchJadwal(){
                let requestOptions = {
                    method:'GET',
                    redirect:'follow'
                }
                const headers = {'Content-Type': 'application/json', 'Accept': 'application/json'};
                const url = `https://api.myquran.com/v1/sholat/jadwal/1609/2021/06/23`;
                
                await fetch(url,{requestOptions})
                .then(async response=>{
                    const jd = await response.json();
                    if(!response.ok){
                        const error = (jd && jd.Message) || response.statusText;
                        return Promise.reject(error);
                    }
                    this.setState({jadwal: jd.data});
                })
                .catch(error=>{
                    this.setState({jadwal: error.toString()});
                    return ('Ada Kesalahan',error);
                });

                return(this.state.jadwal.toLowerCase());
        }
        handleChangeResult(){
            return(this.state.kota.toLowerCase());
        }
        async componentDidMount(){
            
        }
        
        getTodayDate(){
            let day = new Date().getDate();
            let month = new Date().getMonth()+1;
            let years = new Date().getFullYear();
            return (`${years}/${month}/${day}`).toString();
        };
        getIdkota(){
            let dataList = [];
            let zero = 0;
            this.state.data.map((data, urutan) =>{
                if(urutan === 0)
                return dataList.push(JSON.parse(data.id))
            })
            return dataList.toString();
        }
        getJadwal(){
            let jadwalList = [];
            this.state.jadwal.map((data) =>{
                return jadwalList.push((data.jadwal))
            })
            return jadwalList.toString();
        }
    render(){
        return(
            <section class="modals">
    <div class="box-container">
        <div class="box">
        
            <div class="popup" id="popup1">
                <div class="popup-inner">
                    <p>Select Kota, {this.getTodayDate()}</p>
                    <input type="text" class="input-kota" key="kota" placeholder="Input Here" value={this.state.kota} onKeyDown={this.handleKeyDown.bind(this)} onChange={this.handleChange.bind(this)}></input>
                    <p>
                        <p>From API My Quran Valid Till 2030 - {this.handleChangeResult()}</p>
                        <table class="ibadah">
                            <tr>
                              <th>Pray</th>
                              <th>Times</th>
                            </tr>
                           
                            <tr>
                              <td>Subuh</td>
                              <td>{this.getIdkota()}</td>
                            </tr>
                            <tr>
                              <td>Dzuhur</td>
                              <td>{this.getJadwal()}</td>
                              
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