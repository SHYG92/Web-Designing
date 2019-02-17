/**
 *	jQuery Plugin for simple vertical scrolling - horizontal movement parallax effect
 *	I wrote this plugin for a project we have done.
 *
 *	License:
 *	The MIT License (MIT)
 *
 *	@version 0.8.1
 *
 *   Copyright (c) 2013 pixxelfactory
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in
 *   all copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *   THE SOFTWARE.
 **/
! function(t) {
    "use strict";
    t.jInvertScroll = function(i, h) {
        var o = {
                width: "auto",
                height: "auto",
                onScroll: function() {}
            },
            e = t.extend(o, h);
        if (!("Object" == typeof i && i.length > 0)) {
            var n, c, l, r = [],
                s = 0;
            t.each(i, function(i, h) {
                t(h).each(function() {
                    var i = {
                        width: t(this).width(),
                        height: t(this).height(),
                        el: t(this)
                    };
                    r.push(i), s < i.width && (s = i.width)
                })
            }), "auto" == e.width && (e.width = s), "auto" == e.height && (e.height = s), t("body").css("height", e.height + "px"), t([document, window]).on("ready resize", function() {
                n = t(document).height(), c = t(this).height(), l = t(this).width()
            }), t(window).on("scroll resize", function() {
                var i = t(this).scrollTop(),
                    h = (i / (n - c)).toFixed(4);
                "function" == typeof e.onScroll && e.onScroll.call(this, h), t.each(r, function(t, i) {
                    var o = -1 * Math.floor((i.width - l) * h);
                    i.el.css("left", o)
                })
            })
        }
    }
}(jQuery);