var React = require('react');

var WeatherMessage = React.createClass({
    render : function(){
        return(
            <div>
                <p>
                    The weather is 15 in Marrakech
                </p>
            </div>
        );
    }
});

module.exports = WeatherMessage;