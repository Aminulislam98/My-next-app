import React from "react";

const iPhones = [
  {
    id: 1,
    name: "iPhone 17",
    chip: "A19",
    display: "6.3-inch Super Retina XDR",
    camera: "Dual camera system",
    price: "£799",
  },
  {
    id: 2,
    name: "iPhone 17 Pro",
    chip: "A19 Pro",
    display: "6.3-inch Super Retina XDR",
    camera: "Triple 48MP camera system",
    price: "£1099",
  },
  {
    id: 3,
    name: "iPhone 17 Pro Max",
    chip: "A19 Pro",
    display: "6.9-inch Super Retina XDR",
    camera: "Triple 48MP + 8x zoom",
    price: "£1199",
  },
  {
    id: 4,
    name: "iPhone 16e",
    chip: "A18 / A16 class",
    display: "6.1-inch OLED",
    camera: "Single / dual basic camera",
    price: "£400 - £600",
  },
];

const ProductDetails = async ({ params }) => {
  const { productId } = await params;
  console.log(productId);
  const phone = iPhones.find((phone) => phone.id === parseInt(productId));
  return (
    <div>
      <h1>{phone.name}</h1>
      <p>{phone.chip}</p>
      <p>{phone.display}</p>
      <p>{phone.camera}</p>
      <p>{phone.price}</p>
    </div>
  );
};

export default ProductDetails;
