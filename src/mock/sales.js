import times from "lodash/times";
import random from "lodash/random";
import faker from "faker";

const items = random(5, 100);
const itemsPerPage = 10;
const pages = Math.ceil(items / itemsPerPage);
const images = {
  thumbnail: faker.image.technics(75, 75),
  medium: faker.image.technics(160, 160)
};

const decrease = number => number - 1;

const increase = number => number + 1;

const paginate = page => page * itemsPerPage;

const getPrice = (...params) => parseFloat(faker.finance.amount(...params));

const getProductName = page =>
  `${faker.commerce.productName()} (page #${page})`;

const results = times(items, index => {
  const page = Math.ceil(increase(index) / itemsPerPage);
  const itemPrice = getPrice(10, 150);
  const profit = getPrice(itemPrice * 0.3, itemPrice * 0.75);

  return {
    item: {
      productName: getProductName(page),
      customName: !!random(0, 1) ? getProductName(page) : "",
      starred: random(0, 1)
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
    asin: faker.random.alphaNumeric(10).toUpperCase(),
    orders: random(1, 50),
    refunds: random(1, 15),
    margin: random(1, 25),
    variations: [],
    itemPrice,
    profit,
    images
  };
});

export const getSales = ({ page = 1, query = "" } = {}) => {
  return {
    meta: {
      pagination: {
        total: pages,
        current: page,
        itemsPerPage
      },
      items,
      query
    },
    results: results.slice(paginate(decrease(page)), paginate(page))
  };
};
