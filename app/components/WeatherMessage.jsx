var React = require('react');

var WeatherMessage = React.createClass({
    render : function(){
        var message = this.props.message;
        return(
            <div>
                <p>
                    {message}
                </p>
            </div>
        );
    }
});

module.exports = WeatherMessage;