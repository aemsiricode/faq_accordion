const faqs = document.querySelectorAll('.faq-item')

faqs.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active')
    })
})