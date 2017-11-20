---
layout: page
title: Czech Republic Gallery
regenerate: true
category: czech_republic
---
{: .center }

{% assign image_files = site.static_files | where: "image", true %}
{% for myimage in image_files reversed %}
  {% if myimage.path contains 'czech_republic' %}
  {% include postpic.html file=myimage.name %}
  {% endif %}
{% endfor %}
