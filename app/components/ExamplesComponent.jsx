var React = require('react');
var {Link} = require('react-router');

var ExamplesComponent = () =>(
    <div>
        <h1 className="text-center page-title">
            Examples
        </h1>
        <p>
            here are a few Example locations to try out
        </p>
        <ol>
            <li><Link to="/?location=Marrakech">Marrakech , Morocco</Link></li>
            <li><Link to="/?location=Rabat">Rabat , Morocco</Link></li>
        </ol>
    </div>
);

module.exports = ExamplesComponent;