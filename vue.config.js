module.exports = {
    chainWebpack: (config) => {
        if (process.env.NODE_ENV === 'test') {
            config.merge({
                target: 'node',
                devtool: 'eval',
            });
        }
   },
};
