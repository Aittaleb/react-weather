var React = require('react');
var WeatherMessage = require('./WeatherMessage');
var WeatherForm = require('./WeatherForm');


var WeatherComponent = React.createClass({
    render : function(){
        return(
            <div>
                <h2>Get Weather</h2>
                <WeatherForm />
                <WeatherMessage />
            </div>
        );
    }
});

module.exports = WeatherComponent;