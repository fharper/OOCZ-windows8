// For an introduction to the Grid template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=232446
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    var nav = WinJS.Navigation;
    WinJS.strictProcessing();

    app.addEventListener("activated", function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            WPApi.checkLocalStorageSchemaVersion();
            WinJS.UI.processAll();
        }
    });

    WinJS.Application.onsettings = function (e) {
        e.detail.applicationcommands = { "help": { title: "Help", href: "/pages/about-flyout.html" } };
        WinJS.UI.SettingsFlyout.populateSettings(e);
    };

    app.start();
})();
