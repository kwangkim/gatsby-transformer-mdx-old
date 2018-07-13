exports.modifyWebpackConfig = ({ config, stage }) => {
    const mdxFiles = /\.mdx$/; //mdx only. for md and mdx use /\.mdx?$/;
    config.loader(`mdx`, {
        test: mdxFiles,
        loaders: [
            'babel-loader?' + 'babelrc=false,' + 'presets[]=env,' + 'presets[]=react',
            {
                loader: '@mdx-js/loader',
                options:{
                    mdPlugins: ['gatsby-remark-katex']
                }
            },
        ]
    });
};