(function($) {
    var queryString = readQueryString();
    
    var examples = [
        "minimal"
    ];
    
    var exampleName = queryString.example || examples[0];
    var exampleUrl = "examples/" + exampleName + ".js";
    
    $.ajax({
        url: exampleUrl,
        dataType: "text",
        success: function(source) {
            loadScript(exampleUrl);
            $("#source-raw-link").attr("href", exampleUrl);
            $("#source").text(source);
        }
    });
    
    
    function loadScript(src) {
        var scriptTag = document.createElement("script");
        scriptTag.type = "text/javascript";
        scriptTag.async = true;
        scriptTag.src = src;
        document.body.appendChild(scriptTag);
    };
    
    function readQueryString() {
        var pairs = window.location.search.substr(1).split('&');
        if (queryString == "") {
            return {};
        }
        var result = {};
        for (var i = 0; i < pairs.length; ++i) {
            var keyValue = pairs[i].split('=');
            if (keyValue.length == 2) {
                result[keyValue[0]] = decodeURIComponent(keyValue[1].replace(/\+/g, " "));
            }
        }
        return result;
    };
})(jQueryGlimpse);