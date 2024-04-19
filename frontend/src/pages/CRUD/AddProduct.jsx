import React, { useState } from "react";
import apiInstance from "@/services/apiService";

function AddProductForm() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImages(selectedFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await apiInstance.uploadImage(images, "multiple");
  };

  return (
    <main className="content">
      <div className="home">
        <form onSubmit={handleSubmit}>
          <label>
            Product Name:
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </label>
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <label>
            Quantity:
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </label>
          <label>
            Category:
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>
          <label>
            Images:
            <input
              type="file"
              multiple
              value={images}
              onChange={(e) => setImages(e.target.value)}
            />
          </label>
          <button type="submit">Add Product</button>
        </form>
      </div>
    </main>
  );
}

export default AddProductForm;
