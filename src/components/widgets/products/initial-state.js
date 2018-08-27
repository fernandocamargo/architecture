import {
  Actions as ActionsMessages,
  Generic as GenericMessages
} from "i18n/messages";

export default ({ intl: { formatMessage } }) => ({
  menu: [
    { url: "", title: formatMessage(ActionsMessages.export) },
    { url: "", title: formatMessage(GenericMessages.settings) }
  ]
});
