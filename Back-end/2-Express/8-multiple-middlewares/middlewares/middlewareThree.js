export const middlewareThree = (req, res, next) => {
  console.log("I am from MiddlewareThree");
  next();
};
