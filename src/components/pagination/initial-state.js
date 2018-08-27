import { Pagination as PaginationMessages } from "i18n/messages";

export default ({ intl: { formatMessage }, move }) => ({
  menu: [
    { title: formatMessage(PaginationMessages.previous), url: move(-1) },
    { title: formatMessage(PaginationMessages.next), url: move(+1) }
  ]
});
