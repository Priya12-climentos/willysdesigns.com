document.addEventListener("DOMContentLoaded", function () {
    const headerContainer = document.getElementById("header-container");

    if (!headerContainer) {
        console.error("Header container element '#header-container' not found.");
        return;
    }

    headerContainer.innerHTML = `<header id="masthead" class="site-header pbmit-header-style-13 pbmit-sticky-logo-yes">
                <div class="pbmit-sticky-header "></div>
                <div class="pbmit-header-overlay">
                    <div class="pbmit-header-height-wrapper" style="min-height:100px;">
                        <div class="pbmit-main-header-area pbmit-sticky-logo-yes pbmit-responsive-logo-no pbmit-header-wrapper pbmit-bg-color-transparent">
                            <div class="container">
                                <div class="pbmit-header-content d-flex justify-content-between align-items-center">
                                    <div class="pbmit-logo">
                                        <div class="site-branding pbmit-logo-area">
                                            <div class="wrap">
                                                <h1 class="site-title">
                                                    <a href="https://xinterio-demo.pbminfotech.com/demo12/" rel="home">
                                                        <span class="site-title-text">Xinterio Demo12 - Interior Design WordPress Theme</span>
                                                        <img class="pbmit-main-logo" src="https://xinterio-demo.pbminfotech.com/demo12/wp-content/uploads/sites/19/2026/01/logo-icon.svg" alt="Xinterio Demo12" title="Xinterio Demo12"/>
                                                        <img class="pbmit-sticky-logo" src="https://xinterio-demo.pbminfotech.com/demo12/wp-content/uploads/sites/19/2026/01/logo-icon.svg" alt="Xinterio Demo12" title="Xinterio Demo12"/>
                                                    </a>
                                                </h1>
                                                <!-- Logo area -->
                                            </div>
                                            <!-- .wrap -->
                                        </div>
                                        <!-- .site-branding -->
                                    </div>
                                    <div class="pbmit-menu-search-wrap d-flex justify-content-between align-items-center">
                                        <div class="pbmit-menuarea">
                                            <!-- Top Navigation Menu -->
                                            <div class="navigation-top">
                                                <div class="wrap">
                       
                                                    <nav id="site-navigation"
                                                        class="main-navigation pbmit-navbar pbmit-main-active-color-globalcolor pbmit-dropdown-active-color-globalcolor"
                                                        aria-label="Top Menu">

                                                        <div class="menu-main-menu-container">

                                                            <ul id="pbmit-top-menu" class="menu">

                                                                <!-- HOME -->
                                                                <li id="menu-item-298"
                                                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-298">

                                                                    <a href="/index.html">
                                                                        Home
                                                                    </a>

                                                                </li>


                                                                <!-- ABOUT US -->
                                                                <li id="menu-item-299"
                                                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-299">

                                                                    <a href="/pages/about-us.html">
                                                                        About Us
                                                                    </a>

                                                                </li>


                                                                <!-- SERVICES -->
                                                                <li id="menu-item-301"
                                                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-301">

                                                                    <a href="/pages/services.html">
                                                                        Services
                                                                    </a>

                                                                </li>


                                                                <!-- PORTFOLIO -->
                                                                <li id="menu-item-300"
                                                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-300">

                                                                    <a href="/pages/Portfolio.html">
                                                                        Portfolio
                                                                    </a>

                                                                </li>


                                                                <!-- BLOGS -->
                                                                <li id="menu-item-285"
                                                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-285">

                                                                    <a href="/pages/Blogs.html">
                                                                        Blogs
                                                                    </a>

                                                                    <ul class="sub-menu">

                                                                        <!-- BLOG MASONRY VIEW -->
                                                                        <li id="menu-item-286"
                                                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-286">

                                                                            <a href="/pages/Blogs.html">
                                                                                Blog Masonry View
                                                                            </a>

                                                                            <ul class="sub-menu">

                                                                                <li id="menu-item-292"
                                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-292">

                                                                                    <a href="/pages/blog-m-grid-col-2.html">
                                                                                        Grid Col 2
                                                                                    </a>

                                                                                </li>

                                                                                <li id="menu-item-297"
                                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-297">

                                                                                    <a href="/pages/blog-m-grid-col-3.html">
                                                                                        Grid Col 3
                                                                                    </a>

                                                                                </li>

                                                                                <li id="menu-item-291"
                                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-291">

                                                                                    <a href="/pages/blog-m-grid-col-4.html">
                                                                                        Grid Col 4
                                                                                    </a>

                                                                                </li>

                                                                                <li id="menu-item-290"
                                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-290">

                                                                                    <a href="/pages/blog-masonry-wide.html">
                                                                                        Masonry Wide
                                                                                    </a>

                                                                                </li>

                                                                            </ul>

                                                                        </li>


                                                                        <!-- BLOG GRID VIEW -->
                                                                        <li id="menu-item-287"
                                                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-287">

                                                                            <a href="/pages/Blogs.html">
                                                                                Blog Grid View
                                                                            </a>

                                                                            <ul class="sub-menu">

                                                                                <li id="menu-item-296"
                                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-296">

                                                                                    <a href="/pages/blog-grid-col-2.html">
                                                                                        Grid Col 2
                                                                                    </a>

                                                                                </li>

                                                                                <li id="menu-item-295"
                                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-295">

                                                                                    <a href="/pages/blog-grid-col-3.html">
                                                                                        Grid Col 3
                                                                                    </a>

                                                                                </li>

                                                                                <li id="menu-item-294"
                                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-294">

                                                                                    <a href="/pages/blog-grid-col-4.html">
                                                                                        Grid Col 4
                                                                                    </a>

                                                                                </li>

                                                                                <li id="menu-item-293"
                                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-293">

                                                                                    <a href="/pages/blog-sortable-grid-view.html">
                                                                                        Sortable Grid View
                                                                                    </a>

                                                                                </li>

                                                                            </ul>

                                                                        </li>


                                                                        <!-- BLOG CLASSIC -->
                                                                        <li id="menu-item-288"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-288">

                                                                            <a href="/pages/blog-classic.html">
                                                                                Blog Classic
                                                                            </a>

                                                                        </li>


                                                                        <!-- BLOG SINGLE -->
                                                                        <li id="menu-item-289"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-post menu-item-289">

                                                                            <a href="/pages/blog-single.html">
                                                                                Blog Single Details
                                                                            </a>

                                                                        </li>

                                                                    </ul>

                                                                </li>


                                                                <!-- CONTACT US -->
                                                                <li id="menu-item-284"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-284">

                                                                    <a href="/pages/contact-us.html">
                                                                        Contact Us
                                                                    </a>

                                                                </li>

                                                            </ul>

                                                        </div>

                                                    </nav>
 

                                                    <!-- #site-navigation -->
                                                </div>
                                                <!-- .wrap -->
                                            </div>
                                            <!-- .navigation-top -->
                                        </div>
                                        <div class="pbmit-search-cart-box">
                                             
                                        </div>
                                    </div>
                                    <div class="pbmit-right-box d-flex align-items-center">
                                        <div class="pbmit-header-button">
                                            <a href="tel:+1(212)%20255-511">
                                                <span class="pbmit-header-button-text-1">+91 63603 53223</span>
                                            </a>
                                        </div>
                                        <div class="pbmit-button-box-second">
                                            <div class="pbmit-header-button2">
                                                <a href="https://xinterio-demo.pbminfotech.com/demo12/contact-us/" class="pbmit-header-button">
                                                    <span class="pbmit-header-button-wrapper">
                                                        <span class="pbmit-header-button2-text">Book Consult</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="pbmit-burger-menu-wrapper">
                                            <div class="pbmit-mobile-menu-bg"></div>
                                            <button id="menu-toggle" class="nav-menu-toggle">
                                                <i class="pbmit-base-icon-menu-1"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <!-- pbmit-header-content-end -->
                            </div>
                            <!-- pbmit-header-inner-end -->
                        </div>
                        <!-- container-end -->
                    </div>
                    <!-- pbmit-header-height-wrapper-end -->
                </div>
                <!-- pbmit-header-overlay-end -->
            </header>`;
});