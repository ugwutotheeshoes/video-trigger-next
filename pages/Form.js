import { useState } from "react";

const form = () => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`${name} said "${review}"`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <label>
          name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Video review:
          <textarea
            type="text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </label>
        <button type="submit"> submit </button>
      </form>
    </div>
  );
};

export default form;
