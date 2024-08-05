# Zoom Video SDK UI Toolkit JavaScript sample

Use of this sample app is subject to our [Terms of Use](https://explore.zoom.us/en/video-sdk-terms/).

This repo is an HTML / CSS / JavaScript website that uses the [Zoom Video SDK UI toolkit](https://developers.zoom.us/docs/video-sdk/web/) to start and joins sessions.

![Zoom Video SDK](https://raw.githubusercontent.com/zoom/videosdk-ui-toolkit-web/HEAD/ui-toolkit%E2%80%93gallery-view.png)

## Installation

To get started, clone the repo:

`$ git clone https://github.com/huynhpl-1596/videosdk-ui-toolkit-javascript`

## Setup

1. Once cloned, navigate to the `videosdk-ui-toolkit-javascript-sample` directory:

   `$ cd videosdk-ui-toolkit-javascript-sample`

1. Open the `videosdk-ui-toolkit-javascript-sample` directory in your code editor.

1. Open the `public/index.js` file, and enter values for the variables:

   | Variable                   | Description |
   | -----------------------|-------------|
   | authEndpoint          | Required, your Video SDK auth endpoint that securely generates a Video SDK JWT. [Get a Video SDK auth endpoint here.](https://github.com/zoom/videosdk-auth-endpoint-sample) |
   | config | Your Video SDK [session details](https://developers.zoom.us/docs/video-sdk/web/ui-toolkit/#join-session) and [enabled features](https://developers.zoom.us/docs/video-sdk/web/ui-toolkit/#supported-features). The `videoSDKJWT` will be set from the response of your `authEndpoint`. |
   | role | Required, `0` to specify participant, `1` to specify host. |

   Example:

   ```js
   var authEndpoint = 'http://localhost:4000'
   var config = {
      videoSDKJWT: '',
      sessionName: 'test',
      userName: 'ZoomDev',
      sessionPasscode: '123',
      features: ['video', 'audio', 'settings', 'users', 'chat', 'share']
   };
   var role = 1
   ```

1. Save `public/index.js`.

## Usage

1. npm install

2. Run `node server.js`
