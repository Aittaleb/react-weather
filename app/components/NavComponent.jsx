var React = require('react');
var {Link} = require('react-router');

var NavComponent = React.createClass({
    render: function () {
        return (
            <div>
                <Link to="/">Get weather</Link>
                <Link to="/about">About</Link>
                <Link to="/examples">Exapmles</Link>
                 
            </div>
        );
    }
});

module.exports = NavComponent;

