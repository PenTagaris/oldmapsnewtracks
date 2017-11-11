---
layout: page
title: India Gallery
regenerate: true
category: india
---
{: .center }
*Clicking on any photo will load the full-sized, zoomable version in a new page*

{% assign image_files = site.static_files | where: "image", true %}
{% for myimage in image_files reversed %}
  {% if myimage.path contains 'india' %}
  {% include image.html file=myimage.name alt=myimage.path %}
  {% endif %}
{% endfor %}
