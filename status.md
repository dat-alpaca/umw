---
layout: default
title: Status
nav_order: 2
---

{% assign current_year = site.time | date: "%Y" | plus: 0 %}
# MEXT Scholarship Status ({{ site.time | date: "%Y" }}/{{ current_year | plus: 1 }})

> Each embassy and consulate offers different scholarship types. The scholarships listed below are based on those offered in Brazil. Please use this page only as a general guide, and always check your embassy or consulate's website for official information.

<br>
The global selector contains the general information across every country. If you want specific country information, use the dropdown below.

<!-- Selector -->
<div id="country-container">
    <label id="country-label" for="country-select" class="text-beta">country:</label>
    <select id="country-select">
        {% for country in site.data.status.countries %}
            {% assign country_name = country[0] %}
            <option value="{{country_name}}">{{ country_name | capitalize }}</option>
        {% endfor %}
    </select>
</div>

<style>
    #country-container {
        display: flex;
        align-items: center;
        align-content: center;
        flex-direction: row;
        justify-content: space-between;

        margin-bottom: 2rem;
    }
    #country-label {
        margin-right: 1.5rem;
        
        font-weight: 600;
        letter-spacing: 0.5px;
        
        text-transform: uppercase;
        color: var(--text-color-light); 
    }
    #country-select {
        width: 100%;
        padding-top: 0.5rem;
        padding-right: 2rem;
        padding-bottom: 0.5rem;
        padding-left: 0.5rem;
        
        font-size: 0.95rem;
        font-family: inherit;

        color: var(--border-color);
        background-color: var(--body-background-color);

        border: 1px solid #b8b8ef;
        border-radius: 4px;

        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        
        cursor: pointer;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }
    .scholarship-item {
        margin-bottom: 1rem;
        padding: 1rem;

        border: 1px solid var(--border-color);
        border-radius: 4px;

        box-shadow: 0 1px 3px rgba(0,0,0,0.5);
    }

    .scholarship-name {
        margin-bottom: 0.25rem;
    }

    .scholarship-status {
        margin-bottom: 0.5rem;
    }

    .scholarship-notes {
        margin: 0;
        padding-left: 1.5rem;
    }

    .scholarship-notes li {
        margin: 0.2rem 0;
        white-space: pre-wrap;
    }
</style>

<!-- Table -->
<div id="scholarship-container"></div>

<script>
    const countryData = {{ site.data.status.countries | jsonify }};
    const scholarshipData = {{ site.data.scholarship.scholarships | jsonify }};

    const styles = {
        open: { text: "{{ site.data.constants.open_text }}", class: "{{ site.data.constants.open_color }}" },
        exams: { text: "{{ site.data.constants.exams_text }}", class: "{{ site.data.constants.exams_color }}" },
        closed: { text: "{{ site.data.constants.closed_text }}", class: "{{ site.data.constants.closed_color }}" }
    };

    function updateTable(countryKey) {
        let country = countryData[countryKey];
        if (!country || !country.scholarships)
            country = countryData['global'];

        const container = document.getElementById('scholarship-container');
        container.innerHTML = '';

        if (countryKey !== "global") {
            const countryEmbassyURL = document.createElement('div');
            countryEmbassyURL.classList.add("text-gamma");
            countryEmbassyURL.innerHTML = `Check out more information accessing the <a href="${country.url}">Embassy's website</a>.`;
            
            container.appendChild(countryEmbassyURL);
        }

        const hr = document.createElement('hr');
        container.appendChild(hr);

        country.scholarships.forEach((item, index) => {
            const typeKey = item.type.toLowerCase();
            const meta = scholarshipData[typeKey];

            if (!meta) 
                return;

            const card = document.createElement('div');
            card.classList.add('scholarship-item');

            const href = new URL(meta.url, window.location.href).href;

            const statusStyle = styles[item.status].class;
            const statusText = styles[item.status].text;

            card.innerHTML = `
                <div class="scholarship-name">
                    <a href="${href}" class="text-beta">
                        ${meta.name}
                    </a>
                </div>

                <div class="scholarship-status">
                    <span class="text-gamma">Status:</span>
                    <span class="text-gamma ${statusStyle}">
                        ${statusText}
                    </span>
                </div>
            `;

            const notes = (item.notes && Array.isArray(item.notes)) ? item.notes
                    : (meta.notes && Array.isArray(meta.notes)) ? meta.notes : null;

            if (notes?.length) {
                const ul = document.createElement('ul');
                ul.classList.add('scholarship-notes');

                notes.forEach(note => {
                    const li = document.createElement('li');
                    li.textContent = note;
                    ul.appendChild(li);
                });

                card.appendChild(ul);
            }

            container.appendChild(card);
        });
    }

    const selector = document.getElementById('country-select');
    selector.addEventListener('change', function() {
        updateTable(selector.value);
    });
    
    updateTable("global");
</script>