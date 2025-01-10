---
title: People
permalink: /people/
---

{% assign people_sorted = site.people | sort: 'joined' %}
{% assign role_array = "pi|phd|gradstudent|alumni" | split: "|" %}

{% for role in role_array %}

{% assign people_in_role = people_sorted | where: 'position', role %}

<!-- Skip section if there's nobody -->
{% if people_in_role.size == 0 %}
  {% continue %}
{% endif %}

<div class="pos_header">
{% if role == 'pi' %}
<h3> Associate Professor </h3>
 {% elsif role == 'phd' %}
<h3>PhD candidates</h3>
 {% elsif role == 'gradstudent' %}
<h3>Graduate Students</h3>
 {% elsif role == 'researchstaff' %}
<h3>Undergraduate intern</h3>
 {% elsif role == 'alumni' %}
<h3>Alumni</h3>
{% endif %}
</div>

{% if role != 'alumni' %}
<div class="content list people">
  {% for profile in people_sorted %}
    {% if profile.position contains role %}
      <div class="list-item-people">
        <p class="list-post-title">
          <!-- 图片部分：始终不可点击 -->
          {% if profile.avatar %}
            <img class="profile-thumbnail" src="{{site.baseurl}}/images/people/{{profile.avatar}}">
          {% else %}
            <img class="profile-thumbnail" src="{{site.baseurl}}/images/assets/miss.png">
          {% endif %}
          <!-- 名字部分：动态生成链接或纯文本 -->
          {% if profile.homepage %}
            <a class="name" href="{{ profile.homepage }}" target="_blank" 
               style="color: #000; text-decoration: none;" 
               onmouseover="this.style.color='#36C2CE';" 
               onmouseout="this.style.color='#000';"
               onclick="this.style.color='#000';">
              {{ profile.name }}
            </a>
          {% else %}
            <a class="name" href="{{ site.baseurl }}{{ profile.url }}">{{ profile.name }}</a>
          {% endif %}
        </p>
      </div>    
    {% endif %}
  {% endfor %}
</div>
<hr>



{% else %}
<br>

| Who are they | When were they here | Where they went |
| :------------- |:-------------| :-----------|
| [Jiho Kim](https://sites.google.com/view/jihokim/) | PhD Student(2018-2024) | MangoBoost |
{% endif %}
{% endfor %}
