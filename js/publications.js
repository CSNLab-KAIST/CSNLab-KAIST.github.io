document.addEventListener('DOMContentLoaded', function () {
    const topicFilter = document.getElementById('topic-filter');
    const typeFilter = document.getElementById('type-filter');
    const publicationItems = document.querySelectorAll('.publication-item');

    function filterPublications() {
        const selectedTopic = topicFilter.value.toLowerCase();
        const selectedType = typeFilter.value.toLowerCase();

        publicationItems.forEach((item) => {
            const topic = item.getAttribute('data-topic').toLowerCase();
            const category = item.getAttribute('data-category').toLowerCase();

            const matchesTopic = selectedTopic === 'all' || topic === selectedTopic;
            const matchesType = selectedType === 'all' || category === selectedType;

            if (matchesTopic && matchesType) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    topicFilter.addEventListener('change', filterPublications);
    typeFilter.addEventListener('change', filterPublications);
});
