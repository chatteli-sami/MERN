const notFoundHandler = (req, res, next) => {
  const error = new Error("Route Not Found");
  error.status = 404;
  next(error);
};

export default notFoundHandler;
