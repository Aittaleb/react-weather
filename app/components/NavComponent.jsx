var React = require('react');
var {Link , IndexLink} = require('react-router');

var NavComponent = React.createClass({
    render: function () {
        return (
            <div>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight : 'bold'}}>Get weather</IndexLink>
                <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight : 'bold'}}>About</IndexLink>
                <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight : 'bold'}}>Exapmles</IndexLink>
                 
            </div>
        );
    }
});

module.exports = NavComponent;

