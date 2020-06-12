const redirects = require('../data/redirects.json') // update to your file path

export default function ({ route, redirect }) {
    // find the redirect if it exists where the from === the requested url
    var r = redirects.find(r => r.from === route.fullPath)

    //If it exists, redirect the page with a 301 response else carry on
    if (r) {
        // console.log("Redirecting: {from: " + r.from + ", to: " + r.to + "}")
        
        //try and push route to router?
        // this.$router.push(r.from)
        
        
        
        return redirect(r.to)
    }
}