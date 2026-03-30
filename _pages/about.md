---
permalink: /
title: " About me "
excerpt: "About me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

Hi! I am an Assistant Professor in the [Department of Computer Science](http://www.dcc.uchile.cl/) at the University of Chile. My research focuses on the societal impact of algorithms — combining behavioral modeling, optimization, game theory, and online experiments to design fairer and more efficient social computing systems.

<style>
.career-timeline {
  position: relative;
  margin: 2.5em 0 2em 0;
  padding: 0;
}
.career-timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #c9a227;
  transform: translateX(-50%);
}
.ct-item {
  display: flex;
  justify-content: flex-end;
  padding-right: calc(50% + 2em);
  position: relative;
  margin-bottom: 1.8em;
}
.ct-item.ct-right {
  justify-content: flex-start;
  padding-right: 0;
  padding-left: calc(50% + 2em);
}
.ct-dot {
  position: absolute;
  left: 50%;
  top: 1.1em;
  width: 13px;
  height: 13px;
  background: #c9a227;
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 1;
  box-shadow: 0 0 0 3px rgba(201,162,39,0.18);
}
.ct-card {
  background: #fff;
  border-left: 4px solid #c9a227;
  border-radius: 3px;
  padding: 0.75em 1em;
  max-width: 320px;
  box-shadow: 0 1px 4px rgba(13,33,55,0.08);
  transition: box-shadow 0.2s ease;
}
.ct-card:hover {
  box-shadow: 0 4px 14px rgba(13,33,55,0.13);
}
.ct-item.ct-right .ct-card {
  border-left: none;
  border-right: 4px solid #c9a227;
}
.ct-year {
  display: inline-block;
  font-size: 0.75em;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #c9a227;
  margin-bottom: 0.2em;
}
.ct-card h4 {
  margin: 0.1em 0 0.15em 0;
  font-size: 0.92em;
  color: #0d2137;
  font-weight: 700;
}
.ct-card p {
  margin: 0;
  font-size: 0.82em;
  color: #7a8288;
}
.ct-card a { color: #1a6fa8; }

@media (max-width: 600px) {
  .career-timeline::before { left: 10px; }
  .ct-item,
  .ct-item.ct-right {
    justify-content: flex-start;
    padding-right: 0;
    padding-left: 2.2em;
  }
  .ct-dot { left: 10px; }
  .ct-item.ct-right .ct-card {
    border-left: 4px solid #c9a227;
    border-right: none;
  }
  .ct-card { max-width: 100%; }
}
</style>

<div class="career-timeline">

  <div class="ct-item ct-left">
    <div class="ct-dot"></div>
    <div class="ct-card">
      <span class="ct-year">2012</span>
      <h4>B.Sc. Civil Engineering in Computer Science</h4>
      <p><a href="http://www.dcc.uchile.cl/">University of Chile</a></p>
    </div>
  </div>

  <div class="ct-item ct-right">
    <div class="ct-dot"></div>
    <div class="ct-card">
      <span class="ct-year">2013 – 2017</span>
      <h4>Ph.D. in Computer Science</h4>
      <p><a href="https://www.unimelb.edu.au/">University of Melbourne</a> · Advisors: <a href="http://pwp.gatech.edu/pascal-van-hentenryck/">P. Van Hentenryck</a> &amp; <a href="http://gerardo.berbeglia.com/">G. Berbeglia</a></p>
    </div>
  </div>

  <div class="ct-item ct-left">
    <div class="ct-dot"></div>
    <div class="ct-card">
      <span class="ct-year">2017 – 2019</span>
      <h4>Postdoctoral Researcher</h4>
      <p><a href="http://scalable.media.mit.edu/">MIT Media Lab</a> · Scalable Cooperation Group · <a href="https://rahwan.me/">I. Rahwan</a></p>
    </div>
  </div>

  <div class="ct-item ct-right">
    <div class="ct-dot"></div>
    <div class="ct-card">
      <span class="ct-year">2019 – 2021</span>
      <h4>Research Scientist</h4>
      <p><a href="https://minds.isi.edu/">USC Information Sciences Institute</a> · <a href="https://www.isi.edu/people/lerman/about">K. Lerman</a></p>
    </div>
  </div>

  <div class="ct-item ct-left">
    <div class="ct-dot"></div>
    <div class="ct-card">
      <span class="ct-year">2021 – present</span>
      <h4>Assistant Professor</h4>
      <p><a href="http://www.dcc.uchile.cl/">University of Chile</a> · Department of Computer Science</p>
    </div>
  </div>

</div>

<div style="text-align: center; margin-top: 2em;">
  <img src="/images/coauthor_network.png" alt="Coauthor Network" style="max-width: 100%; border-radius: 4px;">
  <p style="font-size: 0.85em; color: #888; margin-top: 0.5em;">Coauthor network</p>
</div>
