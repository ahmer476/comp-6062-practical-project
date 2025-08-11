const { createApp } = Vue;

createApp({
    data() {
        return {
            city: 'London',
            province: 'Ontario',
            country: 'Canada',
            word: '',
        };
    },
    methods: {
        // Add method to fetch the data, e.g.:
        getWeather() {
			const url = `https://comp6062.liamstewart.ca/weather-data?city=${this.city}&province=${this.province}&country=${this.country}`;
    
			fetch(url)
				.then(response => response.json())
				.then(data => {
					console.log('Weather Data:', data);
				})
				.catch(error => {
					console.error('Error fetching weather data:', error);
				});
		}

        defineWord() {
			const url = `https://comp6062.liamstewart.ca/api/define?word=${this.word}`;
    
			fetch(url)
				.then(response => response.json())
				.then(data => {
					console.log('Definition:', data);
				})
				.catch(error => {
					console.error('Error fetching definition:', error);
				});
		}

    }
}).mount('#app');