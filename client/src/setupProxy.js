const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
    
    app.use(proxy(['/api', '/auth/google'], { target: 'http://localhost:5004',changeOrigin: true }));
    app.use(proxy(['/api', '/api/user'], { target: 'http://localhost:5004',changeOrigin: true }));
    app.use(proxy(['/api', '/api/logout'], { target: 'http://localhost:5004',changeOrigin: true }));
    app.use(proxy(['/api', '/api/stripe'], { target: 'http://localhost:5004',changeOrigin: true }));
    app.use(proxy(['/api', '/api/surveys'], { target: 'http://localhost:5004',changeOrigin: true }));
}
//const survey={ title: 'my title', subject: 'my subject' , recipients: 'rishurapta79@gmail.com' , body:' ye hai meri body'}
// axios.post('/api/surveys',survey);