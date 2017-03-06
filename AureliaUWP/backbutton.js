(function () {

    var systemNavigationManager = Windows.UI.Core.SystemNavigationManager.getForCurrentView();
    systemNavigationManager.addEventListener("backrequested", handleSystemNavigationEvent.bind(this));

    window.onpopstate = function () {

        var systemNavigation = Windows.UI.Core.SystemNavigationManager.getForCurrentView();

        if (endsWith(window.location.href, "index.html")) {
            systemNavigation.appViewBackButtonVisibility = Windows.UI.Core.AppViewBackButtonVisibility.collapsed;
        } else {
            systemNavigation.appViewBackButtonVisibility = Windows.UI.Core.AppViewBackButtonVisibility.visible;
        }
    };

})();

function handleSystemNavigationEvent(args) {
    args.handled = true;
    window.history.back();
}

function endsWith(str, suffix) {
    return str.slice(-suffix.length) === suffix;
}