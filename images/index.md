---
layout: page
title: Gallery
---

<p style="text-align:center">
<em>Here you will find all the pictures from our journey, including some which didn't make it into the blog posts.
 They are ordered chronologically, with the newest at the top. <br />
Enjoy!</em>
</p>


{% assign image_files = site.static_files | where: "image", true %}
{% for myimage in image_files reversed %}
  <a href = "{{ myimage.path }}">
  <img src = "{{ myimage.path | replace: 'photos','thumbs'}}"
  alt="{{ myimage.name }}">
  </a>
{% endfor %}
