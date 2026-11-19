(() => {
    'use strict';

    const form = document.querySelector('.search-form');
    const input = document.querySelector('#rules-search');
    const clearButton = document.querySelector('#search-clear');
    const results = document.querySelector('#search-results');
    const sections = Array.from(document.querySelectorAll('.document-section'));

    if (!form || !input || !clearButton || !results || sections.length === 0) return;

    form.removeAttribute('action');
    form.removeAttribute('method');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        input.focus();
    });

    const searchableRules = sections.flatMap((section) => {
        return Array.from(section.querySelectorAll('.rule-block[id]')).map((rule) => ({
            element: rule,
            title: rule.querySelector('h3')?.textContent.trim() ?? '',
            text: rule.textContent.trim(),
        }));
    });

    function resetSearch() {
        sections.forEach((section) => {
            section.hidden = false;
        });
        searchableRules.forEach(({ element }) => {
            element.hidden = false;
        });
        results.textContent = '';
    }

    input.addEventListener('input', () => {
        const query = input.value.trim().toLocaleLowerCase();
        if (!query) {
            resetSearch();
            return;
        }

        let matchCount = 0;
        const matchingSections = new Set();

        searchableRules.forEach(({ element, title, text }) => {
            const matches = `${title} ${text}`.toLocaleLowerCase().includes(query);
            element.hidden = !matches;
            if (matches) {
                matchCount += 1;
                matchingSections.add(element.closest('.document-section'));
            }
        });

        sections.forEach((section) => {
            section.hidden = !matchingSections.has(section);
        });

        results.textContent = matchCount === 0
            ? 'No matching rules. Try a different search term.'
            : `${matchCount} matching ${matchCount === 1 ? 'rule' : 'rules'} found.`;
    });

    form.addEventListener('reset', () => {
        window.requestAnimationFrame(resetSearch);
        input.focus();
    });
})();