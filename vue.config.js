module.exports = {
	devServer: {
		overlay: false,
		proxy: {
			'/api': {
				target: process.env.VUE_APP_DEV_API,
				//pathRewrite: { '^/': '' },
				changeOrigin: true,
				//secure: false,
			},
		},
	},
	transpileDependencies: ['vuetify'],
};
