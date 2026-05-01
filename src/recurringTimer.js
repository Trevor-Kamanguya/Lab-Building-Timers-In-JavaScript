/**
 * Function: recurringTimer
 * Description: Starts a recurring timer that logs a message at fixed intervals.
 *
 * @param {string} message - The message to log.
 * @param {number} interval - Time interval in milliseconds.
 * @returns {NodeJS.Timeout} The timer ID.
 */
function recurringTimer(message, interval) {
  return setInterval(() => {
    console.log(message);
  }, interval);
}

/**
 * Function: stopRecurringTimer
 * Description: Stops a recurring timer using its ID.
 *
 * @param {NodeJS.Timeout} timerId - The ID returned by setInterval.
 */
function stopRecurringTimer(timerId) {
  clearInterval(timerId);
}

module.exports = { recurringTimer, stopRecurringTimer };