
const InputWithLabel = ({ label, name, id, type = "text" }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default InputWithLabel;