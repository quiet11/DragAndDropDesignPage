module.exports={
    devServer: {
        port: 8080,     // 端口号
    },
    proxy:{
        '/api':{
            target:'https://www.baidu.com',
            changOrigin:true,
            pathRewrite:{
                '^/api':''
            }
        }
    }
}
