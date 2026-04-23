const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  // TODO: Implement this function.
 
  const res = await Promise.all(urls.map(url => httpGet(url)));
  const results = [];
  return results;
};

module.exports = {
  getArnieQuotes,
};
