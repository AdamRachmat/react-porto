import React, {Component} from 'react';

export default class Modals extends Component{
        constructor(){
        super();
        this.state={
            jadwal:[],
            kota: '',
            data:[],
            idKota:'',
            isLoaded:false
        };
        
        };
        async handleChange(event){
            this.setState({kota: event.target.value});
        };
        async handleClick(){
                const headers = {'Content-Type': 'application/json', 'Accept': 'application/json'};
                const url = await `https://api.myquran.com/v1/sholat/kota/cari/${this.handleChangeResult()}`;
                
                await fetch(url,{headers})
                .then(async response=>{
                    const dt = await response.json();
                    if(!response.ok){
                        const error = (dt && dt.Message) || response.statusText;
                        return Promise.reject(error);
                    }
                    this.setState({data: dt.data});
                })
                .then (this.getIdkota())
                .catch(error=>{
                    this.setState({data: error.toString()});
                    return ('Ada Kesalahan',error);
                });
                this.fetchJadwal();
        };
        async fetchJadwal(){
            const url = await `https://api.myquran.com/v1/sholat/jadwal/${this.state.idKota}/${this.getTodayDate()}`;
            await fetch(url, {mode:'cors'})
                .then(async response=>{
                    const dt = await response.json();
                    if(!response.ok){
                        const error = (dt && dt.Message) || response.statusText;
                        return Promise.reject(error);
                    }
                    return this.setState({jadwal: (dt.data.jadwal)});
                })
                .catch(error=>{
                    this.setState({jadwal: error.toString()});
                    return ('Ada Kesalahan',error);
                });    
                console.log(this.state.jadwal);
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
            this.state.data.map((data, urutan) =>{
                if(urutan === 0)
                dataList.push(data.id);
            })
            return this.setState({idKota: dataList.toString()});
        }
        setJadwal(){
            return (this.state.jadwal);
        }
    render(){
        
        return(
<section class="modals">
    <div class="box-container">
        <div class="box">
            <div class="popup" id="popup1">
                <div class="popup-inner">
                    <p>Select Kota, {this.getTodayDate()}</p>
                    <input type="text" class="input-kota" key="kota" placeholder="Input Here" value={this.state.kota} onChange={this.handleChange.bind(this)}></input>
                    <p>
                        <p>From API My Quran Valid Till 2030 - {this.handleChangeResult()} - </p>
                        <button href="#" class="" onClick={this.handleClick.bind(this)}>SUBMIT</button>
                        <table class="ibadah">
                            <tr>
                              <th>Pray</th>
                              <th>Times</th>
                            </tr>
                           
                            <tr>
                              <td>Subuh</td>
                              <td>{this.setJadwal().subuh}</td>
                            </tr>
                            <tr>
                              <td>Dzuhur</td>
                              <td>{this.setJadwal().dzuhur}</td>
                              
                            </tr>
                            <tr>
                              <td>Ashar</td>
                              <td>{this.setJadwal().ashar}</td>
                              
                            </tr>
                            <tr>
                              <td>Magrib</td>
                              <td>{this.setJadwal().maghrib}</td>
                              
                            </tr>
                            <tr>
                                <td>Isya</td>
                                <td>{this.setJadwal().isya}</td>
                                
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