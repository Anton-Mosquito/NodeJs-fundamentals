module.exports = (baseUrl) => (req, res) => {
  const parsecUrl = new URL(req.url, baseUrl);
  const params = {};
  parsecUrl.searchParams.forEach((value, key) => (params[key] = value));

  req.pathname = parsecUrl.pathname;
  req.params = params;
};
