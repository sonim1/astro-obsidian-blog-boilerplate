---
PromptInfo:
 promptId: artIcon
 name: 🖼️ Generate a icon art photo test
 description: Selecting the text creates an Icon using Dalle-2.
 author: Kendrick
 tags: dalle-2, art, icon
 version: 0.0.1
config:
 append:
  bodyParams: false
  reqParams: true
 context: "prompt"
 output: '`\n![](${requestResults.data[0].url})`'
bodyParams:
 n: 1
 size: "256x256"
reqParams:
 url: "https://api.openai.com/v1/images/generations"
---
{{selection}}, icon, symbol, ico, white background, minimalist, icon fit to size, only picture