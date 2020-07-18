const handleSuccessfullTest = (req, res) => {
  res.statusCode = 200;
  res.json('{"test": "OK"}');
};

export default handleSuccessfullTest;
