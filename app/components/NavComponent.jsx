var React = require('react');
var { Link, IndexLink } = require('react-router');

var NavComponent = React.createClass({
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get weather</IndexLink>
                        </li>
                        <li>
                            <IndexLink to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</IndexLink>
                        </li>
                        <li>
                            <IndexLink to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Exapmles</IndexLink>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search Weather" ref="searchedLocation" />
                            </li>
                            <li>
                                <button className="button" type="submit" className="hollow button">Search</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    },
    onSearch: function (e) {
        e.preventDefault();
        var location = this.refs.searchedLocation.value;
        if (location && location.length > 0) {
            var encodedLocation = encodeURIComponent(location);
            this.refs.searchedLocation.value = '';
            window.location.hash = '#/?location=' + encodedLocation;
        }
    }
});

module.exports = NavComponent;



