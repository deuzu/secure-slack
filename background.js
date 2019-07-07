const { WebClient } = require('@slack/web-api')
let token = null
let slack = null

function listener(request) {
  if (-1 === request.url.indexOf('chat.postMessage')) {
    return
  }

  token = token || request.requestBody.formData.token
  slack = slack || new WebClient(token)
  const conversationId = request.requestBody.formData.channel[0]

  slack.chat.postMessage({ channel: conversationId, text: 'Hello there' })

  return { cancel: true }
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["*://*.slack.com/*"] },
  ['blocking', 'requestBody']
);
