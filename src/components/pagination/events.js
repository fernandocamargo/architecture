export const move = ({ current, total, onPaginate }) => direction => event => {
  const target = current + direction;
  const page = Math.min(Math.max(target, 1), total);

  event.preventDefault();
  onPaginate({ page });
};
