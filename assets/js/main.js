jQuery(window).on('load', function() {
            new JCaption('img.caption');
        });

        jarallax(document.querySelectorAll('.jarallax'));



        jQuery(document).ready(function() {
            jQuery("#j51testimonials799").owlCarousel({
                autoplaySpeed: 800,
                navText: ["", ""],
                navClass: ["btn", "btn"],
                loop: true,
                margin: 10,
                items: 1,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplaySpeed: 800,
                smartSpeed: 800,
                dots: true,
                dotsEach: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    440: {
                        items: 1,
                    },
                    767: {
                        items: 1,
                    },
                    959: {
                        items: 1,
                    },
                    1024: {
                        items: 1,
                    }
                },
            });
        });



        jQuery(document).ready(function() {
            jQuery('#j51news723').owlCarousel({
                loop: true,
                items: 2,
                lazyLoad: true,
                autoplay: true,
                autoplaySpeed: 600,
                autoplayTimeout: 3000,
                dotsClass: 'j51-nav-dots',
                dotClass: 'j51-nav-dot',
                dots: false,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    440: {
                        items: 1,
                    },
                    767: {
                        items: 1,
                    },
                    960: {
                        items: 2,
                    },
                    1280: {
                        items: 2
                    }
                }
            });

            var owl = jQuery('#j51news723');
            jQuery('#j51news-next723').click(function() {
                owl.trigger('next.owl.carousel');
            })
            jQuery('#j51news-prev723').click(function() {
                owl.trigger('prev.owl.carousel');
            })
        });


        window.onload = window.onresize = setOverlap;

        function setOverlap() {
            var headerHeight = document.getElementById("container_header").clientHeight;
            var nextArrow = document.getElementById("layerslideshow-next");
            var prevArrow = document.getElementById("layerslideshow-prev");

            if (nextArrow) nextArrow.style.marginTop = ((headerHeight * .5) - 20) + "px";
            if (prevArrow) prevArrow.style.marginTop = ((headerHeight * .5) - 20) + "px";
            var ele = document.querySelectorAll(".layerslideshow692 .info");
            var i;
            for (i = 0; i < ele.length; i++) {
                ele[i].style.paddingTop = headerHeight + "px";
                ele[i].style.opacity = "1";
            }
        }

jQuery(document).ready(function() {

                                            jQuery('#layerslideshow692').owlCarousel({
                                                loop: true,
                                                items: 1,
                                                pagination: true,
                                                lazyLoad: true,
                                                autoplay: true,
                                                autoplaySpeed: 600,
                                                autoplayTimeout: 5000,
                                                animateOut: 'fadeOut',
                                                dotsClass: 'j51-nav-dots',
                                                dotClass: 'j51-nav-dot',
                                                video: true,
                                                lazyLoad: true,
                                            });

                                            // Custom Navigation Events
                                            var owl = jQuery('#layerslideshow692');
                                            jQuery('#layerslideshow-next').click(function() {
                                                owl.trigger('next.owl.carousel');
                                            })
                                            jQuery('#layerslideshow-prev').click(function() {
                                                owl.trigger('prev.owl.carousel');
                                            })

                                        });

jarallax(document.querySelectorAll('.jarallax'), {
            speed: 0.5,
            disableParallax: /iPad|iPhone|iPod|Android/,
            disableVideo: /iPad|iPhone|iPod|Android/
        });

var loadDeferredStyles = function() {
            var addStylesNode = document.getElementById("deferred-styles");
            var replacement = document.createElement("div");
            replacement.innerHTML = addStylesNode.textContent;
            document.body.appendChild(replacement)
            addStylesNode.parentElement.removeChild(addStylesNode);
        };
        var raf = requestAnimationFrame || mozRequestAnimationFrame ||
            webkitRequestAnimationFrame || msRequestAnimationFrame;
        if (raf) raf(function() {
            window.setTimeout(loadDeferredStyles, 0);
        });
        else window.addEventListener('load', loadDeferredStyles);
