'use strict';

(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = function(root, jQuery) {
            if (jQuery === undefined) {
                if (typeof window !== 'undefined') {
                    jQuery = require('jquery');
                } else {
                    jQuery = require('jquery')(root);
                }
            }
            factory(jQuery);
            return jQuery;
        };
    } else {
        factory(jQuery);
    }
}(function($) {
    $.fn.scrollStickyHeader = function() {
        return this.each(function() {
            var element = $(this);
            var viewportHeight = $(window).height();
            var navHeight = element.height();
            $(window).resize(function() {
                viewportHeight = $(this).height();
            });

            $(document).on('scroll', function(e) {
                if ($('body').scrollTop() > viewportHeight - navHeight) {
                    element.addClass('fixed-header');
                } else {
                    element.removeClass('fixed-header');
                }
            });
        });
    };
}));
