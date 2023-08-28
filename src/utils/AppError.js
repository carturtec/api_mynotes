class AppError {
    message;
    statusCode;
    //statusCode = 400 é o padrão caso não seja informado um status
    constructor(message, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = AppError;