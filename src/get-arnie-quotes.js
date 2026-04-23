const { httpGet } = require('./mock-http-interface');

const mapTheResponsesToTheResults = (response) => {
  const { status, body } = response;
  const { message } = JSON.parse(body);
  return status === 200 
    ? { 'Arnie Quote': message } 
    : { 'FAILURE': message };
};

const getArnieQuotes = async (urls) => {
  const res = await Promise.all(urls.map(url => httpGet(url)));
  const results = res.map(mapTheResponsesToTheResults);

  return results;
};

module.exports = {
  getArnieQuotes,
};
