!(function (e) {
    function a() {
        return (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(
                navigator.userAgent || navigator.vendor || window.opera
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                (navigator.userAgent || navigator.vendor || window.opera).substr(0, 4)
            )
        );
    }
    function t(a, t, i) {
        (t = void 0 !== t ? t : 1e3), (i = void 0 !== i ? i : 0), (element = e(a)), (offset = element.offset()), (offsetTop = offset.top + i), e("html, body").animate({ scrollTop: offsetTop }, t);
    }
    (jQuery.fn.mouseIsOver = function () {
        return !!e(this[0]).is(":hover");
    }),
        (e.fn.setAllToMaxHeight = function () {
            return this.height(
                Math.max.apply(
                    this,
                    e.map(this, function (a) {
                        return e(a).height();
                    })
                )
            );
        });
    var i;
    e(window).width();
    e(window).on("load", function () {
        a() || (i = skrollr.init({ forceHeight: !1 }));
    }),
        jQuery(document).ready(function (e) {
            e(".filter .ila-slt").on("show.bs.select", function () {
                t(e(this), 500, -200);
            });
            var a = e(".m-icons");
            if (
                (e(".m-icons").on("click", function () {
                    var a = e(this);
                    a.find(".icon-nav").toggleClass("active"), a.toggleClass("sticky"), e("#side-menu").toggleClass("active");
                }),
                e("body").on("click", function (t) {
                    0 == e(t.target).closest("#side-menu").length &&
                        0 == e(t.target).closest("#header").length &&
                        e("#side-menu").hasClass("active") &&
                        (e("#side-menu").removeClass("active"), a.find(".icon-nav").removeClass("active"), a.removeClass("sticky"));
                }),
                e(".ila-box").length > 0 &&
                    e(".row").each(function (a, t) {
                        e(t).find(".ila-box").setAllToMaxHeight();
                    }),
                e("#main-menu > ul > li").hover(
                    function () {
                        e(this).find(".sub-menu").length > 0 && (e(this).find(".sub-menu").mouseIsOver() ? e(this).removeClass("hover") : e(this).addClass("hover"));
                    },
                    function () {
                        e(this).find(".sub-menu").length > 0 && (e(this).find(".sub-menu").mouseIsOver() ? e(this).addClass("hover") : e(this).removeClass("hover"));
                    }
                ),
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
                var i = e(".hero-slider");
                i.on("init", function () {
                    e(".slick-active").find(".animated").addClass("active");
                }),
                    i.on("afterChange", function (a, t, i, n) {
                        var o = t.$slides.get(i);
                        e(o).find(".animated").addClass("active");
                    }),
                    i.slick({ infinite: !0, arrows: !1, dots: !0, autoplay: !0, autoplaySpeed: 5e3 });
            }
            if (e("#block-whychoose").length > 0)
                var n = new Waypoint({
                    element: document.getElementById("block-whychoose"),
                    handler: function (a) {
                        var t = e.animateNumber.numberStepFactories.separator(".");
                        e(".ila-infos .count").each(function () {
                            var a = e(this).attr("data-count");
                            e(this).animateNumber({ number: a, easing: "swing", numberStep: t }, 1e3, function () {
                                n.disable();
                            });
                        });
                    },
                    offset: "50%",
                });
            e(".ila-animate").length > 0 &&
                e(".ila-animate").waypoint({
                    handler: function (a) {
                        e(this.element).addClass("in-view");
                    },
                    offset: "95%",
                }),
                // e(".btn-contact").on("click", function (a) {
                //     a.preventDefault();
                //     var t = e(this).parent();
                //     e(this).parent().toggleClass("active"),
                //         e("body").on("click", function (a) {
                //             0 == e(a.target).closest("#main-menu li.active").length && t.removeClass("active");
                //         });
                // }),
                e(".ila-scroll").mCustomScrollbar(),
                e(".ila-slt[name*='age_level']").on("changed.bs.select", function (a, t, i, n) {
                    var o = "front/home/get_search_val/" + t + "/" + e(".ila-slt[name*='age_level'] option:selected").val();
                    e.ajax({
                        type: "POST",
                        url: o,
                        success: function (a) {
                            e(".ila-slt[name*='start_level']").html(a), e(".ila-slt[name*='start_level']").prop("disabled", !1), e(".ila-slt[name*='start_level']").selectpicker("refresh");
                        },
                    });
                }),
                e(".ila-slt[name*='start_level']").on("changed.bs.select", function (a, t, i, n) {
                    var o = e(a.currentTarget).val();
                    if ("Not Sure" == o) {
                        var s = e("#start_level option:selected").text();
                        (d = e(".ila-slt[name*='reach_level']")).html('<option value="Not Sure">' + s + "</option>");
                    } else {
                        for (var l, r = [], c = (o = t + 1); c < e(".ila-slt[name*='start_level'] option").length; c++) r.push(e(".ila-slt[name*='start_level'] option").eq(c));
                        var d = e(".ila-slt[name*='reach_level']");
                        d.html(""),
                            e.each(r, function (e, a) {
                                (l = '<option value="' + r[e].val() + '">' + r[e].html() + "</option>"), d.append(l);
                            });
                    }
                    e(".ila-slt[name*='reach_level']").prop("disabled", !1), e(".ila-slt[name*='reach_level']").selectpicker("refresh");
                }),
                e("#ila-search-ipt")
                    .on("focus", function (a) {
                        e("#ila-search-ipt").on("keydown", function (a) {
                            if (13 == a.keyCode)
                                if ((event.preventDefault(), e(this).val().length > 3))
                                    e(".list-teachers .col-md-3").fadeOut(),
                                        e(".note-search-result").length < 1 && e(".list-teachers").append('<div class="note-search-result">There is no result for “caroline jane”. Please refine your search.</div>');
                                else {
                                    e(".note-search-result").hide(), e(".list-teachers .col-md-3").fadeIn();
                                    for (var t = 0; t < Math.floor(8 * Math.random()) + 1; t++) e(".list-teachers .col-md-3").eq(t).fadeOut();
                                }
                            else e(".wrapper-search .remove").show();
                        }),
                            e("#search-teachers-form").addClass("keyup"),
                            e("#search-teachers-form .remove").on("click", function () {
                                e(".wrapper-search .remove").hide(), e("#ila-search-ipt").focus(), e("#ila-search-ipt").val("");
                            });
                    })
                    .on("blur", function (a) {
                        e("#search-teachers-form").addClass("out-focus"), e("#ila-search-ipt").val() || e("#search-teachers-form").removeClass("keyup");
                    }),
                e(".load-more-items").on("click", function () {
                    event.preventDefault();
                    var a = e(".ila-tab-items").html();
                    e(".ila-tab-items").append(a), e(this).hide();
                }),
                e(".load-more-logos").on("click", function () {
                    event.preventDefault();
                    var a = e(".list-clients").html();
                    e(".list-clients").append(a), e(this).hide();
                }),
                e(".ila-tab-title").length > 0 &&
                    e(".ila-tab-items").length > 0 &&
                    e(".ila-tab-title li").on("click", function () {
                        var a = e(this).attr("data-type");
                        e(".ila-tab-title li").removeClass("active"), e(this).addClass("active"), "all" == a ? e(".ila-tab-items > div").fadeIn() : (e(".ila-tab-items > div").fadeOut(), e("[data-item=" + a + "]").fadeIn());
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
                e(".ila-video-large").on("click", function (a) {
                    a.preventDefault();
                    var t = e(this).attr("data-src");
                    (video = '<iframe src="' + t + '" width="100%" heigh="100%"></iframe>'), e(this).append(video);
                }),
                e(".fancy-video").click(function (a) {
                    a.preventDefault();
                    var t = e(this).attr("data-src");
                    e.magnificPopup.open({
                        items: { src: t },
                        type: "iframe",
                        iframe: {
                            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>',
                            patterns: { youtube: { index: "youtube.com/", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" } },
                            srcAction: "iframe_src",
                        },
                        removalDelay: 300,
                        mainClass: "mfp-fade",
                    });
                }),
                e(".logo-clients li").on("click", function (a) {
                    a.preventDefault();
                    var t = e(this).index();
                    e(".logo-clients li").removeClass("active"), e(this).addClass("active"), e(".content-clients li").removeClass("active"), e(".content-clients li").eq(t).addClass("active");
                });
        });
})(jQuery),
    
    (function (e) {
        function a(a) {
            return e(window).scrollTop() > a.height();
        }
        setTimeout(function () {
            e(".vjs-big-play-button").append(
                '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80px" height="80px" viewBox="0 0 80 80" version="1.1"> <circle class="outer" cx="40" cy="40" r="37" fill="transparent" stroke="#90A7B3" stroke-width="7" transform="rotate(-90, 40, 40)"/></svg>'
            );
        }, 200);
        e("#main-menu").height();
        if (e(".stickyHeader").length > 0) e("#header").addClass("affixed fixed sticky"), e("#header .logo .small").hide();
        else {
            a(e("#header"))
                ? e("#header")
                      .addClass("sticky")
                      .one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function (a) {
                          e("#header").addClass("affixed");
                      })
                : (e("#header").removeClass("sticky"), e("#header").removeClass("affixed")),
                e(window).scroll(function () {
                    a(e("#header"))
                        ? e("#header")
                              .addClass("sticky")
                              .one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function (a) {
                                  e("#header").addClass("affixed");
                              })
                        : (e("#header").removeClass("sticky"), e("#header").removeClass("affixed"));
                });
            var t = 0,
                i = 0;
            e(window).scroll(function (a) {
                var n = e(this).scrollTop();
                n > t ? e("#header").removeClass("fixed") : i - n >= 50 ? (e("#header").addClass("fixed"), (i = n)) : (i = t), (t = n);
            });
        }
    })(jQuery);
