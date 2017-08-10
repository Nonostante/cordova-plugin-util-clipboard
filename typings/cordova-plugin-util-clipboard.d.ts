declare module Cordova {
    export module Plugin {
        interface Clipboard {
            copy(text: string, s?: () => void, f?: (err) => void): void
            hasContent(s: (result: boolean) => void, f?: (err) => void): void
            paste(s: (result: string) => void, f?: (err) => void): void
        }
    }
}

interface Window {
    plugins: Plugins
}

interface Plugins {
    clipboard: Cordova.Plugin.Clipboard
}