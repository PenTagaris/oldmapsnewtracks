---
layout: page
title: Vietnam Gallery
regenerate: true
category: vietnam
---
{: .center }

{% assign image_files = site.static_files | where: "image", true %}
{% for myimage in image_files reversed %}
  {% if myimage.path contains 'vietnam' %}
  {% include postpic.html file=myimage.name %}
  {% endif %}
{% endfor %}
