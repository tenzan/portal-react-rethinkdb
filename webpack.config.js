module.exports = {
  entry: ['./client/src/components/app.jsx'],
  output: {
    path: __dirname,
    filename: 'public/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: __dirname + '/client'
      }
    ]
  }
};
