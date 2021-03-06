import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Sakir",
      email: "tersiters@yandex.com",
      password: bcrypt.hashSync("123456", 8),
      isAdmin: true,
    },
    {
      name: "Michael",
      email: "michael@gmail.com",
      password: bcrypt.hashSync("123456", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "PUMA SEY56",
      category: "Schuhe",
      image: "/images/p1.jpg",
      price: "90,00",
      countInStock: 10,
      brand: "PUMA",
      rating: 4.5,
      numReviews: 10,
      description: "hochwertiges Produkt",
    },
    {
      name: "Converse 65ZU",
      category: "Schuhe",
      image: "/images/p2.jpg",
      price: "80,00",
      countInStock: 100,
      brand: "Converse",
      rating: 3.8,
      numReviews: 20,
      description: "hochwertiges Produkt",
    },
    {
      name: "New Balance 997H",
      category: "Schuhe",
      image: "/images/p3.jpg",
      price: "110,00",
      countInStock: 0,
      brand: "New Balance",
      rating: 4.0,
      numReviews: 12,
      description: "hochwertiges Produkt",
    },
    {
      name: "Adidas",
      category: "Schuhe",
      image: "/images/p4.jpg",
      price: "130,00",
      countInStock: 25,
      brand: "Adidas",
      rating: 4.3,
      numReviews: 21,
      description: "hochwertiges Produkt",
    },
    {
      name: "PUMA 720T",
      category: "Schuhe",
      image: "/images/p5.jpg",
      price: "190,00",
      countInStock: 18,
      brand: "PUMA",
      rating: 4.8,
      numReviews: 8,
      description: "hochwertiges Produkt",
    },
    {
      name: "FILA Damen",
      category: "Schuhe",
      image: "/images/p6.jpg",
      price: "65,00",
      countInStock: 3,
      brand: "FILA",
      rating: 2.1,
      numReviews: 54,
      description: "hochwertiges Produkt",
    },
  ],
};

export default data;
