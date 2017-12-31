var React = require('react');

var AboutComponent = () => (
    <div>
        <h1 className="text-center page-title">
            About
        </h1>
        <p>
            welcome to the about page <br />
            this web app is designed in the context of learning the react framework , <br /> feel free to check out my repo
             on <a href="https://github.com/Aittaleb/react-weather" target="_blank"> github </a>
            <br />
            and for further documentation here is link to the api docs i've used
            <a href="https://openweathermap.org/current" target="_blank"> open weather map</a> <br/> 
            you can also check on the javascript framework <a href="https://facebook.github.io/react">here</a>


            <br/>
            <br/>
            <br/>

            ...peace
            
        </p>

    </div>
);

module.exports = AboutComponent;