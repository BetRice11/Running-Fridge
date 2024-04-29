const path = require('path')

module.exports = {
    // other webpack configurations...

    resolve: {
        alias: {
            '@src': path.resolve(__dirname, 'src'),
            '@lib': path.resolve(__dirname, 'lib'),
        },
    },

    // other webpack configurations...
}
