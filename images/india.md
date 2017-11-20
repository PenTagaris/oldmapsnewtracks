---
layout: page
title: India Gallery
regenerate: true
category: india
---
{: .center }

{% assign image_files = site.static_files | where: "image", true %}
{% for myimage in image_files reversed %}
  {% if myimage.path contains 'india' %}
  {% include postpic.html file=myimage.name %}
  {% endif %}
{% endfor %}
