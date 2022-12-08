export const middlewareOne = (req, res, next) => {
  console.log("I am from MiddlewareOne");
  next();
};
