---
layout: page
title: Iceland Gallery
regenerate: true
category: iceland
---
{: .center }

{% assign image_files = site.static_files | where: "image", true %}
{% for myimage in image_files reversed %}
  {% if myimage.path contains 'iceland' %}
  {% include postpic.html file=myimage.name %}
  {% endif %}
{% endfor %}
