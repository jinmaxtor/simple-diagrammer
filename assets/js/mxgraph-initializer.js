// Parses URL parameters. Supported parameters are:
// - lang=xy: Specifies the language of the user interface.
// - touch=1: Enables a touch-style user interface.
// - storage=local: Enables HTML5 local storage.
// - chrome=0: Chromeless mode.
function getUrlParams(url) {
    var result = {};
    var idx = url.lastIndexOf('?');

    if (idx > 0) {
        var params = url.substring(idx + 1).split('&');

        for (var i = 0; i < params.length; i++) {
            idx = params[i].indexOf('=');

            if (idx > 0) {
                result[params[i].substring(0, idx)] = params[i].substring(idx + 1);
            }
        }
    }

    return result;
}

window.RESOURCES_PATH = './dependencies/mxgraph/resources';
window.STENCIL_PATH = './dependencies/mxgraph/stencils';
window.IMAGE_PATH = './dependencies/mxgraph/images';
window.STYLE_PATH = './dependencies/mxgraph/styles';
window.CSS_PATH = './dependencies/mxgraph/styles';

window.urlParams = getUrlParams(window.location.href);
window.mxBasePath = './dependencies/mxgraph/sources';
window.mxLanguage = 'es';

// Default resources are included in grapheditor resources
window.mxLoadResources = false;
