function ytbembedurl(url) {
    if (!url.includes('=')) {
        var sharedId = url.slice(url.lastIndexOf('/')+1)
    } else if(url.includes('=')) {
        sharedId = url.slice(url.lastIndexOf('=')+1)
    } else if(url.includes('embed')) {
        var embedLink= url
        return embedLink
    }
    var embed= 'https://www.youtube.com/embed/'
    embedLink= embed.concat(sharedId)
    return embedLink
}

module.exports.ytbembedurl = ytbembedurl

