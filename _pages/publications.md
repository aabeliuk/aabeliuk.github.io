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


<!-- ONGOING WORK -->
<section class="ongoing-work pub-section" id="ongoing">
  <h2>Ongoing Work</h2>
  <p class="section-desc">Current projects under development or review.</p>
  <div class="ongoing-grid ongoing-grid--infographic">

    <div class="ongoing-card ongoing-card--infographic">
      <div class="ongoing-status">Preprint</div>
      <h3 class="ongoing-title">
        <a href="https://arxiv.org/abs/2501.15351" target="_blank">The Geographic Bias Gap: Evaluating Fairness in LLM-Generated Surveys</a>
      </h3>
      <p class="ongoing-desc">LLMs excel at simulating macro-level social patterns but consistently show a U.S.-centric bias and significant fairness disparities across gender, education, and political identity when applied to Chilean populations.</p>
      <div class="ongoing-themes">
        <span class="theme-badge theme-badge--ai-society">AI &amp; Society</span>
        <span class="theme-badge theme-badge--computational-social-science">Computational Social Science</span>
      </div>
      <div class="infographic-wrap">
        <a href="https://arxiv.org/abs/2501.15351" target="_blank">
          <img src="/images/infographics/infographic-geographic-bias.png" alt="The Geographic Bias Gap infographic" class="infographic-img" loading="lazy">
        </a>
      </div>
    </div>

    <div class="ongoing-card ongoing-card--infographic">
      <div class="ongoing-status">Preprint</div>
      <h3 class="ongoing-title">
        <a href="https://arxiv.org/abs/2404.08829" target="_blank">Decoding Recommender Systems: Measuring Predictability through Structural Complexity</a>
      </h3>
      <p class="ongoing-desc">Introduces data-driven metrics — Analytical Structural Consistency (ASC) and Empirical Structural Consistency (ESC) — that use SVD to determine an algorithm's maximum achievable precision, showing &gt;0.90 correlation with top-tier algorithm performance.</p>
      <div class="ongoing-themes">
        <span class="theme-badge theme-badge--machine-learning">Machine Learning</span>
        <span class="theme-badge theme-badge--ai-society">AI &amp; Society</span>
      </div>
      <div class="infographic-wrap">
        <a href="https://arxiv.org/abs/2404.08829" target="_blank">
          <img src="/images/infographics/infographic-recommender-systems.png" alt="Decoding Recommender Systems infographic" class="infographic-img" loading="lazy">
        </a>
      </div>
    </div>

    <div class="ongoing-card ongoing-card--infographic">
      <div class="ongoing-status ongoing-status--published">Published</div>
      <h3 class="ongoing-title">
        <a href="https://journals.plos.org/complexsystems/article?id=10.1371/journal.pcsy.0000085" target="_blank">The LLM Attribution Crisis: Why Tracing AI Attacks is Becoming Impossible</a>
      </h3>
      <p class="ongoing-desc">Demonstrates that attributing AI-generated content to a specific model is computationally intractable: the hypothesis space doubles every ~0.5 years, and attributing one year of U.S. AI output would require 200 years of non-stop supercomputing.</p>
      <div class="ongoing-themes">
        <span class="theme-badge theme-badge--ai-society">AI &amp; Society</span>
        <span class="theme-badge theme-badge--machine-learning">Machine Learning</span>
        <span class="pub-venue-inline">PLOS Complex Systems</span>
      </div>
      <div class="infographic-wrap">
        <a href="https://journals.plos.org/complexsystems/article?id=10.1371/journal.pcsy.0000085" target="_blank">
          <img src="/images/infographics/infographic-llm-attribution.png" alt="LLM Attribution Crisis infographic" class="infographic-img" loading="lazy">
        </a>
      </div>
    </div>

  </div>
</section>

<!-- SELECTED PUBLICATIONS -->
<section class="selected-pubs pub-section" id="selected">
  <h2>Selected Publications</h2>

  <ul class="pub-list">
  {% assign selected_pubs = site.publications | where_exp: "pub", "pub.selected == true" | sort: "date" | reverse %}
  {% for post in selected_pubs %}
    {% if post.status %}
      {% assign status_label = post.status %}
    {% elsif post.paperurl contains "arxiv" %}
      {% assign status_label = "Preprint" %}
    {% else %}
      {% assign status_label = "Published" %}
    {% endif %}
    <li class="pub-list__item">
      <span class="pub-status-tag pub-status-tag--{{ status_label | downcase }}">{{ status_label }}</span>
      <span class="pub-list__title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></span>
      <span class="pub-list__meta"><em>{{ post.venue }}</em> &middot; {{ post.date | date: "%Y" }}</span>
    </li>
  {% endfor %}
  </ul>
</section>

