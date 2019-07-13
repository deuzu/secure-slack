import { WebClient } from '@slack/web-api'
import * as openpgp from 'openpgp'
import axios from 'axios'

const listener = async request => {
  if (-1 === request.url.indexOf('chat.postMessage')) {
    return
  }

  if (-1 !== request.originUrl.indexOf('moz-extension://')) {
    return
  }

  const channel = request.requestBody.formData.channel[0]
  const token = request.requestBody.formData.token[0]
  const text = request.requestBody.formData.text[0]
  const slack = new WebClient(token)


  // TODO cache conversations[id] = pubkey
  const conversationInfo = await slack.conversations.info({ channel })

  if (!conversationInfo.channel.is_im) {
    return
  }

  // TODO cache
  const { user } = await slack.users.info({ user: conversationInfo.channel.user })
  const keybaseProfileRegExp = /keybase:([^\s]+)/
  const [, userKeybaseProfile] = keybaseProfileRegExp.exec(user.profile.title)

  // TODO cache
  const { data: publicKey } = await axios.get(`https://keybase.io/${userKeybaseProfile}/pgp_keys.asc`)

  const options = {
    message: openpgp.message.fromText(text),
    publicKeys: (await openpgp.key.readArmored(publicKey)).keys,
  }

  try {
    openpgp.encrypt(options).then(ciphertext => {
      const text = ciphertext.data

      slack.chat.postMessage({ channel, text })
    })
  } catch(error) {
    console.log(error)
  }

  return { cancel: true }
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ['*://*.slack.com/*'], types: ['xmlhttprequest']},
  ['blocking', 'requestBody']
);
