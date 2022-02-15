Basic way of flagging strings if they contain blacklisted strings or domains.


```js
const {filterUrls, filter} = require("string-flagger");

let blockedDomains = [
    "google.com"
]

async function asyncTest(){
    console.log(`Expected true. Result: ${await filterUrls('This should flag -> https://google.com', blockedDomains)}`)
    console.log(`Expected false. Result: ${await filterUrls('This should not flag -> https://google2.com', blockedDomains)}`)
}

function test(){
    filterUrls('This should flag -> https://google.com', blockedDomains).then(r => {
        console.log(`Expected true. Result:  ${r}`)
    })
    filterUrls('This should not flag -> https://google2.com', blockedDomains).then(r => {
        console.log(`Expected false. Result:  ${r}`)
    })
}

asyncTest()
test()
```