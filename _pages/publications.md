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

<!-- SELECTED PUBLICATIONS -->
<section class="selected-pubs pub-section" id="selected">
  <h2>Selected Publications</h2>

  <!-- Featured papers with infographics -->
  <div class="ongoing-grid ongoing-grid--infographic">

    <div class="ongoing-card ongoing-card--infographic">
      <div class="ongoing-status ongoing-status--published">Published</div>
      <h3 class="ongoing-title">
        <a href="https://journals.plos.org/complexsystems/article?id=10.1371/journal.pcsy.0000085" target="_blank">Can adversarial attacks by large language models be attributed?</a>
      </h3>
      <p class="ongoing-desc">Demonstrates that attributing AI-generated content to a specific model is computationally intractable: the hypothesis space doubles every ~0.5 years, and attributing one year of U.S. AI output would require 200 years of non-stop supercomputing.</p>
      <div class="ongoing-themes">
        <span class="theme-badge theme-badge--ai-society">AI &amp; Society</span>
        <span class="theme-badge theme-badge--machine-learning">Machine Learning</span>
        <span class="pub-venue-inline">PLOS Complex Systems &middot; 2026</span>
      </div>
      <div class="infographic-wrap">
        <img src="/images/infographics/infographic-llm-attribution.png" alt="LLM Attribution infographic" class="infographic-img js-lightbox-trigger" loading="lazy">
      </div>
    </div>

    <div class="ongoing-card ongoing-card--infographic">
      <div class="ongoing-status">Preprint</div>
      <h3 class="ongoing-title">
        <a href="https://arxiv.org/abs/2501.15351" target="_blank">Fairness in LLM-Generated Surveys</a>
      </h3>
      <p class="ongoing-desc">LLMs excel at simulating macro-level social patterns but consistently show a U.S.-centric bias and significant fairness disparities across gender, education, and political identity when applied to Chilean populations.</p>
      <div class="ongoing-themes">
        <span class="theme-badge theme-badge--ai-society">AI &amp; Society</span>
        <span class="theme-badge theme-badge--computational-social-science">Computational Social Science</span>
        <span class="pub-venue-inline">arXiv &middot; 2025</span>
      </div>
      <div class="infographic-wrap">
        <img src="/images/infographics/infographic-geographic-bias.png" alt="Fairness in LLM Surveys infographic" class="infographic-img js-lightbox-trigger" loading="lazy">
      </div>
    </div>

    <div class="ongoing-card ongoing-card--infographic">
      <div class="ongoing-status">Preprint</div>
      <h3 class="ongoing-title">
        <a href="https://arxiv.org/abs/2404.08829" target="_blank">Measuring the Predictability of Recommender Systems using Structural Complexity Metrics</a>
      </h3>
      <p class="ongoing-desc">Introduces data-driven metrics that use SVD to determine an algorithm's maximum achievable precision, showing &gt;0.90 correlation with top-tier algorithm performance.</p>
      <div class="ongoing-themes">
        <span class="theme-badge theme-badge--machine-learning">Machine Learning</span>
        <span class="theme-badge theme-badge--ai-society">AI &amp; Society</span>
        <span class="pub-venue-inline">arXiv &middot; 2024</span>
      </div>
      <div class="infographic-wrap">
        <img src="/images/infographics/infographic-recommender-systems.png" alt="Recommender Systems Predictability infographic" class="infographic-img js-lightbox-trigger" loading="lazy">
      </div>
    </div>

  </div>

  <!-- Remaining selected publications -->
  <ul class="pub-list">
  {% assign selected_pubs = site.publications | where_exp: "pub", "pub.selected == true" | where_exp: "pub", "pub.has_infographic != true" | sort: "date" | reverse %}
  {% for post in selected_pubs %}
    {% if post.paperurl and post.paperurl contains "arxiv" %}
      {% assign status_label = "Preprint" %}
    {% else %}
      {% assign status_label = "Published" %}
    {% endif %}
    <li class="pub-list__item">
      <div class="pub-list__top">
        <span class="pub-status-tag pub-status-tag--{{ status_label | downcase }}">{{ status_label }}</span>
        <span class="pub-list__title">
          {% if post.paperurl %}<a href="{{ post.paperurl }}" target="_blank">{{ post.title }}</a>{% else %}<a href="{{ post.url | relative_url }}">{{ post.title }}</a>{% endif %}
        </span>
      </div>
      <div class="pub-list__bottom">
        <span class="pub-list__meta"><em>{{ post.venue }}</em> &middot; {{ post.date | date: "%Y" }}</span>
        {% if post.theme %}<span class="theme-badge theme-badge--{{ post.theme | slugify }}">{{ post.theme }}</span>{% endif %}
      </div>
    </li>
  {% endfor %}
  </ul>
</section>

<!-- Lightbox modal -->
<div id="infographic-lightbox" class="lightbox" role="dialog" aria-modal="true" aria-label="Infographic viewer">
  <button class="lightbox__close" id="lightbox-close" aria-label="Close">&times;</button>
  <div class="lightbox__backdrop" id="lightbox-backdrop"></div>
  <div class="lightbox__content">
    <img src="" alt="" id="lightbox-img" class="lightbox__img">
  </div>
</div>

<script>
(function() {
  var lightbox   = document.getElementById('infographic-lightbox');
  var lbImg      = document.getElementById('lightbox-img');
  var lbClose    = document.getElementById('lightbox-close');
  var lbBackdrop = document.getElementById('lightbox-backdrop');

  if (!lightbox || !lbImg || !lbClose || !lbBackdrop) return;

  // Move lightbox to <body> so it sits in the root stacking context,
  // avoiding z-index conflicts with #main's animation stacking context.
  document.body.appendChild(lightbox);

  function openLightbox(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    lightbox.classList.add('lightbox--open');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('lightbox--open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.js-lightbox-trigger').forEach(function(img) {
    img.addEventListener('click', function() {
      openLightbox(img.src, img.alt);
    });
  });

  lbClose.addEventListener('click', closeLightbox);
  lbBackdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
  });
})();
</script>
