var React = require('react');
var WeatherMessage = require('./WeatherMessage');
var WeatherForm = require('./WeatherForm');


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
    handleCityName : function(city){
        this.setState({
            city
        });
    },
    render: function () {
        var city = this.state.city;
        return (
            <div>
                <h2>Get Weather</h2>
                <WeatherForm onNewCityName={this.handleCityName} />
                <WeatherMessage message={city} />
            </div>
        );
    }
});

module.exports = WeatherComponent;