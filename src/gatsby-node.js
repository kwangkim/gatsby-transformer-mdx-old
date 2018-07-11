exports.modifyWebpackConfig = ({ config, stage }) => {
    const mdxFiles = /\.mdx$/;//mdx only. for md and mdx use /\.mdx?$/;
    config.loader(`mdx`, {
        test: mdxFiles,
        loaders: [
            {
                loader: 'babel-loader',
                options:{
                    presets:[
                        env,  
                        react,
                    ],
                    babelrc: false
                }
            },
            '@mdx-js/loader'
        ]
    });
};
/*
{
    loader: '@mdx-js/loader',
    options:{
        mdPlugins: ['gatsby-remark-katex']
    }
},
*/