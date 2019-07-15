import sm from 'sourcemapped-stacktrace';

const batchSendInterval = 10000;
const defaultOptions = {
    appName: 'Not Specified',
    maxMessagesPerInterval: 3,
    serverCallFunction: null,
    filters: {
        ignoredErrors: []
    }
}

class SimpleClientLogger {
    constructor(options) {
        this.options = Object.assign(defaultOptions, options);
        this.errorCache = [];
        this.sendInterval = null;
    }

    init() {
        this._addGlobalErrorHandler();
        this.sendInterval = setInterval(() => {
            this._sendBatch();
        }, batchSendInterval);
    }

    _sendBatch() {
        if (this.errorCache.length === 0) {
            // eslint-disable-next-line
            console.log(`LOGGER: No errors to send.`);
            return;
        }

        if (this.options.serverCallFunction) {
            this.options.serverCallFunction.call(this, this.errorCache);
        } else {
            // eslint-disable-next-line
            console.log(`LOGGER: ${this.errorCache}`);
        }

        this.errorCache = [];
    }

    _addError(message) {
        if (this.errorCache.length > this.maxMessagesPerInterval) {
            // don't add any more errors to the sending batch
            return;
        }

        this.errorCache.push(message);
    }

    _addGlobalErrorHandler() {
        const self = this;
        window.onerror = function (msg, url, lineNo, columnNo, error) {
            const string = msg.toLowerCase();
            const substring = "script error";
            if (string.indexOf(substring) > -1) {
                // don't report errors getting scripts.  
                // This could be EWN

                //alert('Script Error: See Browser Console for Detail');
            } else {
                sm.mapStackTrace(error.stack, (mappedStack) => {

                    const messageObject = {
                        message: msg,
                        url: url,
                        lineNo: lineNo,
                        columnNo: columnNo,
                        error: mappedStack.join('/n'),
                        userInfo: {}
                    };

                    // var userInfo = {};
                    // if (app && app.stores && app.stores.userProfile) {

                    // } else if (appConfig) {
                    //     userInfo.ubiNumber = appConfig.ubiNumber;
                    // } 
                    // messageObject.userInfo = userInfo;

                    const message = JSON.stringify(messageObject);

                    self._addError.call(self, message);
                });
            }

            return false;
        };
    }
}

export default SimpleClientLogger;
