import React, { Component } from 'react';

import { Chart, Cards, CountryPicker } from './components';
import styles from './App.module.css';
import Footer from './components/Footer/Footer';

import { fetchData } from './api';

import covid19 from './img/ravi.png';

class App extends Component {
    state = { 
        data: {},
        country: ''
     }

    async componentDidMount () {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country});
    }

    render() { 
        const { data, country } = this.state;

        return ( 
            <div className={styles.container}>
                <img src={covid19} className={styles.covid} alt="COVID-19" />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
                <Footer />
            </div>
         );
    }
}
 
export default App;