---
layout: archive
title: "Research & Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

{% if page.author and site.data.authors[page.author] %}
  {% assign author = site.data.authors[page.author] %}{% else %}{% assign author = site.author %}
{% endif %}

<div class="research-intro">
  <p>My research sits at the intersection of AI, social systems, and human behavior. I use computational methods — behavioral modeling, network analysis, machine learning, and online experiments — to understand and improve how algorithms shape society.</p>
  {% if author.googlescholar %}
  <a href="{{ author.googlescholar }}" target="_blank" class="btn btn--primary">View full list on Google Scholar</a>
  {% endif %}
</div>

<!-- RESEARCH THEMES -->
<section class="research-themes">
  <h2>Research Themes</h2>
  <div class="theme-grid">
    <button class="theme-card theme-card--active" data-filter="all">
      <span class="theme-icon">🔭</span>
      <span class="theme-label">All</span>
    </button>
    <button class="theme-card" data-filter="AI & Society">
      <span class="theme-icon">🤖</span>
      <span class="theme-label">AI &amp; Society</span>
    </button>
    <button class="theme-card" data-filter="Computational Social Science">
      <span class="theme-icon">🌐</span>
      <span class="theme-label">Computational Social Science</span>
    </button>
    <button class="theme-card" data-filter="Machine Learning">
      <span class="theme-icon">📊</span>
      <span class="theme-label">Machine Learning</span>
    </button>
    <button class="theme-card" data-filter="Network Science">
      <span class="theme-icon">🕸️</span>
      <span class="theme-label">Network Science</span>
    </button>
  </div>
</section>

<!-- ONGOING WORK -->
<section class="ongoing-work pub-section" id="ongoing">
  <h2>Ongoing Work</h2>
  <p class="section-desc">Current projects under development or review.</p>
  <div class="ongoing-grid ongoing-grid--infographic">

    <div class="ongoing-card ongoing-card--infographic">
      <div class="ongoing-status">In progress</div>
      <h3 class="ongoing-title">The Geographic Bias Gap: Evaluating Fairness in LLM-Generated Surveys</h3>
      <p class="ongoing-desc">LLMs excel at simulating macro-level social patterns but consistently show a U.S.-centric bias and significant fairness disparities across gender, education, and political identity when applied to Chilean populations.</p>
      <div class="ongoing-themes">
        <span class="theme-badge theme-badge--ai-society">AI &amp; Society</span>
        <span class="theme-badge theme-badge--computational-social-science">Computational Social Science</span>
      </div>
      <div class="infographic-wrap">
        <img src="/images/infographics/infographic-geographic-bias.png" alt="The Geographic Bias Gap infographic" class="infographic-img" loading="lazy">
      </div>
    </div>

    <div class="ongoing-card ongoing-card--infographic">
      <div class="ongoing-status">In progress</div>
      <h3 class="ongoing-title">Decoding Recommender Systems: Measuring Predictability through Structural Complexity</h3>
      <p class="ongoing-desc">Introduces data-driven metrics — Analytical Structural Consistency (ASC) and Empirical Structural Consistency (ESC) — that use SVD to determine an algorithm's maximum achievable precision, showing &gt;0.90 correlation with top-tier algorithm performance.</p>
      <div class="ongoing-themes">
        <span class="theme-badge theme-badge--machine-learning">Machine Learning</span>
        <span class="theme-badge theme-badge--ai-society">AI &amp; Society</span>
      </div>
      <div class="infographic-wrap">
        <img src="/images/infographics/infographic-recommender-systems.png" alt="Decoding Recommender Systems infographic" class="infographic-img" loading="lazy">
      </div>
    </div>

    <div class="ongoing-card ongoing-card--infographic">
      <div class="ongoing-status">In progress</div>
      <h3 class="ongoing-title">The LLM Attribution Crisis: Why Tracing AI Attacks is Becoming Impossible</h3>
      <p class="ongoing-desc">Demonstrates that attributing AI-generated content to a specific model is computationally intractable: the hypothesis space doubles every ~0.5 years, and attributing one year of U.S. AI output would require 200 years of non-stop supercomputing.</p>
      <div class="ongoing-themes">
        <span class="theme-badge theme-badge--ai-society">AI &amp; Society</span>
        <span class="theme-badge theme-badge--machine-learning">Machine Learning</span>
      </div>
      <div class="infographic-wrap">
        <img src="/images/infographics/infographic-llm-attribution.png" alt="LLM Attribution Crisis infographic" class="infographic-img" loading="lazy">
      </div>
    </div>

  </div>
</section>

<!-- SELECTED PUBLICATIONS -->
<section class="selected-pubs pub-section" id="selected">
  <h2>Selected Publications</h2>
  <p class="section-desc">Highlighted work across research themes.</p>

  {% assign selected_pubs = site.publications | where_exp: "pub", "pub.selected == true" | sort: "date" | reverse %}
  {% for post in selected_pubs %}
    <div class="pub-card pub-card--selected" data-theme="{{ post.theme }}">
      <div class="pub-card__header">
        <span class="theme-badge theme-badge--{{ post.theme | slugify }}">{{ post.theme }}</span>
        <span class="pub-year">{{ post.date | date: "%Y" }}</span>
      </div>
      <h3 class="pub-card__title">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>
      <p class="pub-card__venue"><em>{{ post.venue }}</em></p>
      {% if post.excerpt %}
        <p class="pub-card__excerpt">{{ post.excerpt | truncate: 220 }}</p>
      {% endif %}
    </div>
  {% endfor %}
</section>

<!-- ALL PUBLICATIONS (filterable by theme) -->
<section class="all-pubs pub-section" id="all">
  <h2>All Publications</h2>

  <div id="pub-list">
    {% assign all_pubs = site.publications | sort: "date" | reverse %}
    {% for post in all_pubs %}
      <div class="list__item pub-item" data-theme="{{ post.theme }}">
        {% include archive-single.html %}
        <span class="theme-badge theme-badge--{{ post.theme | slugify }} pub-item__badge">{{ post.theme }}</span>
      </div>
    {% endfor %}
  </div>
</section>

<script>
(function() {
  var buttons = document.querySelectorAll('.theme-card');
  var items   = document.querySelectorAll('.pub-item');
  var selectedSection = document.querySelector('.selected-pubs');

  buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var filter = this.dataset.filter;

      buttons.forEach(function(b) { b.classList.remove('theme-card--active'); });
      this.classList.add('theme-card--active');

      // Show/hide all-pubs items
      items.forEach(function(item) {
        item.style.display = (filter === 'all' || item.dataset.theme === filter) ? '' : 'none';
      });

      // Show/hide selected section
      if (selectedSection) {
        selectedSection.style.display = (filter === 'all') ? '' : 'none';
      }
    });
  });
})();
</script>
