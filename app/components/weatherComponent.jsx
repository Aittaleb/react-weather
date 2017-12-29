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
            isLoading: false
        }
    },
    handleCityName: function (city) {
        this.setState({
            isLoading: true
        });
        var self = this;
        getTemp(city).then(function (temp) {
            self.setState({
                city,
                temp,
                isLoading: false
            });

        }, function (errorMessage) {
            self.setState({
                isLoading: false
            });
            alert(errorMessage);
        });
    },
    render: function () {
        var { isLoading ,city, temp } = this.state;
        var data = { city, temp }
        function renderMessage(){
            if(isLoading){
                return <h3>Loading...</h3>
            }else if(temp && city ){
                return  <WeatherMessage data={data} />
            }
        }
        return (
            <div>
                <h2>Get Weather</h2>
                <WeatherForm onNewCityName={this.handleCityName} />
                {renderMessage()}
            </div>
        );
    }
});

module.exports = WeatherComponent;