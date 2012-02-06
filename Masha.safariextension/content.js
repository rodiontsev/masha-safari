window.addEventListener("load", function() {

    var log = function(msg) {
        window.console.log(msg);
    };
    
    var init = function() {
        if(typeof window.MaSha == "undefined") {
            window.setTimeout(init, 100);
        } else {
            MaSha.instance = new MaSha({
                selectable: document.body
            });
            
            log("MaSha version " + MaSha.version);
        }
    };
    
    init();
    
}, false);
