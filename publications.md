---
title: Publications
permalink: /publication/
---
<head>
    <link rel="stylesheet" href="{{ 'css\publication.css' | relative_url }}">
</head>

For those interested in numbers, see John's <a href="https://scholar.google.com/citations?user=ANnlqOwAAAAJ&hl=en" style="color: #CA7373;">
  google scholar citations profile
</a>.

We try to include links for all of our papers. Some of the links open PDFs, others direct you to a journal's site where that particular publication is available for download. If you cannot access one of our papers, let us know. The copyright notice for these papers is listed at the bottom of the page.
<div class="publication-page">
  <div class="publication-content">
    <!-- 左侧内容 -->
    <div class="publication-list">
      {% assign grouped = site.data.publications | group_by: "year" %}
      {% for group in grouped %}
      <div class="publication-year" id="year-{{ group.name }}">
        <h2 style="color:#9A3B3B;font-size:2rem;">{{ group.name }}</h2>
        {% for item in group.items %}
        <div class="publication-item" data-topic="{{ item.topic }}" data-category="{{ item.category }}">
          <h3>{{ item.title }}</h3>
          <p class="venue">{{ item.venue }}</p>
          <p class="authors">{{ item.authors }}</p>
          {% if item.link %}
          <a href="{{ item.link.url }}" target="_blank" class="icon-link" >{{ item.link.type }}</a>
          {% endif %}
        </div>
        {% endfor %}
      </div>
      {% endfor %}
    </div>
    <!-- 右侧年份导航 -->
    <div class="year-navigation">
      <ul>
        {% for group in grouped %}
        <li><a href="#year-{{ group.name }}">{{ group.name }}</a></li>
        {% endfor %}
      </ul>
    </div>
  </div>
</div>

<script src="{{ '/assets/js/publications.js' | relative_url }}"></script>