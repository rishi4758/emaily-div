keys=require('../../config/keys')
module.exports=(survey)=>{

    return `
    <html>
    <body>
    <div style="text-align:center;">
    <h3> i like your input</h3>
    <p> please answer the following question</p>
    <div>
    <a href="${keys.redirectDomain}">Yes</a>
    </div>
    <div>
    <a href="${keys.redirectDomain}">No</a>
    </div>
    </div>
    </body>
    </html>
    `
}