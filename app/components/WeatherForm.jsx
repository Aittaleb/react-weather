var React = require('react');

var WeatherForm = React.createClass({
    render : function(){
        return(
            <form onSubmit={this.onFormSubmitted}>
                <input type="text" ref="cityName" placeHolder="enter the city name"/>
                <button> Get Weather </button>
            </form>
        );
    },
    onFormSubmitted : function(e){
        e.preventDefault();
    }
});

module.exports = WeatherForm;