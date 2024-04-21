---
PromptInfo:
 promptId: art3D for blug thumbnail 1024x400
 name: 🖼️ Generate a 3D art photo for blug thumbnail 1024x400
 description: select a text and photo with the style of 3D art will be generated using Dalle-2 for blog post
 author: Prompt Engineering Guide
 tags: photo, dalle-2,art
 version: 0.0.1
config:
 append:
  bodyParams: false
  reqParams: true
 context: "prompt"
 output: '`\n![](${requestResults.data[0].url})`'
bodyParams:
 n: 1
 size: "1024x1024"
reqParams:
 url: "https://api.openai.com/v1/images/generations"
---
{{selection}}, 3D art like a clay animaion or soft rounded 3d models, there is no word text