function errorHandler (error, request, response, next) {
    if(error) {
        response.send("<h1>There was an error, please try again</h1>");
    }
}

module.exports = errorHandler