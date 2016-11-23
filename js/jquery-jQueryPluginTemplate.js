(function($){
    $.fn.jQueryPluignTemplate = function(options){
        // Set defaults
        var settings = $.extend({
            text: "Hello World!",
            color: null,
            fontStyle: null,
            onComplete: null
        }, options);

        return this.each(function(){
            $(this).text(settings.text);

            if(settings.color){
                $(this).css("color", settings.color);
            }

            if(settings.fontStyle){
                $(this).css("font-style", settings.fontStyle);
            }

            if($.isFunction(settings.onComplete)){
                settings.onComplete.call(this);
            }
        });
    }
}(jQuery));
