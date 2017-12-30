var React = require('react');

var WeatherMessage = React.createClass({
    render: function(){
        var { city, temp } = this.props.data;
        return (
            <div>
                <p>
                    the weather is {temp} in {city}
                </p>
            </div>
        );
    }
});

module.exports = WeatherMessage;