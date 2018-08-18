export const onClick = ({ goTo }) => event => {
  const {
    target: { href }
  } = event;

  event.preventDefault();
  goTo(href);
};
