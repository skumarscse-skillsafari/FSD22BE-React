export const middlewareTwo = (req, res, next) => {
  console.log("I am from MiddlewareTwo");
  next();
};
