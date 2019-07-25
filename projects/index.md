---
layout: project
basepage: Project
title: Projects
navigation_weight: 3
developer: puji
permalink: /project/
---

{% for data in site.projects %}
<h4 class="post-title"><a href="{{ data.website }}">{{ data.title }}</a></h4>  
<p class="post-meta">Project type: <span style="color: coral;">{{ site.data.projects[data.data].type }}</span></p>  
<img src="{{ data.img_path }}" width="200" height="200">  

<blockquote class="post-content">
{{ data.tagline }}
</blockquote> 

{{ data.content }}  

<br>
<hr>
<br>

{% endfor %}
