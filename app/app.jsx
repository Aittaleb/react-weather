var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

var MainComponent = require('./components/MainComponent.jsx');
var NavComponent = require('./components/NavComponent.jsx');
var WeatherComponent = require('./components/weatherComponent');
var AboutComponent = require('./components/AboutComponent');
var ExamplesComponent = require('./components/ExamplesComponent');


// load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
//load css
require('style!css!sass!app/styles/app.scss')


$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={MainComponent}>
            <IndexRoute component={WeatherComponent} />
            <Route path="about" component={AboutComponent}></Route>
            <Route path="examples" component={ExamplesComponent}></Route>
        </Route>

    </Router>,
    document.getElementById('app')
);
