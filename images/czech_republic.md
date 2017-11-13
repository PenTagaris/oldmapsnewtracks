---
layout: page
title: Czech Republic Gallery
regenerate: true
category: czech_republic
---
{: .center }
*Clicking on any photo will load the full-sized, zoomable version in a new page*

{% assign image_files = site.static_files | where: "image", true %}
{% for myimage in image_files reversed %}
  {% if myimage.path contains 'czech_republic' %}
  {% include postpic.html file=myimage.basename %}
  {% endif %}
{% endfor %}
