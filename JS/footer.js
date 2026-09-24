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
    footerContainer.innerHTML = `

        <footer
            id="colophon"
            class="pbmit-footer-section site-footer pbmit-footer-style-3 pbmit-text-color-white pbmit-bg-color-secondarycolor pbmit-footer-menu-yes pbmit-footer-widget-yes"
        >

            <!-- ==========================================
                 FOOTER MAIN AREA
                 ========================================== -->

            <div class="pbmit-footer-section footer-wrap pbmit-footer-widget-area">

                <div class="container">

                    <div class="row">

                        <!-- LEFT MENU -->
                        <div class="pbmit-footer-widget pbmit-footer-widget-col-1 col-md-4">

                            <aside
                                id="nav_menu-1"
                                class="pbmit-two-column-menu widget widget_nav_menu"
                            >

                                <div class="menu-left-menu-container">

                                    <ul
                                        id="menu-left-menu"
                                        class="menu"
                                    >

                                        ${createMenu(leftMenu, "left-menu")}

                                    </ul>

                                </div>

                            </aside>

                        </div>

                        <!-- FOOTER LOGO -->
                        <div class="pbmit-footer-widget pbmit-footer-widget-col-2 col-md-4">

                            <aside
                                id="text-2"
                                class="widget widget_text"
                            >

                                <div class="textwidget">

                                    <div class="pbmit-footer-logo">

                                        <img
                                            decoding="async"
                                            class="pbmit-main-logo"
                                            src="${siteBase}/wp-content/uploads/sites/10/2024/06/favicon.svg"
                                            alt="Xinterio Demo4"
                                            title="Xinterio Demo4"
                                        >

                                    </div>

                                </div>

                            </aside>

                        </div>

                        <!-- RIGHT MENU -->
                        <div class="pbmit-footer-widget pbmit-footer-widget-col-3 col-md-4">

                            <aside
                                id="nav_menu-2"
                                class="pbmit-two-column-menu widget widget_nav_menu"
                            >

                                <div class="menu-right-menu-container">

                                    <ul
                                        id="menu-right-menu"
                                        class="menu"
                                    >

                                        ${createMenu(rightMenu, "right-menu")}

                                    </ul>

                                </div>

                            </aside>

                        </div>

                    </div>

                </div>

            </div>


            <!-- ==========================================
                 INSTAGRAM AREA
                 ========================================== -->

            <div class="pbmit-footer-instagram-area">

                <div class="container">

                    <div class="row">

                        <div class="pbmit-footer-instagram-wrapper">

                            <div
                                id="sb_instagram"
                                class="sbi sbi_mob_col_1 sbi_tab_col_3 sbi_col_6 sbi_width_resp"
                                style="padding-bottom: 10px;"
                                data-feedid="*1"
                                data-res="auto"
                                data-cols="6"
                                data-colsmobile="1"
                                data-colstablet="3"
                                data-num="20"
                                data-nummobile="20"
                                data-item-padding="5"
                                data-imageaspectratio="1:1"
                            >

                                <div
                                    id="sbi_images"
                                    style="gap: 10px;"
                                >

                                    ${createInstagramPosts()}

                                </div>

                                <div id="sbi_load"></div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <!-- ==========================================
                 CONTACT + SOCIAL AREA
                 ========================================== -->

            <div
                class="pbmit-footer-section pbmit-footer-big-area-wrapper pbmit-bg-color-transparent"
            >

                <div class="footer-wrap pbmit-footer-big-area">

                    <div class="container">

                        <div class="row">

                            <!-- EMAIL + PHONE -->
                            <div class="col-md-4 col-sm-12 pbmit-footer-left">

                                <span class="pbmit-email-text">
                                    hello@example.com
                                </span>

                                <span class="pbmit-phone-number">
                                    +79 2589 63598
                                </span>

                            </div>


                            <!-- ADDRESS -->
                            <div class="col-md-4 col-sm-12 pbmit-footer-right">

                                <span class="pbmit-address">
                                    Chicago HQ Estica cop,
                                    <br>
                                    Macomb, MI 48042
                                </span>

                            </div>


                            <!-- SOCIAL -->
                            <div class="col-md-4 col-sm-12 pbmit-footer-right-social">

                                <ul class="pbmit-social-links">

                                    <!-- Facebook -->
                                    <li class="pbmit-social-li pbmit-social-facebook">

                                        <a
                                            title="Facebook"
                                            href="#"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >

                                            <span>
                                                <i class="fa-brands fa-facebook-f"></i>
                                            </span>

                                        </a>

                                    </li>


                                    <!-- X / Twitter -->
                                    <li class="pbmit-social-li pbmit-social-twitter">

                                        <a
                                            title="X / Twitter"
                                            href="#"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >

                                            <span>
                                                <i class="fa-brands fa-x-twitter"></i>
                                            </span>

                                        </a>

                                    </li>


                                    <!-- LinkedIn -->
                                    <li class="pbmit-social-li pbmit-social-linkedin">

                                        <a
                                            title="LinkedIn"
                                            href="#"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >

                                            <span>
                                                <i class="fa-brands fa-linkedin-in"></i>
                                            </span>

                                        </a>

                                    </li>


                                    <!-- Instagram -->
                                    <li class="pbmit-social-li pbmit-social-instagram">

                                        <a
                                            title="Instagram"
                                            href="#"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >

                                            <span>
                                                <i class="fa-brands fa-instagram"></i>
                                            </span>

                                        </a>

                                    </li>

                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <!-- ==========================================
                 COPYRIGHT
                 ========================================== -->

            <div
                class="pbmit-footer-section pbmit-footer-text-area pbmit-bg-color-custom"
            >

                <div class="container">

                    <div class="pbmit-footer-text-inner">

                        <div class="row">

                            <div class="col-md-12">

                                <div class="pbmit-footer-copyright-text-area">

                                    Copyright © ${currentYear}

                                    <a href="${siteBase}/">
                                        PBM Infotech
                                    </a>

                                    All Rights Reserved.

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </footer>

    `;

});