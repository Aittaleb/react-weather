var React = require('react');
var NavComponent = require('./NavComponent');
var WeatherComponent = require('./weatherComponent');

var MainComponent = React.createClass({
    render: function () {
        return (
            <div>
                <NavComponent/>
                <h1>Main Component</h1>
                {this.props.children}
            </div>
        );
    }
});

module.exports = MainComponent;