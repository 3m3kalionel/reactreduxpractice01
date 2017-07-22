import path from 'path';

// export default {
//     entry: path.resolve(__dirname + '/server/client/index.js'),
//     // entry: path.join(__dirname, '/server/client/index.js'),
//     // entry: '/index',
//     output: {
//         filename: './public/bundle.js'
//     },
//     module: {
//         test: /\.(js|jsx)$/,
//         include: path.join(__dirname, 'client'),
//         loaders: 'babel-loader',
//     },
//     query: {
//         presets: ['es2015', 'react']
//     }
    
// }

export default {
    // entry: path.join(__dirname + '/client/index.js'),
    entry: path.resolve(__dirname + '/server/client/index.js'),
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                include: path.join(__dirname, 'client'),
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
}

// const path = require('path');
// module.exports = {
//   entry: path.resolve(__dirname, './client/index.jsx'),
//   output: {
//     filename: './public/bundle.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx$/,
//         loaders: ['babel-loader']
//       }
//     ]
//   }
// }



