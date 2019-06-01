module.exports = {
    rootUrl: 'http://localhost/',
    gridUrl: 'http://localhost:4444/wd/hub',
    windowSize: "1124x768",
    calibrate: true,
    httpTimeout: 40000,
    //suitesPerSession: 20,
    sessionsPerBrowser: 1,
    retry: 4,
    browsers: {

        "chrome-old-60.0": {
            desiredCapabilities: {
                browserName: 'chrome',
                version : '60.0'
            }
        },
        "chrome-last-70.0": {
            desiredCapabilities: {
                browserName: 'chrome',
                version : '70.0'
            }
        },

        "opera-old-52.0": {
            desiredCapabilities: {
                browserName: 'opera',
                version : '52.0',
                operaOptions: {
                    binary: "/usr/bin/opera"
                }
            }
        },

        "opera-last-56.0": {
            desiredCapabilities: {
                browserName: 'opera',
                version : '56.0',
                operaOptions: {
                    binary: "/usr/bin/opera"
                }
            }
        },

        "firefox-old-47.0": {
            desiredCapabilities: {
                browserName: 'firefox',
                version : '47.0'
            }
        },

        /*"firefox-last-51.0": {
            desiredCapabilities: {
                browserName: 'firefox',
                version : '51.0'
            }
        },*/

    },

    system: {
        plugins: {
            'html-reporter/gemini': {
                enabled: true,
                path: 'gemini-reports',
                defaultView: 'all'
            }
        }
    }
};
