var React = require('react');
var WeatherMessage = require('./WeatherMessage');
var WeatherForm = require('./WeatherForm');
var ErrorComponent = require('./ErrorComponent');
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
            isLoading: true,
            errorMessage: undefined,
            city: undefined,
            temp: undefined
        });
        var self = this;
        getTemp(city).then(function (temp) {
            self.setState({
                city,
                temp,
                isLoading: false
            });
        }, function (e) {
            self.setState({
                isLoading: false,
                errorMessage: e.message,
            }); 
        });
    },
    componentDidMount: function () {
        var location = this.props.location.query.location;
        if (location && location.length > 0) {
            this.handleCityName(location);
            window.location.hash = '/#';
        }
    },
    componentWillReceiveProps: function (newProps) {
        var location = newProps.location.query.location;
        if (location && location.length > 0) {
            this.handleCityName(location);
            window.location.hash = '/#';
        }
    },
    render: function () {
        var { isLoading, city, temp, errorMessage } = this.state;
        var data = { city, temp }
        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Loading...</h3>
            } else if (temp && city) {
                return <WeatherMessage data={data} />
            }
        }
        function renderError() {
            if (typeof errorMessage === 'string')
                return (
                    <div>
                        <ErrorComponent message={errorMessage} />
                    </div>
                );
        }
        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onNewCityName={this.handleCityName} />
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = WeatherComponent;