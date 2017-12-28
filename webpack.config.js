module.exports = {
    entry: './app/app.jsx',
    output: {
      path: __dirname,
      filename: './public/bundle.js'
    },
    resolve: {
      root : __dirname,
       alias : {
          MainComponent : 'app/components/MainComponent.jsx',
          WeatherComponent : 'app/components/weatherComponent.jsx'
       },
      extensions: ['', '.js', '.jsx']
    },
    module: {
      loaders: [
        {
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          },
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/
        }
      ]
    }
  };
  