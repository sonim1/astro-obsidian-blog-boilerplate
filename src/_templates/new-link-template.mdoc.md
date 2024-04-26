---
external: true
draft: true
url: [UPDATE THIS URL]
title: [UPDATE THIS TITLE]
description: [UPDATE THIS DESCRIPTION]
date: <% tp.file.creation_date() %>
cover: ../../assets/no-image-found.webp
---

// File move
<% await tp.file.move("/ko" + tp.file.title) %>
// File move and rename
<% await tp.file.move("/A/B/NewTitle") %>
