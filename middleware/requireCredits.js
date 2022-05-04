module.exports = (req, res, next) => {
  if (req.credits < 1) {
    res.status(403).send({ error: 'Not enough credits.' });
  }
  next();
};