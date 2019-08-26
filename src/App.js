import React from 'react';
import './App.css';
import {Countries} from './components/Countries';
import {States} from './components/States';
import {Cities} from './components/Cities';
import {City} from './components/City';
import {MenuButton} from './components/MenuButton';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'countries',
            currentHeading: 'Velg land',
            activeCountry: '',
            activeState: '',
            activeCity: '',
            countries: [],
            states: [],
            cities: [],
            city: []
        }
        this.countryClick = this
            .countryClick
            .bind(this);
        this.stateClick = this
            .stateClick
            .bind(this);
        this.cityClick = this
            .cityClick
            .bind(this);
        this.goHome = this
            .goHome
            .bind(this);
    }

    goHome() {
        this.setState({currentPage: 'countries', currentHeading: 'Velg land', activeCountry:'',activeState:'', activeCity:''});
    }

    countryClick(e) {
        //Now we have a country, so let us show it's states
        const country = e.target.innerHTML;
        console.log("Received country from click: " + country);
        const apiUrl = 'https://api.airvisual.com/v2/states?country=' + country
        const apiToken = '&key=ed7e324f-30b6-48b3-aaa3-e02f7691deab'
        console.log("Fetching... " + apiUrl + apiToken);
        fetch(apiUrl + apiToken)
            .then(res => res.json())
            .then(json => json.data)
            .then(states => this.setState({
                'states': states
            }, () => {
                console.log("App state inside callback:", this.state);
                this.setState({
                    currentPage: 'states',
                    currentHeading: country + ' - velg stat',
                    activeCountry: country,
                    activeState: '',
                    activeCity:'',
                })
            }))
    }

    stateClick(e) {
        //Now we have a country and a state, so let us show cities
        const state = e.target.innerHTML;
        console.log("Received state from click: " + state);
        const apiUrl = 'https://api.airvisual.com/v2/cities?state=' + state + '&country=' + this.state.activeCountry
        const apiToken = '&key=ed7e324f-30b6-48b3-aaa3-e02f7691deab'
        console.log("Fetching... " + apiUrl + apiToken);
        fetch(apiUrl + apiToken)
            .then(res => res.json())
            .then(json => json.data)
            .then(cities => this.setState({
                'cities': cities
            }, () => {
                this.setState({
                    currentPage: 'cities',
                    currentHeading: state + ', ' + this.state.activeCountry + ' - velg by',
                    activeState: state,
                    activeCity: '',
                })
            }))
    }

    cityClick(e) {
        //And now we also have a city, so lets get the goddamn data
        const city = e.target.innerHTML;
        console.log("Received city from click: " + city);
        const apiUrl = 'https://api.airvisual.com/v2/city?state=' + this.state.activeState + '&country=' + this.state.activeCountry + '&city=' + city
        const apiToken = '&key=ed7e324f-30b6-48b3-aaa3-e02f7691deab'
        console.log("Fetching... " + apiUrl + apiToken);
        fetch(apiUrl + apiToken)
            .then(res => res.json())
            .then(json => json.data)
            .then(cityData => this.setState({
                'city': cityData
            }, () => {
                console.log("State city data:", this.state.city);
                this.setState({
                    currentPage: 'city',
                    currentHeading: city + ', ' + this.state.activeState + ', ' + this.state.activeCountry,
                    activeCity: city
                })
            }))
    }
    componentDidMount() {
        const apiUrl = 'https://api.airvisual.com/v2/countries'
        const apiToken = '?key=ed7e324f-30b6-48b3-aaa3-e02f7691deab'
        console.log("Fetching... " + apiUrl + apiToken);
        fetch(apiUrl + apiToken)
            .then(res => res.json())
            .then(json => json.data)
            .then(countries => this.setState({'countries': countries}))
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <nav>
                        <MenuButton handleClick={this.goHome} title='Hjem' />
                        <MenuButton handleClick={this.countryClick} title={this.state.activeCountry} />
                        <MenuButton handleClick={this.stateClick} title={this.state.activeState} />
                        <MenuButton handleClick={this.cityClick} title={this.state.activeCity} />
                    </nav>
                    <h1>{this.state.currentHeading}</h1>
                    <hr/>
                    <br/>
                </header>
                {(this.state.currentPage === 'countries') && <Countries countries={this.state.countries} handleClick={this.countryClick}/>}

                {(this.state.currentPage === 'states') && <States states={this.state.states} handleClick={this.stateClick}/>}

                {(this.state.currentPage === 'cities') && <Cities cities={this.state.cities} handleClick={this.cityClick}/>}

                {(this.state.currentPage === 'city') && <City cityData={this.state.city}/>}
            </div>
        );
    }
}

export default App;
