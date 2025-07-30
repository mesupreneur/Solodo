class ExpressError extends Error {
  constructor(statusCode, message) {
    super(message);        // Pass message to the built-in Error constructor
    this.statusCode = statusCode;
    // Fix prototype chain for instanceof checks (optional but recommended)
    Object.setPrototypeOf(this, ExpressError.prototype);
  }
}

module.exports = ExpressError;
