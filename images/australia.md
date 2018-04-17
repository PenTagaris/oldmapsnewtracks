---
layout: page
title: Australia Gallery
regenerate: true
category: australia
---
{: .center }

{% assign image_files = site.static_files | where: "image", true %}
{% for myimage in image_files reversed %}
  {% if myimage.path contains 'australia' %}
  {% include postpic.html file=myimage.name %}
  {% endif %}
{% endfor %}
