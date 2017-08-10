cordova.commandProxy.add("Clipboard", {
    copy: function (s, f, args) {
        var text = args && args[0];
        if (!text) {
            f && f({ code: 1, message: "Invalid arguments" });
            return;
        }

        var ns = Windows.ApplicationModel.DataTransfer;

        try {
            var data = new ns.DataPackage();
            data.setText(text);
            ns.Clipboard.setContent(data);
            s && s();
        } catch (e) {
            f && f({ code: 2, message: e.message, serviceCode: e.number });
        }
    },
    hasContent: function (s, f) {
        var ns = Windows.ApplicationModel.DataTransfer;
        var content = ns.Clipboard.getContent();
        s && s(content.contains(ns.StandardDataFormats.text));
    },
    paste: function (s, f) {
        var ns = Windows.ApplicationModel.DataTransfer;
        var content = ns.Clipboard.getContent();
        if (content.contains(ns.StandardDataFormats.text)) {
            content.getTextAsync().then(
                function (text) {
                    s && s(text);
                },
                function (e) {
                    f && f({ code: 2, message: e.message, serviceCode: e.number });
                });
        } else {
            f && f({ code: 3, message: "No data" });
        }
    }
});