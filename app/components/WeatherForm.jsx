var React = require('react');

var WeatherForm = React.createClass({
    render: function () {
        return (
            <form onSubmit={this.onFormSubmitted}>
                <input type="search" ref="cityName" placeholder="enter the city name" />
                <button className="expanded hollow button"> Get Weather </button>
            </form>
        );
    },
    onFormSubmitted: function (e) {
        var city = this.refs.cityName.value;
        e.preventDefault();
        if (city.length > 0) {
            this.refs.cityName.value = '';
            this.props.onNewCityName(city);
        }

    }
});

module.exports = WeatherForm;