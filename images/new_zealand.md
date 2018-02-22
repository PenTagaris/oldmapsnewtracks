---
layout: page
title: Vietnam Gallery
regenerate: true
category: new_zealand
---
{: .center }

{% assign image_files = site.static_files | where: "image", true %}
{% for myimage in image_files reversed %}
  {% if myimage.path contains 'new_zealand' %}
  {% include postpic.html file=myimage.name %}
  {% endif %}
{% endfor %}
