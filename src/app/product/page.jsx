import Phone from "@/Components/Phone/Phone";

const Product = () => {
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
  return (
    <section className="w-full px-4">
      <div className="max-w-7xl w-full mx-auto flex flex-col justify-center items-center gap-3 mt-5">
        <h1 className="text-2xl">Here is all lates iPhones </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {iPhones.map((phone) => (
            <Phone key={phone.id} phone={phone}></Phone>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
