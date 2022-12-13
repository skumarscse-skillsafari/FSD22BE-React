export const loginMiddleware = (req, res, next) => {
  const { username } = req.query; // { "username" : "skillsafari"}
  // console.log(username);
  if (username === "skillsafari") {
    req.username = "SkillSafari";
    next();
  }
  res.status(401).send(`<h1>Unauthorized Access</h1>
    <a href="/">Go Back to Home page.</a>`);
};
