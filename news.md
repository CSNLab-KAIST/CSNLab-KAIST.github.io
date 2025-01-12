---
layout: default
title: News
---

<head>
    <link rel="stylesheet" href="{{ 'css\news.css' | relative_url }}">
    <script src="{{ 'js\news_cate.js' | relative_url }}"></script>
</head>
<div class="filter-container">
  <button class="filter-btn-small" data-filter="all">All</button>
  <button class="filter-btn-small" data-filter="publication">Publication</button>
  <button class="filter-btn-small" data-filter="news">News</button>
  <button class="filter-btn-small" data-filter="award">Award</button>
   <button class="filter-btn-small" data-filter="position">Position</button>
</div>
<div class="timeline">
    {% for item in site.data.news %}
    <div class="timeline-item" data-type="{{ item.type }}">
        <!-- <div class="timeline-marker"></div> -->
        <div class="timeline-content">
            <div class="timeline-header">
                <h3>{{ item.title }}</h3>
                <span class="leaf-icon {{ item.type }}"></span>
            </div>
            <span class="timeline-date">{{ item.date | date: "%b %d %Y" }}</span>
            <p>{{ item.details }}</p>
        </div>
    </div>
    {% endfor %}
</div>
