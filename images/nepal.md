---
layout: page
title: Nepal Gallery
regenerate: true
category: nepal
---
{: .center }

{% assign image_files = site.static_files | where: "image", true %}
{% for myimage in image_files reversed %}
  {% if myimage.path contains 'nepal' %}
  {% include postpic.html file=myimage.name %}
  {% endif %}
{% endfor %}
