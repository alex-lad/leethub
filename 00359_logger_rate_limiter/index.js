var Logger = function() {
    Logger.prototype.history = new Map();
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    const lastMessageTime = Logger.prototype.history.get(message);

    if (lastMessageTime !== undefined && timestamp - lastMessageTime < 10) {
        return false;
    }

    Logger.prototype.history.set(message, timestamp);
    return true;
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */