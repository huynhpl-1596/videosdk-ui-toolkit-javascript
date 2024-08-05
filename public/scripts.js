import uitoolkit from './@zoom/videosdk-ui-toolkit/index.js'

var sessionContainer = document.getElementById('sessionContainer')
var authEndpoint = 'http://localhost:4000'
// var config = {
//     videoSDKJWT: '',
//     sessionName: 'test',
//     userName: 'JavaScript',
//     sessionPasscode: '123',
//     features: ['video', 'audio', 'settings', 'users', 'chat', 'share']
// };
var role = 0

window.getVideoSDKJWT = getVideoSDKJWT

function getVideoSDKJWT() {
    const sessionName = document.getElementById('session-name').value
    console.log("🚀 ~ getVideoSDKJWT ~ sessionName:", sessionName)
    const userName = document.getElementById('username').value
    console.log("🚀 ~ getVideoSDKJWT ~ userName:", userName)
    const sessionPasscode = document.getElementById('passcode').value
    console.log("🚀 ~ getVideoSDKJWT ~ sessionPasscode:", sessionPasscode)
    
    var config = {
        videoSDKJWT: '',
        sessionName: sessionName,
        userName: userName,
        sessionPasscode: sessionPasscode,
        features: ['video', 'audio', 'settings', 'users', 'chat', 'share']
    }

    document.getElementById('join-flow').style.display = 'none'

    fetch(authEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            sessionName:  config.sessionName,
            role: role,
        })
    }).then((response) => {
        return response.json()
    }).then((data) => {
        if(data.signature) {
            console.log(data.signature)
            config.videoSDKJWT = data.signature
            joinSession(config)
        } else {
            console.log(data)
        }
    }).catch((error) => {
        console.log(error)
    })
}

function joinSession(configT) {
    uitoolkit.joinSession(sessionContainer, configT)

    uitoolkit.onSessionClosed(sessionClosed)
}

var sessionClosed = (() => {
    console.log('session closed')
    uitoolkit.closeSession(sessionContainer)

    document.getElementById('join-flow').style.display = 'block'
})
