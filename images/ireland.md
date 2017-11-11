---
layout: page
title: Ireland Gallery
regenerate: true
category: ireland
---

*Clicking on any photo will load the full-sized, zoomable version*

{% assign image_files = site.static_files | where: "image", true %}
{% for myimage in image_files reversed %}
  {% if myimage.path contains 'ireland' %}
  {% include image.html file=myimage.name alt=myimage.path %}
  {% endif %}
{% endfor %}
