document.addEventListener("DOMContentLoaded", function () {

    const footerContainer = document.getElementById("footer-placeholder");

    if (!footerContainer) return;

    /*
     * Remove any old/static footer already present on the page.
     * This prevents duplicate footers.
     */
    document.querySelectorAll("#colophon").forEach(function (footer) {
        footer.remove();
    });

    /*
     * Footer links
     */
    const siteBase = "https://xinterio-demo.pbminfotech.com/demo4";

    /*
     * Instagram posts
     */
    const instagramPosts = [
        {
            id: "sbi_17854142214188529",
            url: "https://www.instagram.com/p/C7LSjxmiAHF/",
            alt: "#Interior Design #Sofa"
        },
        {
            id: "sbi_17905112792965993",
            url: "https://www.instagram.com/p/C7LSexoCrxK/",
            alt: "#Expert Designer #interior"
        },
        {
            id: "sbi_17890755849012058",
            url: "https://www.instagram.com/p/C7LSYcGi_-B/",
            alt: "#Exterior, #Interior"
        },
        {
            id: "sbi_18229139131274625",
            url: "https://www.instagram.com/p/C7LSUbgi8UE/",
            alt: "#Interiores Planning Team"
        },
        {
            id: "sbi_18013618853368539",
            url: "https://www.instagram.com/p/C7LSPAIiOeq/",
            alt: "#Home Interior Design"
        },
        {
            id: "sbi_18436852306058019",
            url: "https://www.instagram.com/p/C7Gdt_iCeYT/",
            alt: "#interior Design # Develop #interior"
        }
    ];

    /*
     * Left footer menu
     */
    const leftMenu = [
        ["About Us", "/about-us/"],
        ["FAQ", "/faq/"],
        ["Our Team", "/our-team/"],
        ["Our History", "/our-history/"],
        ["Contact Us", "/contact-us/"],
        ["Blog", "/blog-grid-col-4/"],
        ["Service", "/service/2d-3d-layouts/"],
        ["Team Member", "/team-member/lewis-martin/"],
        ["Project", "/portfolio/lighting/"]
    ];

    /*
     * Right footer menu
     */
    const rightMenu = [
        ["Style Guide", "#"],
        ["Instructions", "#"],
        ["Licenses", "#"],
        ["Changelog", "#"],
        ["Error 404", "#"],
        ["Password", "#"],
        ["Protected", "#"],
        ["Coming Soon", "#"]
    ];

    /*
     * Create menu HTML
     */
    function createMenu(items, menuPrefix) {

        return items.map(function (item, index) {

            const title = item[0];
            const url = item[1];

            const finalUrl = url === "#"
                ? "#"
                : siteBase + url;

            return `
                <li
                    id="${menuPrefix}-item-${index + 1}"
                    class="menu-item"
                >
                    <a href="${finalUrl}">
                        ${title}
                    </a>
                </li>
            `;

        }).join("");

    }

    /*
     * Create Instagram HTML
     */
    function createInstagramPosts() {

        return instagramPosts.map(function (post) {

            return `
                <div
                    class="sbi_item sbi_type_image sbi_new sbi_transition"
                    id="${post.id}"
                >

                    <div class="sbi_photo_wrap">

                        <a
                            class="sbi_photo"
                            href="${post.url}"
                            target="_blank"
                            rel="noopener nofollow"
                        >

                            <span class="sbi-screenreader">
                                ${post.alt}
                            </span>

                            <img
                                src="${siteBase}/wp-content/plugins/instagram-feed/img/placeholder.png"
                                alt="${post.alt}"
                                aria-hidden="true"
                                loading="lazy"
                            >

                        </a>

                    </div>

                </div>
            `;

        }).join("");

    }

    /*
     * Current year
     */
    const currentYear = new Date().getFullYear();

    /*
     * Footer HTML
     */
   footerContainer.innerHTML = `<footer id="colophon"
    class="pbmit-footer-section site-footer pbmit-footer-style-5 pbmit-text-color-white pbmit-bg-color-secondarycolor pbmit-footer-menu-yes pbmit-footer-widget-yes">

    <div class="pbmit-widget-copyright-wrap">

        <!-- Main Footer -->
        <div class="pbmit-footer-section footer-wrap pbmit-footer-widget-area">
            <div class="container">
                <div class="row">

                    <!-- Logo & Description -->
                    <div class="pbmit-footer-widget pbmit-footer-widget-col-1 col-md-4">
                        <aside class="widget widget_text">
                            <div class="textwidget">

                                <a href="https://tos.climentos.com/index.html">
                                    <img src="/assets/img/main/image.png"
                                         alt="Climentos Logo"
                                         style="width:150px;height:auto;margin-bottom:20px;">
                                </a>

                                <p>
                                    Turn your coding skills into AI expertise.
                                    Learn, build, and launch real AI projects
                                    with expert mentors in just 120 days.
                                </p>

                            </div>
                        </aside>
                    </div>

                    <!-- Quick Links -->
                    <div class="pbmit-footer-widget pbmit-footer-widget-col-2 col-md-2">
                        <aside class="widget">
                            <h5 class="#">Quick Links</h5>

                            <ul class="menu">
                                <li>
                                    <a href="/index.html">Home</a>
                                </li>

                                <li>
                                    <a href="/pages/about-us.html">About Us</a>
                                </li>

                                <li>
                                    <a href="/pages/services.html">Services</a>
                                </li>

                                <li>
                                    <a href="/pages/portfolio.html">Portfolio</a>
                                </li>

                                <li>
                                    <a href="/pages/placements.html">Placements</a>
                                </li>

                                <li>
                                    <a href="/pages/contactUs.html">Contact Us</a>
                                </li>
                            </ul>
                        </aside>
                    </div>

                    <!-- Courses -->
                    <div class="pbmit-footer-widget pbmit-footer-widget-col-3 col-md-3">
                        <aside class="widget">
                            <h5 class="#">Courses</h5>

                            <ul class="menu">
                                <li>
                                    <a href="https://tos.climentos.com/pages/course-details.html?c=java">
                                        Java + AI
                                    </a>
                                </li>

                                <li>
                                    <a href="https://tos.climentos.com/pages/course-details.html?c=python">
                                        Python + AI
                                    </a>
                                </li>

                                <li>
                                    <a href="https://tos.climentos.com/pages/course-details.html?c=data">
                                        Digital Marketing
                                    </a>
                                </li>

                                <li>
                                    <a href="https://tos.climentos.com/pages/course-details.html?c=data">
                                        Clinical Research Specialist
                                    </a>
                                </li>

                                <li>
                                    <a href="https://tos.climentos.com/pages/courses.html">
                                        All Courses
                                    </a>
                                </li>
                            </ul>
                        </aside>
                    </div>

                    <!-- Contact / Stay in loop -->
                    <div class="pbmit-footer-widget pbmit-footer-widget-col-4 col-md-3">
                        <aside class="widget">
                            <h5 class="#">Stay in the Loop</h5>

                            <p>
                                Placement drives, free workshops and hiring news
                                — once a week, no spam.
                            </p>

                            <p>
                                <i class="fa-solid fa-phone"></i>
                                <a href="tel:+919741739223">
                                    +91 97417 39223
                                </a>
                            </p>

                            <p>
                                <i class="fa-solid fa-envelope"></i>
                                <a href="mailto:support@climentos.com">
                                    support@climentos.com
                                </a>
                            </p>

                        </aside>
                    </div>

                </div>
            </div>
        </div>

        <!-- Copyright -->
        <div class="pbmit-footer-section pbmit-bg-color-custom">
            <div class="container">
                <div class="pbmit-footer-text-area-wrapper pbmit-footer-text-area">

                    <div class="pbmit-footer-text-inner">
                        <div class="row">

                            <div class="col-md-6">
                                <div class="pbmit-footer-copyright-text-area">
                                    Copyright © ${new Date().getFullYear()}
                                    <a href="https://tos.climentos.com/index.html">
                                        Climentos Technologies Pvt Ltd
                                    </a>
                                    All Rights Reserved.
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="pbmit-footer-menu-area">
                                    <div class="menu-footer-menu-container">
                                        <ul class="pbmit-footer-menu">

                                            <li class="menu-item">
                                                <a href="#">
                                                    Terms and Conditions
                                                </a>
                                            </li>

                                            <li class="menu-item">
                                                <a href="#">
                                                    Privacy Policy
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>

    <!-- Big Footer Title -->
    <div class="pbmit-footer-section pbmit-footer-big-area-wrapper">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 pbmit-footer-big-title">
                    <h3 class="pbmit-footer-title-big">
                        willys
                    </h3>
                </div>
            </div>
        </div>
    </div>

</footer>`;
});