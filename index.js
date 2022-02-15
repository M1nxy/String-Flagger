let extractUrls = require("extract-urls");

/**
 * @description Flag string if in blacklist
 * @param {String} string
 * @param {Array} blacklist
 * @returns {Promise<Boolean>}
 */
module.exports.filter = async function filter(string, blacklist) {
    return blacklist.includes(string);
};

/**
 * @description Flag string if it contains a domain from blacklist provided
 * @param {String} string
 * @param {Array} blacklist
 * @returns {Promise<Boolean>}
 */
module.exports.filterUrls = async function filterUrls(string, blacklist) {
    let links = extractUrls(string, true)
    let flagged = false;
    if(typeof(links) == 'object'){
        for(let link of links){
            let url = new URL(link)
            if(blacklist.includes(url.hostname)){
                flagged = true
            }
            else{
                flagged = false
            }
        }
    }
    return flagged;
};

