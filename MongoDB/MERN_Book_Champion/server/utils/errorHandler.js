const errorHandler = (err, req, res, next) => {
  // Build our normalized error object
  const errorResponse = {
    name: err.name || "Error",
    statusCode: err.status || 500,
    message: err.message || "An unexpected error occurred",
    validations: {},
  };

  // If it's a Mongoose validation error, map individual field errors
  if (err.name === "ValidationError") {
    for (const field in err.errors) {
      errorResponse.validations[field] = err.errors[field].message;
    }
  } else if (err.errors) {
    errorResponse.validations = err.errors;
  }

  res.status(errorResponse.statusCode).json(errorResponse);
};

export default errorHandler;
