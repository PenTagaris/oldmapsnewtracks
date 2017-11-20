---
layout: page
title: Ireland Gallery
regenerate: true
category: ireland
---
{: .center }

{% assign image_files = site.static_files | where: "image", true %}
{% for myimage in image_files reversed %}
  {% if myimage.path contains 'ireland' %}
  {% include postpic.html file=myimage.name %}
  {% endif %}
{% endfor %}
