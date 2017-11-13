---
layout: page
title: Nepal Gallery
regenerate: true
category: nepal
---
{: .center }
*Clicking on any photo will load the full-sized, zoomable version in a new page*

{% assign image_files = site.static_files | where: "image", true %}
{% for myimage in image_files reversed %}
  {% if myimage.path contains 'nepal' %}
  {% include postpic.html file=myimage.basename %}
  {% endif %}
{% endfor %}
