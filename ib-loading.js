(function ( $ ) {
    $.fn.ibLoading = function ( options ) {
        
        // Options
        var settings = $.extend({
            duration: 2000,
            targetEl: null,
            bgColor: '#666666',
            height: '1%',
            top: '49.5%'
        }, options );

        // Validation
        if(!settings.targetEl){
            console.error("ibLoading: Config failed");
            return this;
        }

        // Init
        var target = $(settings.targetEl);
        
        // Action
        return this.each(function () {
            target.hide();
            $(this).css({
                "background": settings.bgColor,
                "height": settings.height,
                "top": settings.top,
                "position": "absolute",
                "z-index": "1000",
                "width": "0%"
            }).animate({
                width: "100%"
            }, settings.duration, function () {
                $(this).hide();
                target.show();
            });
        });

    }
}( jQuery ));