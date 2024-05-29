const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(item => item.classList.remove('active'));
        tab.classList.add('active');

        const tabContent = document.querySelector(`#${tab.dataset.tab}`);
        tabContents.forEach(content => content.classList.remove('active'));
        tabContent.classList.add('active');
    });
});
