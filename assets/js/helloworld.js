var MYLIBRARY = MYLIBRARY || (function(){
    var _args = {}; // private

    return {
        init : function(Args) {
            _args = Args;
            // some other initialising
        },
        pictures : function() {
            var country = _args[0]
            alert('Your country is ' + country);
        }
    };
}());