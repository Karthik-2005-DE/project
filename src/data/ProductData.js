import React from 'react'
const ProductData = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 12.99,
    image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?cs=srgb&dl=pexels-vince-2147491.jpg&fm=jpg",
    category: "Pizza",
    description: "Classic Neapolitan pizza topped with fresh tomatoes, mozzarella cheese, and basil for an authentic and delicious treat."
  },
  {
    id: 2,
    name: "Cheeseburger",
    price: 10.99,
    image: "https://images.pexels.com/photos/20722029/pexels-photo-20722029.jpeg?cs=srgb&dl=pexels-k-patel-1100389468-20722029.jpg&fm=jpg",
    category: "Burger",
    description: "Juicy grilled beef patty with melted cheddar, crisp lettuce, and ripe tomato on a toasted sesame bun."
  },
  {
    id: 3,
    name: "Carne Asada Tacos",
    price: 8.99,
    image: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?cs=srgb&dl=pexels-chitokan-2092507.jpg&fm=jpg",
    category: "Tacos",
    description: "Grilled marinated steak tacos topped with fresh cilantro, onions, and a squeeze of lime for zesty flavor."
  },
  {
    id: 4,
    name: "Chocolate Ice Cream",
    price: 5.99,
    image: "https://images.pexels.com/photos/1343504/pexels-photo-1343504.jpeg?cs=srgb&dl=pexels-alisha-mishra-579430-1343504.jpg&fm=jpg",
    category: "Dessert",
    description: "Rich and creamy chocolate ice cream scooped into a bowl and garnished with almonds and mint."
  },
  {
    id: 5,
    name: "Assorted Sushi Platter",
    price: 15.99,
    image: "https://cdn.pixabay.com/photo/2020/03/22/08/43/sushi-4956246_1280.jpg",
    category: "Sushi",
    description: "A variety of fresh sushi rolls with salmon, tuna, and avocado, served with soy sauce and wasabi."
  },
  {
    id: 6,
    name: "Crispy Fried Chicken",
    price: 9.99,
    image: "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?cs=srgb&dl=pexels-pixabay-60616.jpg&fm=jpg",
    category: "Chicken",
    description: "Golden-brown fried chicken pieces with a crunchy exterior and tender, juicy meat inside."
  },
  {
    id: 7,
    name: "Fresh Garden Salad",
    price: 7.99,
    image: "https://images.pexels.com/photos/326281/pexels-photo-326281.jpeg?cs=srgb&dl=pexels-pixabay-326281.jpg&fm=jpg",
    category: "Salad",
    description: "Mix of crisp lettuce, cherry tomatoes, cucumber, carrots, and radishes, tossed in a light vinaigrette."
  },
  {
    id: 8,
    name: "Tonkotsu Ramen",
    price: 12.99,
    image: "https://images.pexels.com/photos/30083616/pexels-photo-30083616.jpeg?cs=srgb&dl=pexels-dbaler-30083616.jpg&fm=jpg",
    category: "Ramen",
    description: "Savory pork broth ramen with tender noodles, soft-boiled egg, sliced chashu pork, and green onions."
  },
  {
    id: 9,
    name: "Spaghetti Bolognese",
    price: 11.99,
    image: "https://images.pexels.com/photos/725990/pexels-photo-725990.jpeg?cs=srgb&dl=pexels-daniela-elena-tentis-118658-725990.jpg&fm=jpg",
    category: "Pasta",
    description: "Classic Italian pasta tossed in a rich tomato and ground beef sauce, topped with parmesan and basil."
  },
  {
    id: 10,
    name: "Chicken Curry",
    price: 10.99,
    image: "https://images.pexels.com/photos/10078268/pexels-photo-10078268.jpeg?cs=srgb&dl=pexels-saveurssecretes-10078268.jpg&fm=jpg",
    category: "Curry",
    description: "Spicy Indian chicken curry cooked in fragrant spices and tomato-based sauce, served with steamed rice."
  },
  {
    id: 11,
    name: "Club Sandwich",
    price: 9.99,
    image: "https://images.pexels.com/photos/33014391/pexels-photo-33014391.jpeg?cs=srgb&dl=pexels-change-c-c-974768353-33014391.jpg&fm=jpg",
    category: "Sandwich",
    description: "Triple-decker sandwich with turkey, ham, bacon, lettuce, tomato, and mayo, served with crispy fries."
  },
  {
    id: 12,
    name: "Assorted Donuts",
    price: 4.99,
    image: "https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?cs=srgb&dl=pexels-mccutcheon-1191639.jpg&fm=jpg",
    category: "Dessert",
    description: "A colorful assortment of glazed and frosted donuts with sprinkles, perfect for a sweet treat."
  },
  {
    id: 13,
    name: "Blackberry Smoothie",
    price: 6.99,
    image: "https://images.pexels.com/photos/434295/pexels-photo-434295.jpeg?cs=srgb&dl=pexels-pixabay-434295.jpg&fm=jpg",
    category: "Drink",
    description: "Refreshing smoothie made with fresh blackberries, yogurt, and honey, served cold with mint garnish."
  },
  {
    id: 14,
    name: "Falafel Wrap",
    price: 8.49,
    image: "https://images.pexels.com/photos/6546029/pexels-photo-6546029.jpeg?cs=srgb&dl=pexels-alesiakozik-6546029.jpg&fm=jpg",
    category: "Wrap",
    description: "Warm pita filled with crispy falafel, lettuce, tomatoes, and creamy tzatziki sauce."
  },
  {
    id: 15,
    name: "Iced Coffee",
    price: 3.99,
    image: "https://images.pexels.com/photos/1193335/pexels-photo-1193335.jpeg?cs=srgb&dl=pexels-chiecharon-1193335.jpg&fm=jpg",
    category: "Drink",
    description: "Cold brewed iced coffee served over ice in a mason jar, perfect for a refreshing caffeine kick."
  }
];



export default ProductData