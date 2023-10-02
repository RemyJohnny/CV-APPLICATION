/* eslint-disable react/prop-types */
export default function Button({ child, onclick, fill }) {
  return (
    <button onClick={onclick} className="px-5 py-1 rounded border" style={fill}>
      {child}
    </button>
  );
}
