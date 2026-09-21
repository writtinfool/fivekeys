// Initialize Lucide icons
lucide.createIcons();

// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Lead forms (hero + bottom) post straight to Zoho Forms. After a successful
// submission Zoho redirects to zf_redirect_url; point it at this site's
// thank-you page so it works on any domain (pages.dev, custom domain, ...).
// Without JS the field stays empty and Zoho shows its own confirmation page.
var thankYouUrl = new URL('thank-you.html', window.location.href).href;
document.querySelectorAll('input[name="zf_redirect_url"]').forEach(function (input) {
    input.value = thankYouUrl;
});

// FAQ accordion
document.querySelectorAll('.faq-toggle').forEach(function (toggle) {
    toggle.addEventListener('click', function () {
        var answer = this.nextElementSibling;
        var chevron = this.querySelector('.faq-chevron');
        var isOpen = answer.classList.contains('open');

        // Close all
        document.querySelectorAll('.faq-answer').forEach(function (a) {
            a.classList.remove('open');
        });
        document.querySelectorAll('.faq-chevron').forEach(function (c) {
            c.classList.remove('rotated');
        });

        // Open clicked (if it was closed)
        if (!isOpen) {
            answer.classList.add('open');
            chevron.classList.add('rotated');
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Close mobile menu if open
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});
