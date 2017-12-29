var React = require('react');
var WeatherMessage = require('./WeatherMessage');
var WeatherForm = require('./WeatherForm');
var { getTemp } = require('../api/openWeatherMap');


var WeatherComponent = React.createClass({
    getDefaultProps: function () {
        return {
            temp: 30,
            city: 'Marrakech'
        }
    },
    getInitialState: function () {
        return {
            temp: this.props.temp,
            city: this.props.city
        }
    },
    handleCityName: function (city) {
        var self = this;
        getTemp(city).then(function (temp) {
            self.setState({
                city,
                temp
            });
        }, function (errorMessage) {
            alert(errorMessage);
        });
    },
    render: function () {
        var { city, temp } = this.state;
        var data = { city, temp }
        return (
            <div>
                <h2>Get Weather</h2>
                <WeatherForm onNewCityName={this.handleCityName} />
                <WeatherMessage data={data} />
            </div>
        );
    }
});

module.exports = WeatherComponent;