import items from './select.data';

const Options = () => {
  return (
    <>
      {items.map(({ title, id }) => (
        <option key={id} value={title}>{title}</option>
      ))}
    </>
  );
};

export default Options;

