import times from "lodash/times";
import random from "lodash/random";
import compact from "lodash/compact";
import faker from "faker";

const itemsPerPage = 10;
const size = random(5, 100);

const decrease = number => number - 1;

const increase = number => number + 1;

const paginate = page => page * itemsPerPage;

const getPrice = (...params) => parseFloat(faker.finance.amount(...params));

const getProductName = page =>
  `${faker.commerce.productName()} (page #${page})`;

const find = criteria => ({
  in: collection =>
    !criteria ||
    !!compact(
      collection.map(
        value =>
          !!~String(value)
            .toLowerCase()
            .indexOf(criteria.toLowerCase())
      )
    ).length
});

const resource = times(size, index => {
  const page = Math.ceil(increase(index) / itemsPerPage);
  const itemPrice = getPrice(10, 150);
  const profit = getPrice(itemPrice * 0.3, itemPrice * 0.75);

  return {
    item: {
      productName: getProductName(page),
      customName: !!random(0, 1) ? getProductName(page) : "",
      starred: random(0, 1)
    },
    foo: {
      bar: 1234
    },
    pk: {
      sku: faker.random
        .uuid()
        .substr(6, 12)
        .toUpperCase()
    },
    links: {
      amazon: faker.internet.url(),
      sellerCentral: faker.internet.url()
    },
    images: {
      thumbnail: `https://placeimg.com/75/75/tech?${random()}`,
      medium: `https://placeimg.com/160/160/tech?${random()}`
    },
    asin: faker.random.alphaNumeric(10).toUpperCase(),
    orders: random(1, 50),
    refunds: random(1, 15),
    margin: random(1, 25),
    variations: [],
    itemPrice,
    profit
  };
});

export const getSales = ({ page = 1, query = "" } = {}) => {
  const results = resource.filter(
    ({ item: { productName, customName }, pk: { sku }, asin }) =>
      find(query).in([productName, customName, sku, asin])
  );

  return {
    meta: {
      pagination: {
        total: Math.ceil(results.length / itemsPerPage),
        current: page,
        itemsPerPage
      },
      query
    },
    results: results.slice(paginate(decrease(page)), paginate(page))
  };
};
