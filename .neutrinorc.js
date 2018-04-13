const path = require("path");

const fonts = require('@neutrinojs/font-loader');

const reExampleFiles = /examples.+\.jsx?/;

module.exports = {
    options : {
        mains : {
            index : "index",
            "first" : "00-first/index",
            "second" : "01-second",

        },
        //font : {},
    },

    use : [
        [
            '@neutrinojs/react',
            {
                html : {
                    title : "Neutrino Font Issues"
                }
            },
        ],


        (neutrino) => {
            neutrino.config.resolve.modules.add(neutrino.options.source);
            neutrino.config.resolve.modules.add(path.join(neutrino.options.source, "common"));

            neutrino.config.module
                .rule('compile')
                    .exclude.add(reExampleFiles);

            neutrino.config.module
                .rule('raw-loader')
                .include
                    .add(reExampleFiles)
                    .end()
                .use()
                    .loader('raw-loader')
                    .end()


            /*
            neutrino.use(fonts, {
                limit: '10000',
                woff: {},
                ttf: {},
                eot: {}
            });
            */
        }
    ]
};
