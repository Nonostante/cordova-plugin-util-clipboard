module.exports = {
    copy: function (text, s, f) {
        if (text) {
            cordova.exec(s, f, "Clipboard", "copy", [text]);
        } else {
            f && f({ code: 1, message: "Invalid arguments" });
        }
    },
    hasContent: function (s, f) {
        cordova.exec(s, f, "Clipboard", "hasContent", []);
    },
    paste: function (s, f) {
        cordova.exec(s, f, "Clipboard", "paste", []);
    }
};