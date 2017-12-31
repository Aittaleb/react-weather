var React = require('react');

var WeatherMessage = React.createClass({
    render: function(){
        var { city, temp } = this.props.data;
        return (
            <div>
                <h3 className="text-center">
                    the weather is {temp} in {city}
                </h3>
            </div>
        );
    }
});

module.exports = WeatherMessage;