const Product = () => {
  const data = [
    {
      id: 1,
      name: "Aminur",
      role: "Developer",
    },
    {
      id: 2,
      name: "John",
      role: "Designer",
    },
    {
      id: 3,
      name: "Sara",
      role: "Manager",
    },
    {
      id: 4,
      name: "Alex",
      role: "Tester",
    },
  ];
  return (
    <div>
      <h1>This is Product Section </h1>
      {data.map((d) => (
        <div key={d.id}>
          <h1>{d.name}</h1>
          <p>{d.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
