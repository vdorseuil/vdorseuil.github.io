---
layout: default
permalink: /articles/
title: Articles
nav: true
nav_order: 2
---

{% assign me = "Valentin Dorseuil" %}{% comment %} your name as it appears in the authors list — highlighted in blue {% endcomment %}

<div class="post articles">
  <ul class="article-list">
    {% for post in site.posts %}
      <li class="article-entry">
        {% if post.thumbnail %}
          <div class="thumb">
            <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}">
          </div>
        {% endif %}
        <div class="body">
          <div class="title">{{ post.title }}</div>
          {% if post.authors %}
            {% capture wrapped %}<span class="me">{{ me }}</span>{% endcapture %}
            <div class="authors">{{ post.authors | replace: me, wrapped }}</div>
          {% endif %}
          <div class="venue">{{ post.venue | default: "Preprint" }}</div>
          <div class="links">
            {% if post.pdf %}
              {% if post.pdf contains '://' %}{% assign pdf_url = post.pdf %}{% else %}{% assign pdf_url = post.pdf | relative_url %}{% endif %}
              <a class="btn" href="{{ pdf_url }}" target="_blank" rel="noopener noreferrer">PDF</a>
            {% endif %}
            {% if post.bibtex %}
              <button class="btn" type="button" onclick="toggleBib(this)">Bib</button>
            {% endif %}
          </div>
          {% if post.bibtex %}
            <div class="bibtex" hidden><pre>{{ post.bibtex }}</pre></div>
          {% endif %}
        </div>
      </li>
    {% endfor %}
  </ul>
</div>

<script>
  function toggleBib(btn) {
    var box = btn.closest(".article-entry").querySelector(".bibtex");
    if (box) box.hidden = !box.hidden;
  }
</script>

<style>
  .articles .article-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .articles .article-entry {
    display: flex;
    align-items: flex-start;
    gap: 1.25rem;
    padding: 1.25rem 0;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .articles .article-entry .thumb {
    flex: 0 0 160px;
    max-width: 160px;
  }
  .articles .article-entry .thumb img {
    width: 100%;
    border-radius: 6px;
    border: 1px solid var(--global-divider-color);
  }
  .articles .article-entry .title {
    font-weight: 700;
    color: var(--global-text-color);
    font-size: 1.1rem;
    line-height: 1.3;
  }
  .articles .article-entry .authors {
    margin-top: 0.3rem;
    color: var(--global-text-color);
  }
  .articles .article-entry .authors .me {
    color: var(--global-theme-color);
    font-weight: 600;
  }
  .articles .article-entry .venue {
    margin-top: 0.15rem;
    font-style: italic;
    color: var(--global-text-color-light);
  }
  .articles .article-entry .links {
    margin-top: 0.6rem;
  }
  .articles .article-entry .links .btn {
    color: var(--global-text-color);
    border: 1px solid var(--global-text-color);
    border-radius: 4px;
    padding: 0.1rem 0.7rem;
    margin-right: 0.4rem;
    font-size: 0.85rem;
    line-height: 1.6;
    box-shadow: none;
  }
  .articles .article-entry .links .btn:hover {
    color: var(--global-theme-color);
    border-color: var(--global-theme-color);
  }
  .articles .article-entry .bibtex {
    margin-top: 0.6rem;
  }
  .articles .article-entry .bibtex pre,
  .articles .article-entry .bibtex pre code {
    background-color: #f2f2f2;
    color: #1c1c1d;
    padding: 0.8rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 6px;
    font-size: 0.8rem;
    overflow-x: auto;
  }
  html[data-theme="dark"] .articles .article-entry .bibtex pre,
  html[data-theme="dark"] .articles .article-entry .bibtex pre code {
    background-color: #2b2b2d;
    color: #e8e8e8;
  }
  @media (max-width: 576px) {
    .articles .article-entry {
      flex-direction: column;
    }
    .articles .article-entry .thumb {
      flex-basis: auto;
      max-width: 220px;
    }
  }
</style>
