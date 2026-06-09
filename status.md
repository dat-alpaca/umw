---
layout: default
title: Status
nav_order: 2
---

# MEXT Scholarship Status [2026]

> Each embassy and consulate offers different scholarship types. The scholarships listed below are specifically those offered in Brazil. Please use this page only as a general guide, and always check your embassy or consulate's website for official information.

---

{% for item in site.data.status %}

{% capture status_capture %}
    {% if item.status == "open" %}
    <span class="{{ site.data.constants.open_color }}">{{ site.data.constants.open_text }}</span>
    {% elsif item.status == "exams" %}
    <span class="{{ site.data.constants.exams_color }}">{{ site.data.constants.exams_text }}</span>
    {% elsif item.status == "closed" %}
    <span class="{{ site.data.constants.closed_color }}">{{ site.data.constants.closed_text }}</span>
    {% endif %}
{% endcapture %}

### **{{ item.name }}** [{{ item.abbrev }}]
**Application Status:** {{ status_capture | strip }} \\
**For more information:** [{{item.abbrev}} Guide]({% link {{item.url}} %})

{% if item.notes != "" %}
> {{ item.notes }}
{% endif %}

---

{% endfor %}