export const SearchBox = ({ onChange, value }) => {
  return (
    <div>
      <input
        type="text"
        onChange={e => onChange(e.target.value)}
        value={value}
      />
    </div>
  );
};
