!(function (e) {
    (e.fn.scrollTo = function (t, a, i) {
        return (i = void 0 !== i ? i : 0), e(this).animate({ scrollTop: e(this).scrollTop() - e(this).offset().top + e(t).offset().top + i }, void 0 == a ? 1e3 : a), this;
    }),
        (e.fn.mouseIsOver = function () {
            return !!e(this[0]).is(":hover");
        }),
        (e.fn.setAllToMaxHeight = function () {
            return this.height(
                Math.max.apply(
                    this,
                    e.map(this, function (t) {
                        return e(t).height();
                    })
                )
            );
        });
    e(window).width(), e(window).height();
    e(window).on("load", function () {}),
        jQuery(document).ready(function (e) {
            if (
                (e(".m-icons").on("click", function () {
                    e(this).find(".icon-nav").toggleClass("active"), e("#side-menu").toggleClass("active"), e("#header").addClass("affixed");
                }),
                e("#main-nav .has-dropdown").on("click", function () {
                    e(this).hasClass("active") ? (e(this).removeClass("active"), e(this).parent().find(".sub-menu").slideUp()) : (e(this).addClass("active"), e(this).parent().find(".sub-menu").slideDown());
                }),
                e("#main-nav .has-child").on("click", function () {
                    e(this).hasClass("active") ? (e(this).removeClass("active"), e(this).parent().find(".child-sub-menu").slideUp()) : (e(this).addClass("active"), e(this).parent().find(".child-sub-menu").slideDown());
                }),
                e(".box-hover").on("click", function () {
                    var t = e(this).find(".full-des").outerHeight();
                    e(this).hasClass("active")
                        ? (e(this).removeClass("active"), e(this).css("height", "100px"))
                        : (e(this).addClass("active"), e(this).css("height", t + 60), e(this).animatescroll({ scrollSpeed: 1e3, easing: "easeInQuad", padding: 80 }));
                }),
                e(".box-intro").each(function (t, a) {
                    var i = e(a).find(".box-desc").height(),
                        s = e(a).height(),
                        l = e(a).find(".box-desc");
                    console.log(i),
                        e(a).hasClass("pos-top")
                            ? (e(a).css("margin-top", i), l.css("top", -i))
                            : e(a).hasClass("pos-bottom")
                            ? (e(a).css("margin-bottom", i + 20), l.css("top", s - 40))
                            : e(a).hasClass("pos-left") && (e(a).css("margin-bottom", i + 20), l.css("top", s - 40));
                }),
                e(".ila-slt").selectpicker(),
                e(".has-tooltip").hover(
                    function () {
                        e(this).find(".tooltip").css("opacity", 1), e(this).find(".tooltip").show();
                    },
                    function () {
                        e(".tooltip").css("opacity", 0), e(".tooltip").hide();
                    }
                ),
                e(".hero-slider").length > 0)
            ) {
                var t = e(".hero-slider");
                t.on("init", function () {
                    e(".slick-active").find(".animated").addClass("active");
                }),
                    t.on("afterChange", function (t, a, i, s) {
                        var l = a.$slides.get(i);
                        e(l).find(".animated").addClass("active");
                    }),
                    t.slick({ infinite: !0, arrows: !1, dots: !0, autoplay: !0, autoplaySpeed: 5e3 });
            }
            if (
                (e(".list-images").length > 0 && e(".list-images").slick({ infinite: !0, arrows: !1, dots: !0, autoplay: !0, autoplaySpeed: 5e3, adaptiveHeight: !0 }),
                e(".list-clients").length > 0 && e(".list-clients").slick({ infinite: !0, arrows: !1, dots: !0, autoplay: !1, autoplaySpeed: 5e3, adaptiveHeight: !0 }),
                e("#block-whychoose").length > 0)
            )
                var a = new Waypoint({
                    element: document.getElementById("block-whychoose"),
                    handler: function (t) {
                        var i = e.animateNumber.numberStepFactories.separator(".");
                        e(".ila-infos .count").each(function () {
                            var t = e(this).attr("data-count");
                            e(this).animateNumber({ number: t, easing: "swing", numberStep: i }, 1e3, function () {
                                a.disable();
                            });
                        });
                    },
                    offset: "50%",
                });
            e(".ila-animate").length > 0 &&
                e(".ila-animate").waypoint({
                    handler: function (t) {
                        e(this.element).addClass("in-view");
                    },
                    offset: "95%",
                }),
                e(".btn-contact").on("click", function (t) {
                    t.preventDefault();
                    var a = e(this).parent();
                    e(this).parent().toggleClass("active"),
                        e("body").on("click", function (t) {
                            0 == e(t.target).closest("#main-menu li.active").length && a.removeClass("active");
                        });
                }),
                e(".ila-scroll").mCustomScrollbar(),
                e(".ila-slt[name*='current-lvl']").on("changed.bs.select", function (t, a, i, s) {
                    for (var l, n = [], o = e(t.currentTarget).val(); o < e(".ila-slt[name*='current-lvl'] option").length; o++) n.push(e(".ila-slt[name*='current-lvl'] option").eq(o));
                    var c = e(".ila-slt[name*='expected-lvl']");
                    c.html(""),
                        e.each(n, function (e, t) {
                            (l = '<option value="' + n[e].val() + '">' + n[e].html() + "</option>"), c.append(l);
                        }),
                        e(".ila-slt[name*='expected-lvl']").prop("disabled", !1),
                        e(".ila-slt[name*='expected-lvl']").selectpicker("refresh");
                }),
                e("#ila-search-ipt")
                    .on("focus", function (t) {
                        e("#ila-search-ipt").on("keydown", function (t) {
                            if (13 == t.keyCode)
                                if ((event.preventDefault(), e(this).val().length > 3))
                                    e(".list-teachers .col-md-3").fadeOut(),
                                        e(".note-search-result").length < 1 && e(".list-teachers").append('<div class="note-search-result">There is no result for “caroline jane”. Please refine your search.</div>');
                                else {
                                    e(".note-search-result").hide(), e(".list-teachers .col-md-3").fadeIn();
                                    for (var a = 0; a < Math.floor(8 * Math.random()) + 1; a++) e(".list-teachers .col-md-3").eq(a).fadeOut();
                                }
                            else e(".wrapper-search .remove").show();
                        }),
                            e("#search-teachers-form").addClass("keyup"),
                            e("#search-teachers-form .remove").on("click", function () {
                                e(".wrapper-search .remove").hide(), e("#ila-search-ipt").focus(), e("#ila-search-ipt").val("");
                            });
                    })
                    .on("blur", function (t) {
                        e("#search-teachers-form").addClass("out-focus"), e("#ila-search-ipt").val() || e("#search-teachers-form").removeClass("keyup");
                    }),
                e(".ila-tab-title").length > 0 &&
                    e(".ila-tab-items").length > 0 &&
                    e(".ila-tab-title li").on("click", function () {
                        var t = e(this).attr("data-type");
                        e(".ila-tab-title li").removeClass("active"), e(this).addClass("active"), "all" == t ? e(".ila-tab-items > div").fadeIn() : (e(".ila-tab-items > div").fadeOut(), e("[data-item=" + t + "]").fadeIn());
                    }),
                e(".ila-gallery").magnificPopup({
                    delegate: ".box-normal",
                    type: "image",
                    gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] },
                    removalDelay: 300,
                    mainClass: "mfp-fade",
                    callbacks: {
                        elementParse: function (e) {
                            console.log(e.el[0].className), -1 != e.el[0].className.indexOf("video-link") ? (e.type = "iframe") : (e.type = "image");
                        },
                    },
                }),
                e(".ila-video-large").on("click", function (t) {
                    t.preventDefault();
                    var a = e(this).attr("data-src");
                    (video = '<iframe src="' + a + '" width="100%" heigh="100%"></iframe>'), e(this).append(video);
                }),
                e(".logo-clients li").on("click", function (t) {
                    t.preventDefault();
                    var a = e(this).index();
                    e(".logo-clients li").removeClass("active"), e(this).addClass("active"), e(".content-clients li").removeClass("active"), e(".content-clients li").eq(a).addClass("active");
                }),
                e(".ila-paragraph").each(function () {
                    var t = e(this).html(),
                        a = e(this).text(),
                        i = e(this);
                    (text = a.substr(0, 150) + "..."),
                        e(this).text(text),
                        e(this).append('<div class="link-more">See More</div>'),
                        e(this).on("click", ".link-more", function () {
                            i.html(t), e(this).find(".link-more").hide();
                        });
                }),
                e("input[type=radio][name=age_level]").on("change", function () {
                    var t = e("input[name=age_level]:checked").val(),
                        a = e("input[name=age_level]:checked").index("input[name=age_level]");
                    e.ajax({
                        type: "POST",
                        url: "front/home/set_kid_val",
                        data: { flag: 1, val: t },
                        success: function (i) {
                            var s = "front/home/get_search_val/" + a + "/" + t;
                            e.ajax({
                                type: "POST",
                                url: s,
                                success: function (t) {
                                    e("#curlev").html(t);
                                },
                            });
                        },
                    }),
                        e(".list-options > li:nth-child(2)").show(),
                        e("#currentLvl").animatescroll({
                            element: "#class-filter",
                            scrollSpeed: 800,
                            onScrollStart: function () {
                                e("#currentLvl").addClass("is-show");
                            },
                        }),
                        e("#filterSubmit").removeClass("is-show");
                }),
                e("body").on("change", ".ila-slt", function (t) {
                    var a = e("input[name=age_level]:checked").val(),
                        i = e("input[name=age_level]:checked").index("input[name=age_level]"),
                        s = e("input[name=current-level]:checked").val();
                    e("input[name=current-level]:checked").index("input[name=current-level]");
                    e.ajax({
                        type: "POST",
                        url: "front/home/set_kid_val",
                        data: { flag: 2, val: s },
                        success: function (t) {
                            var l = "front/home/get_expected_search_val/" + i + "/" + a;
                            e.ajax({
                                type: "POST",
                                url: l,
                                data: { level_id: s },
                                success: function (t) {
                                    e("#explev").html(t);
                                },
                            });
                        },
                    }),
                        e(".list-options > li:nth-child(3)").show();
                    var l = e("input[type=radio][name=current-level]:checked").val(),
                        n = e(".list-options > li:nth-child(3) .class-option li");
                    n.hide();
                    for (var o = l - 2; o < n.length; o++) n.eq(o).show();
                    e("#expectedLvl").animatescroll({
                        element: "#class-filter",
                        scrollSpeed: 800,
                        onScrollStart: function () {
                            e("#expectedLvl").addClass("is-show");
                        },
                    }),
                        e("#filterSubmit").removeClass("is-show");
                }),
                e("body").on("change", ".ila-slt-exp", function (t) {
                    var a = e("input[name=expected-level]:checked").val();
                    e.ajax({ type: "POST", url: "front/home/set_kid_val", data: { flag: 3, val: a }, success: function (e) {} }),
                        e(".list-options > li:nth-child(4)").show(),
                        e("#filterSubmit").animatescroll({
                            element: "#class-filter",
                            scrollSpeed: 2500,
                            onScrollStart: function () {
                                e("#filterSubmit").addClass("is-show");
                            },
                        });
                }),
                e(".wrapper-filter .btn-submit").on("click", function () {
                    e("html, body").css("overflow", "hidden"),
                        e("#class-filter").addClass("is-show"),
                        e("#filterAge").addClass("is-show"),
                        e(".title-filter").addClass("is-show"),
                        e(".close-filter").addClass("is-show"),
                        e("#class-filter .close-filter").on("click", function () {
                            e("html, body").css("overflow", "visible"), e("#class-filter").removeClass("is-show"), e(".list-options > li").hide(), e(".list-options > li:first-child").show(), e(".is-show").removeClass("is-show");
                        });
                });
        });
})(jQuery);
