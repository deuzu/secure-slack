import { WebClient } from '@slack/web-api'
import * as openpgp from 'openpgp'

let token = null
let slack = null
const publicKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----

mQINBF0f1DcBEAC5RyHIRrhOtcvfL4s932UOq9zKhHDbhZRIiKXbkAVIVG/jGPy5
EqprVA1FcSE6geDtB6xU49Taunhm0irMh0coyBC1dk+Abzl/s6ObocamdMbZTEZc
4k8nw5YVNHih8/Ru1ARKKhmA2uJbtA1nDCD6BJ68U/vvx5vvlMBg/JJA1SbIwdlR
+fKGxcOFk+bpFi5NB8jJtFeBq0C11UdcPzXlKhPElGjp6TzouPV1IBv6Z3I8Ji6u
mVOznWHsak1RPEIDegB1hYqBQXLSq0ViAQ58/lQhYCry1QOpmPDSlHMRUmcBqHDo
eenuVXUf3+MGo+K9thb3ephtJ0PLUE48OzX8HUMcc4D6lSBO9VFJhnn70X2jbxMk
IbS/0fQlHvr5GhwTVbgE333EPjlVudiyG/dQP59OvDxnGEV8kVUK80UPQjsnnprh
x23DSxM3oPC8q9BQzbHqJl39ESV3L4k3T/BHKnKtP9oprBajyOkoKZuNN5j95XOS
ZSmMtcTadh3EM6UuEu0fGZXmGFvcNJ2MkJJl2kMEtHwdY6CFl0UsFrJPHzgqECwQ
D14qYQDF8cC/Ow8+MU8GhAlGfJs5/ecl+X6ko7QMLNUtYAgM1fNqZZ4TFTmyN8lN
pDlo+pHCf8l9n3UIS04jJXvc1+Vg3JBUQV6yX9QjXkR+jTbu002bwiTZ+QARAQAB
tDRGbG9yaWFuIFRvdXlhIChkZXV6dSkgPGZsb3JpYW4udG91eWFAcHJvdG9ubWFp
bC5jb20+iQJOBBMBCgA4FiEElPtL1k19E6GA4Adp6TKdkMp3wmsFAl0f1DcCGwMF
CwkIBwIGFQoJCAsCBBYCAwECHgECF4AACgkQ6TKdkMp3wmvHYA/+LXjQDJhK+0rK
sxcXrwRF6rjONzgdV93ZekULlD6yHuN4s9FDATehUVRFIn/sH6AcQzZl6lkMxH7f
Mjcrs2vKo1e7xDHvvL54HxAFTpqGBi9Ey75pefx6n9g9WizbIBIC79DIC49ZkTzE
5KxDp6/5gXOXn/VGBPDUBr0hgxF4fDXJe/nEm/Sa0a9Zg6ppWzUDIqP5njIo1EQu
vC9ZocPxqNY9mPkPmMjCKkkmOdaHTuJYt3E3mcr9/+IAMyB6bQakbTxaInli18IP
k92+M3fMH2MCxR7RfbfnTESzFiUtqp48ZT31kni2qUEvCBdc2VGCB58tZgMWGGZT
bVfPRyZDzgOxvgXts8mBKLM698gF0d2YFGuz3Tq+8bJXPSfJVcDwXL0ZM/FhunXY
kQakRWOxbL4SlUQ6cQDBM7xnyyOa3aygiLrGzsnoYbLmhmD0Nj+lo8OZz3EpCLs+
QczTZStp3V46RsGMXgVe5RGrkThuo/5Vbbi9hpQHzwhyFAU77ykmjkF4Qa+eFkPF
iAb7s8fhFqVzyURo9NyycnEoSZ0WNPChnD1mRoBIre29uumhzt7g7ybhT//R7Z5e
R8zoVATWRHvJ91CEW70lYxh9Bdhkb9HeQAquFOUrpSgNhLdJAQ9z7Mn/W94SYvPn
xVy8RnAq8Xulfeks4lNdpM0tIcE0Qpq0K0Zsb3JpYW4gVG91eWEgKGRldXp1KSA8
Zmxvcmlhbi50b3V5YUBwbS5tZT6JAk4EEwEKADgWIQSU+0vWTX0ToYDgB2npMp2Q
ynfCawUCXR/W2wIbAwULCQgHAgYVCgkICwIEFgIDAQIeAQIXgAAKCRDpMp2QynfC
a5o7D/0TrgOVY87d8b/DIdgsAkcM81rLELAA43H342MLlGU8zF24i8bQGeyBiwJt
h3jcgje7jVeInFUtnB65dr4tB8gN3Z408d6acmPrk1mgFMvIpEx+0givdADZqpR/
EKA3A8ZUIsFfRXDXnixnweeWIyOfwtwjxfowA0umdxrSmKCoDyX3x2e+98fMA4dR
Zt+NDti1NNM2jjJgQgJdIdZA1YfF9zQUV44ewitjakrOZQiiB8RZxi6wPsjckJ9E
wzDxMvi2B1+fW5JPQY4CnsZkfLbtBycO31QheAuw9tfIffg9GeXUXkv/sRln8N0k
aKR5OC8wT89YOXTco82/9AmK5eRPuWsBcKavPV1Da/n65U42xXyeBfWL2OtjxIjv
V7fpRd+NixCCWOeKZR5d4uqX4Eh0HYaSRWHw0IoJuDgriOiK9HoZY/PGnMJay0wd
wXVlWng2/cIWk6SZtfeSl6mMCanmNyt20ND6BJVpHd73zKboji3Meeltf/tBT05o
sEL/6gHclw1Vah722o4nkyv3UgB/vWMw4xrmKvQVtxedrbchxzafe78iLt2HdR1b
vVG2tJvA959PkDVe7drrERqxYW0LtHWva4KZ61NSH3vP5/uTag5M60oUrXuDsI/7
Kz7bchL8Ltr2/9z9k+6UcYx5taUsrpgHd4+i0zKrxvJTog1EZ7kCDQRdH9Q3ARAA
wiUaQm6tFN+lnd9Db3iEl/0/ey44SRwNE0KrFNmFNaMf/RpLK3zUHPJ+5aBoUHzz
FsH6/5riM8puIf2/MgF2llOENmfvGRbWhCR9QdbG8GodgDwE3BnccPZDhEY7k3gm
ASDXjVQGRYOPhS0Qoslu7j55hCFUtmDILgzTptk3lPix8HYY41Ey3pGaT1tfibwM
wN19GskntWFkpdzuK3pXF8/dlf+UsUzr2mgVtRiWuJ65H/1+HzBs+H5ubyk1jn+a
Dy4h2K9NcwEsF8WQRYL/Dm62oELq+uOW5e55GtYMms2JKwQ0RdTIElvQQ8l9fEhy
8Y0OevY8NPI6niFRTi6Ihy2Ex+FUdPtjsYov4QuFJPH8AFfwBzQjxMybeEnBdyS6
nc/yFH4+nnWTdeN/N1Y4O7eFH2XzdoKqdA6VKLQUXox2F5mDCAHNCxcLodOMehEL
yyiBaUdrYB3vHnvx5DpmAmiOaJXOSTrfCMBVXW4E2RPPnynOOmRYpdsWvJzGuVwS
VH+/uXRkO67mM9JSDMoXQlo+ZSsEYe8vaTY3Q+OszqgkjnpWC1Mfn6ddFV3Gf1Vm
RCnzo6YP8XeyQe1MQ5mj6bWrYPV8h8ad1vL9L9cI0p9461LHmd3FLYh9NYIejdKn
WA3aAupjUVA6DNkfRgsF4ZecikB+y2Fiy6nSn2GJHzsAEQEAAYkCNgQYAQoAIBYh
BJT7S9ZNfROhgOAHaekynZDKd8JrBQJdH9Q3AhsMAAoJEOkynZDKd8JrGCkP/iLD
OiocAgrwe1ut6x59AH5xXRFgegmxcZ5czgJySJhkELaWOg3cTSKAEVRkfld8B02p
uwATaUbH79XYFr7MW9+xDBH64vuWUm8iff4Vdr3w1Hg7hTGJQJc92yo6dWnUsNjt
o4eRVcjKBZMnH8tUwfpQi07ekAg4QbKbPX4TMZYQAMW8NhQP6mqL4vGhQv32al+j
yAR/u/8609oxg+GvZ7jlKgW5K5kxdx5tat//uvEZNN1qjbHyWY2hVNMtWND/x2Os
UoiYaD0ZFbLB+YwmkxZ/DaX3IebXdiBKeo9bii1m7MRykXY17qjBEwVabkt1RWQ5
qldorNmIqfmpdZbUmQtwuQkyjSgez67PTp2ffTkAqnL5C/U+OLaZtlLxcKXu7WvD
alGCwMrKp0v+SFwuSWVHimtpZ6Lx2qNfoCbGD1o++RijsLzLqIOkQiHNwHh8ueBB
/rAMT6Kz5wBbM1WCjT97z0HyFa1dN6UekfrMaKFHjsrutlJmIBk1IoG8beYfqfMu
TEb1u6+y8aKBYu1FX2AdZqXnutOmkzfDQfVXN1GKtf4UkkT+8ib3aTmdrErELOqX
PzRWsoAgzABJY2w1IyL7XcXrHeGQQvR50Os5QzGAfpUgI9pqGGfPlCUYQN8+8Ov7
a+hcmjNcX749Z3hT112+uzsYimwL/56U86wBjJT/
=Pp44
-----END PGP PUBLIC KEY BLOCK-----
`

const listener = async request => {
  if (-1 === request.url.indexOf('chat.postMessage')) {
    return
  }

  if (-1 !== request.originUrl.indexOf('moz-extension://')) {
    return
  }

  const conversationId = request.requestBody.formData.channel[0]
  token = token || request.requestBody.formData.token[0]
  slack = slack || new WebClient(token)

  const options = {
    message: openpgp.message.fromText('Hello, World!'),
    publicKeys: (await openpgp.key.readArmored(publicKey)).keys,
  }

  try {
    openpgp.encrypt(options).then(ciphertext => {
      const encrypted = ciphertext.data

      slack.chat.postMessage({ channel: conversationId, text: encrypted })
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
