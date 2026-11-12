document.addEventListener("DOMContentLoaded", () => {
    // Dynamic Footer Year
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Mobile Navigation Toggle
    const mobileToggle = document.getElementById("mobileToggle");
    const navMenu = document.getElementById("navMenu");

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });
        });
    }

    // Gallery Lightbox Functionality
    const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const lightboxClose = document.getElementById("lightboxClose");
    const lightboxPrev = document.getElementById("lightboxPrev");
    const lightboxNext = document.getElementById("lightboxNext");
    let currentIndex = 0;

    function openLightbox(index) {
        currentIndex = index;
        const item = galleryItems[currentIndex];
        const img = item.querySelector("img");
        const title = item.querySelector("h4").textContent;
        const sub = item.querySelector("span").textContent;

        lightboxImg.src = img.src;
        lightboxCaption.textContent = `${title} — ${sub}`;
        lightbox.classList.add("active");
    }

    galleryItems.forEach((item, index) => {
        item.addEventListener("click", () => openLightbox(index));
    });

    if (lightboxClose) {
        lightboxClose.addEventListener("click", () => lightbox.classList.remove("active"));
    }

    if (lightboxPrev) {
        lightboxPrev.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
            openLightbox(currentIndex);
        });
    }

    if (lightboxNext) {
        lightboxNext.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % galleryItems.length;
            openLightbox(currentIndex);
        });
    }

    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove("active");
            }
        });
    }

    // WhatsApp Fill-in Quote Form Submission
    const whatsappForm = document.getElementById("whatsappForm");
    const WHATSAPP_NUMBER = "27826460706"; // +27 82 646 0706

    if (whatsappForm) {
        whatsappForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const fullName = document.getElementById("fullName").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const suburb = document.getElementById("suburb").value.trim();
            const serviceType = document.getElementById("serviceType").value;
            const treeCount = document.getElementById("treeCount").value;
            const details = document.getElementById("details").value.trim();

            const message =
                `*NEW QUOTE REQUEST - WITH MORE CARE TREE FELLING*%0A` +
                `----------------------------------------%0A` +
                `*Name:* ${encodeURIComponent(fullName)}%0A` +
                `*Phone:* ${encodeURIComponent(phone)}%0A` +
                `*Suburb/Area:* ${encodeURIComponent(suburb)}%0A` +
                `*Service:* ${encodeURIComponent(serviceType)}%0A` +
                `*Approx. Trees:* ${encodeURIComponent(treeCount)}%0A` +
                `*Details:* ${encodeURIComponent(details)}%0A` +
                `----------------------------------------%0A` +
                `Please let me know when you are available for a quote.`;

            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
            window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        });
    }
});
