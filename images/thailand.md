---
layout: page
title: Thailand Gallery
regenerate: true
category: thailand
---
{: .center }

{% assign image_files = site.static_files | where: "image", true %}
{% for myimage in image_files reversed %}
  {% if myimage.path contains 'thailand' %}
  {% include postpic.html file=myimage.name %}
  {% endif %}
{% endfor %}
