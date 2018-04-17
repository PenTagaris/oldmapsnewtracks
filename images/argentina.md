---
layout: page
title: Argentina Gallery
regenerate: true
category: argentina
---
{: .center }

{% assign image_files = site.static_files | where: "image", true %}
{% for myimage in image_files reversed %}
  {% if myimage.path contains 'argentina' %}
  {% include postpic.html file=myimage.name %}
  {% endif %}
{% endfor %}
