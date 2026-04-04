import { db } from "../database.js";
import { NewProduct } from "./productTable.js";

const products: NewProduct[] = [
  {
    name: "Outdoor Camping Lantern",
    description:
      "Rechargeable LED lantern ideal for camping and outdoor activities.",
    category: "Outdoor",
    price: 34.99,
  },
  {
    name: "Electric Blanket",
    description: "Extra soft electric blanket with adjustable heat settings.",
    category: "Home",
    price: 59.99,
  },
  {
    name: "Classic Cheesecake Mix",
    description:
      "A simple, no-bake cheesecake mix to create your own delicious cheesecake.",
    category: "Food - Desserts",
    price: 4.99,
  },
  {
    name: "Surimi Crab Sticks",
    description: "Synthetic crab meat sticks, great for salads and sushi.",
    category: "Food - Seafood",
    price: 4.19,
  },
  {
    name: "Pet Hair Removal Roller",
    description:
      "Lint roller designed specifically for removing pet hair from furniture.",
    category: "Pets",
    price: 10.99,
  },
  {
    name: "Sliced Cucumbers",
    description: "Freshly sliced cucumbers, great for salads or snacking.",
    category: "Food - Produce",
    price: 1.29,
  },
  {
    name: "Kids' Learning Tablet",
    description: "Educational tablet designed for preschool-age children.",
    category: "Electronics",
    price: 129.99,
  },
  {
    name: "High-Speed Hand Blender",
    description: "Powerful hand blender for soups and smoothies.",
    category: "Kitchen",
    price: 39.99,
  },
  {
    name: "Honey Graham Crackers",
    description: "Sweet and crunchy honey-flavored graham crackers.",
    category: "Food - Snacks",
    price: 3.29,
  },
  {
    name: "Pumpkin Pie Spice",
    description:
      "A blend of spices that brings the taste of fall to your baked goods.",
    category: "Food - Baking",
    price: 2.99,
  },
  {
    name: "Personalized Keychain",
    description: "Custom keychain with engraved text.",
    category: "Accessories",
    price: 10.99,
  },
  {
    name: "Honey Garlic Chicken",
    description:
      "Tender chicken coated in a sweet and savory honey garlic sauce.",
    category: "Food - Meat",
    price: 8.49,
  },
  {
    name: "Hiking Gaiters",
    description:
      "Protective gaiters to keep dirt and debris out of shoes during hikes.",
    category: "Outdoor",
    price: 29.99,
  },
  {
    name: "Fitness Balance Ball",
    description: "Stability ball for Pilates and yoga workouts.",
    category: "Fitness",
    price: 24.99,
  },
  {
    name: "Smart LED Desk Lamp",
    description: "Adjustable lamp with multiple brightness levels and colors.",
    category: "Office",
    price: 39.99,
  },
  {
    name: "Rice Pilaf Mix",
    description: "Quick and easy rice pilaf mix for side dishes.",
    category: "Food - Grains",
    price: 2.59,
  },
  {
    name: "Children's Educational Puzzle",
    description: "Fun and educational puzzle set for kids.",
    category: "Toys",
    price: 19.99,
  },
  {
    name: "Greek Yogurt Parfait",
    description:
      "Layered Greek yogurt with granola and mixed berries, ready to enjoy.",
    category: "Food - Dairy",
    price: 4.49,
  },
  {
    name: "Pineapple Rings",
    description: "Delicious canned pineapple rings for desserts or salads.",
    category: "Food - Canned Goods",
    price: 2.49,
  },
  {
    name: "Slingback Sandals",
    description: "Chic slingback sandals for a relaxed summer vibe.",
    category: "Clothing - Footwear",
    price: 29.99,
  },
  {
    name: "Garden Tool Belt",
    description: "Handy belt for carrying garden tools while working.",
    category: "Garden",
    price: 22.99,
  },
  {
    name: "Multi-Tool",
    description: "Versatile multi-tool with 15 different functions.",
    category: "Outdoor",
    price: 39.99,
  },
  {
    name: "Camping Tarp",
    description: "Durable tarp for outdoor camping and protection.",
    category: "Outdoor",
    price: 32.99,
  },
  {
    name: "Savory Oatmeal Cups",
    description: "Savory oatmeal ready to eat, great for breakfast or a snack.",
    category: "Food - Breakfast",
    price: 1.99,
  },
  {
    name: "Magnetic Curtain Tiebacks",
    description: "Easy-to-use tiebacks for curtains or drapes.",
    category: "Home",
    price: 12.99,
  },
  {
    name: "Hibiscus Herbal Tea",
    description: "Floral and refreshing herbal tea, great hot or iced.",
    category: "Food - Beverages",
    price: 3.29,
  },
  {
    name: "Black Olives",
    description: "Sliced black olives, perfect for salads and pizzas.",
    category: "Food - Canned Goods",
    price: 1.99,
  },
  {
    name: "Wrap Jumpsuit",
    description:
      "Chic wrap jumpsuit that flatters the body and is perfect for any occasion.",
    category: "Clothing - Jumpsuits",
    price: 54.99,
  },
  {
    name: "Almond Joy Munch Bars",
    description:
      "A delightful mix of chocolate, coconut, and almonds in a snack bar.",
    category: "Food - Snacks",
    price: 1.39,
  },
  {
    name: "Sous Vide Cooker",
    description: "Precision cooker for perfect sous vide cooking.",
    category: "Kitchen",
    price: 79.99,
  },
  {
    name: "Creamy Coleslaw Mix",
    description: "Shredded cabbage and carrots for coleslaw.",
    category: "Food - Produce",
    price: 2.39,
  },
  {
    name: "Home Brewing Starter Kit",
    description: "All-in-one kit for brewing beer at home.",
    category: "Food",
    price: 79.99,
  },
  {
    name: "Teriyaki Chicken Stir-Fry",
    description:
      "Frozen stir-fry mix with chicken, veggies, and teriyaki sauce.",
    category: "Food - Frozen Foods",
    price: 6.99,
  },
  {
    name: "Peanut Butter Chocolate Chip Bars",
    description: "Chewy bars made with peanut butter and chocolate chips.",
    category: "Food - Snacks",
    price: 4.59,
  },
  {
    name: "Himalayan Pink Salt",
    description:
      "Natural mineral salt with a subtle flavor, ideal for cooking and seasoning.",
    category: "Food - Condiments",
    price: 1.99,
  },
  {
    name: "Pressure Washer Accessories Kit",
    description: "Essential attachments for pressure washing.",
    category: "Home Improvement",
    price: 39.99,
  },
  {
    name: "Coconut Rice",
    description: "Fluffy rice cooked with coconut milk for a tropical twist.",
    category: "Food - Frozen",
    price: 2.29,
  },
  {
    name: "Spaghetti Sauce",
    description: "Rich spaghetti sauce, a perfect pasta sauce.",
    category: "Food - Canned Goods",
    price: 2.99,
  },
  {
    name: "Eco-Friendly Notepad",
    description:
      "Notepad made from recycled paper for sustainable note-taking.",
    category: "Office",
    price: 8.99,
  },
  {
    name: "Set of Decorative Storage Bins",
    description: "Colorful bins to keep your space organized.",
    category: "Home",
    price: 34.99,
  },
  {
    name: "Toilet Paper (12 rolls)",
    description: "Soft and strong toilet paper for everyday use.",
    category: "Food - Household",
    price: 8.99,
  },
  {
    name: "Wireless Security Camera",
    description: "1080p wireless security camera with night vision.",
    category: "Home",
    price: 109.99,
  },
  {
    name: "Fashionable Belt Bag",
    description: "Trendy belt bag for hands-free carrying.",
    category: "Accessories",
    price: 34.99,
  },
  {
    name: "Vanilla Almond Granola",
    description:
      "Crunchy granola with almonds and a hint of vanilla, perfect for breakfast.",
    category: "Food - Breakfast",
    price: 4.29,
  },
  {
    name: "Vanilla Ice Cream",
    description: "Creamy and rich vanilla ice cream, a classic dessert.",
    category: "Food - Frozen Foods",
    price: 4.99,
  },
  {
    name: "Wireless Security System",
    description: "Comprehensive camera and alert system for home security.",
    category: "Home Security",
    price: 299.99,
  },
  {
    name: "Samoas Cookie Mix",
    description:
      "Baking mix to create your favorite Samoa-style cookies at home.",
    category: "Food - Baking",
    price: 5.59,
  },
  {
    name: "Almond Flour Cookies",
    description:
      "Delicious cookies made with almond flour for a gluten-free treat.",
    category: "Food - Bakery",
    price: 4.99,
  },
  {
    name: "Sports Windbreaker",
    description: "Lightweight windbreaker for outdoor activities.",
    category: "Clothing - Outerwear",
    price: 44.99,
  },
  {
    name: "Almond Flour Bread Mix",
    description: "Gluten-free bread mix made with almond flour.",
    category: "Food - Baking",
    price: 4.89,
  },
  {
    name: "Bamboo Memory Foam Pillow",
    description: "Ergonomically designed pillow with breathable bamboo cover.",
    category: "Home",
    price: 34.99,
  },
  {
    name: "Portable Pet Stroller",
    description: "Convenient stroller for pets to enjoy outdoor walks.",
    category: "Pets",
    price: 89.99,
  },
  {
    name: "Pesto Pasta Salad",
    description: "Cold pasta salad tossed with pesto and fresh vegetables.",
    category: "Food - Prepared Foods",
    price: 4.99,
  },
  {
    name: "Herb Seasoned Croutons",
    description: "Crunchy croutons with a blend of herbs for salads.",
    category: "Food - Salad Toppings",
    price: 2.99,
  },
  {
    name: "Bluetooth Car Adapter",
    description: "Connect your phone to the car's audio system via Bluetooth.",
    category: "Automotive",
    price: 24.99,
  },
  {
    name: "Coconut Milk Ice Cream",
    description:
      "Dairy-free ice cream made with coconut milk, creamy and delicious.",
    category: "Food - Frozen Desserts",
    price: 6.99,
  },
  {
    name: "Wireless Gaming Headset",
    description:
      "Comfortable headset with surround sound for immersive gaming.",
    category: "Gaming",
    price: 89.99,
  },
  {
    name: "Smartphone Holder for Car",
    description: "Secure phone mount for your vehicle's dashboard.",
    category: "Automotive",
    price: 14.99,
  },
  {
    name: "Watercolor Set",
    description: "Complete watercolor set with paints and brushes.",
    category: "Art Supplies",
    price: 19.99,
  },
  {
    name: "Portable Pet Bathing Tool",
    description: "Handheld sprayer designed for washing pets easily.",
    category: "Pets",
    price: 29.99,
  },
  {
    name: "Home Delivery Food Journal",
    description: "Track your meals and nutrition with this handy food journal.",
    category: "Health",
    price: 14.99,
  },
  {
    name: "Scent Diffuser Oil",
    description: "Essential oil blends for a soothing atmosphere in your home.",
    category: "Home",
    price: 14.99,
  },
  {
    name: "Electric Fondue Pot",
    description: "Set for making fondue at home.",
    category: "Kitchen",
    price: 39.99,
  },
  {
    name: "Tactical Backpack",
    description: "Durable and versatile backpack for outdoor and travel use.",
    category: "Outdoor",
    price: 59.99,
  },
  {
    name: "Photo Album",
    description: "Classic leather photo album for keepsakes.",
    category: "Home",
    price: 24.99,
  },
  {
    name: "Silicone Baking Molds",
    description: "Set of flexible molds for baking cakes and pastries.",
    category: "Kitchen",
    price: 15.99,
  },
  {
    name: "Kettle Corn Popcorn",
    description: "Sweet and salty kettle corn, perfect for snacking.",
    category: "Food - Snacks",
    price: 2.99,
  },
  {
    name: "Heavy-Duty Utility Tote",
    description: "Large, durable tote bag for shopping and outdoor activities.",
    category: "Accessories",
    price: 34.99,
  },
  {
    name: "Self-Watering Planter",
    description: "Planter with self-watering feature for easy plant care.",
    category: "Garden",
    price: 24.99,
  },
  {
    name: "Coconut Chips",
    description: "Crunchy, toasted coconut chips for snacking.",
    category: "Food - Snacks",
    price: 3.59,
  },
  {
    name: "LED Flashing Pet Collar",
    description:
      "Safety collar with flashing lights for pets during night walks.",
    category: "Pets",
    price: 14.99,
  },
  {
    name: "Smartphone Holder for Car",
    description: "Secure phone mount for your vehicle's dashboard.",
    category: "Automotive",
    price: 14.99,
  },
  {
    name: "Kids' Building Blocks",
    description: "Colorful building blocks for creative play.",
    category: "Toys",
    price: 19.99,
  },
  {
    name: "Teriyaki Beef Strips",
    description: "Marinated beef strips in teriyaki sauce for easy grilling.",
    category: "Food - Frozen Meals",
    price: 7.49,
  },
  {
    name: "Asian Stir-Fry Kit",
    description:
      "Prepped vegetables and sauces for a quick Asian stir-fry meal.",
    category: "Food - Frozen Meals",
    price: 5.49,
  },
  {
    name: "Face Mask Set",
    description: "Set of five reusable fabric face masks.",
    category: "Health",
    price: 19.99,
  },
  {
    name: "Protein Pancake Mix",
    description: "A protein-packed pancake mix for a nutritious breakfast.",
    category: "Food - Breakfast",
    price: 3.99,
  },
  {
    name: "Sun-Dried Tomato Pesto",
    description: "A rich pesto made with sun-dried tomatoes and pine nuts.",
    category: "Food - Condiments",
    price: 4.49,
  },
  {
    name: "Honey",
    description: "Pure and natural honey, great for sweetening.",
    category: "Food - Condiments",
    price: 5.49,
  },
  {
    name: "Digital Thermostat",
    description: "Programmable digital thermostat for home heating.",
    category: "Home",
    price: 59.99,
  },
  {
    name: "Insulated Lunch Box",
    description: "Durable lunch box designed to keep food fresh and cool.",
    category: "Kitchen",
    price: 24.99,
  },
  {
    name: "Sunglasses Case",
    description: "Hard-shell case for protecting sunglasses.",
    category: "Accessories",
    price: 15.99,
  },
  {
    name: "Coconut Chia Seed Pudding",
    description:
      "Ready-to-eat chia seed pudding made with coconut milk, perfect for breakfast or dessert.",
    category: "Food - Snacks",
    price: 2.99,
  },
  {
    name: "Heat-Resistant Silicone Mat",
    description: "Protects surfaces while baking or cooking with hot items.",
    category: "Kitchen",
    price: 19.99,
  },
  {
    name: "Customizable Wall Calendar",
    description: "Personalize your calendar with photos and special dates.",
    category: "Office",
    price: 24.99,
  },
  {
    name: "Beef Sirloin Steak",
    description: "Juicy and tender beef sirloin steak, grass-fed.",
    category: "Food - Meat",
    price: 15.99,
  },
  {
    name: "Dog Waste Bag Dispenser",
    description: "Convenient dispenser for dog waste bags on walks.",
    category: "Pets",
    price: 6.99,
  },
  {
    name: "Chicken Salad Kit",
    description: "All-in-one kit for making delicious chicken salad.",
    category: "Food - Prepared Foods",
    price: 5.99,
  },
  {
    name: "Coconut Chia Seed Pudding",
    description:
      "Ready-to-eat chia seed pudding made with coconut milk, perfect for breakfast or dessert.",
    category: "Food - Snacks",
    price: 2.99,
  },
  {
    name: "Vegetable Stock",
    description: "Rich vegetable stock for cooking soups and stews.",
    category: "Food - Cooking Essentials",
    price: 2.49,
  },
  {
    name: "Honey Almond Granola Bars",
    description: "Chewy granola bars made with honey and almonds.",
    category: "Food - Snacks",
    price: 3.99,
  },
  {
    name: "Car Windshield Sun Shade",
    description: "Protects car interior from sun damage and heat.",
    category: "Automotive",
    price: 19.99,
  },
  {
    name: "Sculpting Kit",
    description: "Complete sculpting tools for artists.",
    category: "Art Supplies",
    price: 25.99,
  },
  {
    name: "Garlic and Herb Rub",
    description: "A seasoning blend of garlic and herbs to enhance any dish.",
    category: "Food - Spices",
    price: 2.29,
  },
  {
    name: "Key Finder",
    description: "Bluetooth-enabled key tracker to find lost items easily.",
    category: "Accessories",
    price: 19.99,
  },
  {
    name: "Children's Backpack",
    description: "Stylish and functional backpack for school or trips.",
    category: "Accessories",
    price: 29.99,
  },
  {
    name: "Almond Flour Pizza Crust",
    description: "Low-carb pizza crust made from almond flour, gluten-free.",
    category: "Food - Frozen Foods",
    price: 7.99,
  },
  {
    name: "Pet Food Storage Container",
    description: "Airtight container to keep pet food fresh.",
    category: "Pets",
    price: 24.99,
  },
  {
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with adjustable DPI.",
    category: "Electronics",
    price: 25.99,
  },
  {
    name: "Spicy Thai Coconut Soup",
    description:
      "A ready-to-eat soup with coconut milk, spices, and vegetables.",
    category: "Food - Soups",
    price: 3.99,
  },
  {
    name: "Smart Wi-Fi Camera",
    description: "Indoor Wi-Fi camera for home security.",
    category: "Smart Home",
    price: 89.99,
  },
  {
    name: "Classic Minestrone Soup",
    description: "Hearty minestrone soup loaded with vegetables and pasta.",
    category: "Food - Soups",
    price: 2.99,
  },
  {
    name: "Granola",
    description: "Crunchy and flavorful mix of oats and honey.",
    category: "Food - Breakfast",
    price: 4.79,
  },
  {
    name: "Chickpeas",
    description: "Canned chickpeas, perfect for hummus or salads.",
    category: "Food - Canned Goods",
    price: 1.29,
  },
  {
    name: "Basil Lemonade",
    description: "Refreshing basil-infused lemonade for a cool drink.",
    category: "Food - Beverages",
    price: 2.99,
  },
  {
    name: "Frozen Fruit Medley",
    description:
      "A mix of strawberries, blueberries, and raspberries, perfect for smoothies.",
    category: "Food - Frozen Foods",
    price: 5.99,
  },
  {
    name: "Personal Blender with Cups",
    description: "Compact blender that comes with travel cups for smoothies.",
    category: "Kitchen",
    price: 34.99,
  },
  {
    name: "Quinoa",
    description: "Protein-rich quinoa, a great alternative to rice.",
    category: "Food - Grains",
    price: 4.49,
  },
  {
    name: "Camera Lens Cleaning Kit",
    description: "Complete cleaning kit for camera lenses.",
    category: "Photography",
    price: 14.99,
  },
  {
    name: "Compact Pop-Up Tent",
    description: "Easy setup tent perfect for camping and outdoor festivals.",
    category: "Outdoor",
    price: 69.99,
  },
  {
    name: "Non-Stick Baking Sheets",
    description: "Set of baking sheets for effortless baking.",
    category: "Kitchen",
    price: 29.99,
  },
  {
    name: "Ginger Tea",
    description: "A soothing herbal tea made from ginger root.",
    category: "Food - Beverages",
    price: 4.99,
  },
  {
    name: "Saffron Rice Mix",
    description: "Flavorful rice mix with saffron and spices.",
    category: "Food - Grains",
    price: 2.99,
  },
  {
    name: "Sushi Rice",
    description: "Short-grain sushi rice for perfect rolls.",
    category: "Food - Grains",
    price: 3.99,
  },
  {
    name: "Buffalo Chicken Wraps",
    description: "Savory wraps with buffalo chicken and fresh vegetables.",
    category: "Food - Prepared Meals",
    price: 5.99,
  },
  {
    name: "Vegetable Lasagna",
    description: "Layers of pasta, veggies, and cheese baked to perfection.",
    category: "Food - Frozen Foods",
    price: 6.99,
  },
  {
    name: "Wireless Wi-Fi Extender",
    description: "Boosts your Wi-Fi coverage for better connectivity.",
    category: "Electronics",
    price: 49.99,
  },
  {
    name: "Decorative Throw Blanket",
    description: "Soft throw blanket for cozy home decor.",
    category: "Home",
    price: 39.99,
  },
  {
    name: "Outdoor Adventure Kit",
    description: "Complete outdoor kit for camping and hiking.",
    category: "Outdoor",
    price: 89.99,
  },
  {
    name: "Ginger Snaps",
    description: "Spicy ginger cookies that are crunchy and delicious.",
    category: "Food - Confectionery",
    price: 2.79,
  },
  {
    name: "Wine Glasses",
    description: "Set of elegant wine glasses for special occasions.",
    category: "Home",
    price: 29.99,
  },
  {
    name: "Savory Oats",
    description: "Instant oats with a savory twist, such as herbs and spices.",
    category: "Food - Breakfast",
    price: 2.49,
  },
  {
    name: "Vegan Cheese",
    description: "Dairy-free cheese alternative for your favorite dishes.",
    category: "Food - Dairy Alternatives",
    price: 4.99,
  },
  {
    name: "Fishing Rod",
    description: "Lightweight fishing rod suitable for beginners.",
    category: "Outdoor",
    price: 49.99,
  },
  {
    name: "Pumpkin Spice Cookies",
    description: "Delicious cookies flavored with pumpkin and spices.",
    category: "Food - Bakery",
    price: 3.29,
  },
  {
    name: "Multifunctional Pocket Tool",
    description: "Compact pocket tool with various built-in functions.",
    category: "Tools",
    price: 19.99,
  },
  {
    name: "Reusable Produce Bags Set",
    description: "Eco-friendly mesh bags for shopping produce at the market.",
    category: "Kitchen",
    price: 14.99,
  },
  {
    name: "Cacao Powder",
    description: "Unsweetened cacao powder for baking and smoothies.",
    category: "Food - Baking",
    price: 4.49,
  },
  {
    name: "Mediterranean Chickpea Bowl",
    description:
      "Chickpeas served with olives, feta, and hummus, a healthy meal.",
    category: "Food - Prepared Foods",
    price: 6.49,
  },
  {
    name: "Spicy Vegetable Sushi Rolls",
    description: "Vegan sushi filled with spicy vegetables and avocado.",
    category: "Food - Prepared Foods",
    price: 8.49,
  },
  {
    name: "Maple Bacon Popcorn",
    description: "Savory popcorn flavored with maple syrup and bacon bits.",
    category: "Food - Snacks",
    price: 3.49,
  },
  {
    name: "Gardening Tool Belt",
    description:
      "Convenient belt with pockets for easy access to tools while gardening.",
    category: "Garden",
    price: 22.99,
  },
  {
    name: "Bamboo Memory Foam Pillow",
    description: "Ergonomically designed pillow with breathable bamboo cover.",
    category: "Home",
    price: 34.99,
  },
  {
    name: "Spinach Feta Wraps",
    description: "Whole wheat wraps filled with spinach, feta, and herbs.",
    category: "Food - Deli",
    price: 4.29,
  },
  {
    name: "Vegan Mayonnaise",
    description: "Plant-based mayonnaise for a creamy taste.",
    category: "Food - Condiments",
    price: 4.49,
  },
  {
    name: "Mechanical Pencil Set",
    description: "Precision pencils for drawing, sketching, and writing.",
    category: "Office",
    price: 19.99,
  },
  {
    name: "Pet Carrier",
    description: "Comfortable pet carrier for travel and vet visits.",
    category: "Pets",
    price: 39.99,
  },
  {
    name: "Smashed Avocado with Lime",
    description:
      "A creamy blend of avocados and lime juice, great for spreads or dips.",
    category: "Food - Condiments",
    price: 2.49,
  },
  {
    name: "Body Pillow Case",
    description: "Soft and breathable pillowcase for body pillows.",
    category: "Home",
    price: 14.99,
  },
  {
    name: "Mini Air Hockey Table",
    description: "Fun tabletop air hockey for home or office.",
    category: "Toys",
    price: 39.99,
  },
  {
    name: "Home Office Chair",
    description:
      "Ergonomic office chair with lumbar support and adjustable height.",
    category: "Furniture",
    price: 199.99,
  },
  {
    name: "Electric Rice Cooker with Steamer",
    description:
      "Cook rice and steam vegetables simultaneously for healthy meals.",
    category: "Kitchen",
    price: 49.99,
  },
  {
    name: "Adjustable Bar Stools",
    description:
      "Stylish bar stools with adjustable height and swivel features.",
    category: "Furniture",
    price: 149.99,
  },
  {
    name: "Decorative Throw Blanket",
    description: "Soft throw blanket for cozy home decor.",
    category: "Home",
    price: 39.99,
  },
  {
    name: "Dark Chocolate Bars",
    description: "Rich dark chocolate bars, perfect for a sweet treat.",
    category: "Food - Snacks",
    price: 2.99,
  },
  {
    name: "Pasta (Fusilli)",
    description: "Twisted pasta perfect for salads and pasta dishes.",
    category: "Food - Pasta",
    price: 1.79,
  },
  {
    name: "Vegetarian Stuffed Peppers",
    description:
      "Bell peppers stuffed with rice, beans, and spices, ready to bake.",
    category: "Food - Prepared Foods",
    price: 4.99,
  },
  {
    name: "Tomato Sauce",
    description: "Rich and flavorful tomato sauce for pasta or pizza.",
    category: "Food - Canned Goods",
    price: 2.79,
  },
  {
    name: "Insulated Lunch Box",
    description: "Durable lunch box designed to keep food fresh and cool.",
    category: "Kitchen",
    price: 24.99,
  },
  {
    name: "Pet Water Fountain",
    description: "Automatic water fountain for pets with filtration.",
    category: "Pets",
    price: 39.99,
  },
  {
    name: "Camping Chair with Cooler",
    description: "Foldable chair equipped with a cooler pouch.",
    category: "Outdoor",
    price: 49.99,
  },
  {
    name: "Garlic Breadsticks",
    description: "Ready-to-bake garlic breadsticks, perfect with pasta dishes.",
    category: "Food - Sides",
    price: 3.49,
  },
  {
    name: "Artisan Bread Loaf",
    description: "Fresh artisan bread, perfect for sandwiches",
    category: "Food - Bakery",
    price: 3.99,
  },
  {
    name: "Maple Pecan Oatmeal Cookies",
    description: "Soft oatmeal cookies with maple and pecans.",
    category: "Food - Bakery",
    price: 3.99,
  },
  {
    name: "Adjustable Pet Grooming Table",
    description: "Professional grooming table with adjustable height.",
    category: "Pets",
    price: 109.99,
  },
  {
    name: "Digital Kitchen Timer",
    description: "Easy-to-read digital kitchen timer with alarms.",
    category: "Kitchen",
    price: 14.99,
  },
  {
    name: "Honey Butter Popcorn",
    description: "Light and fluffy popcorn coated in sweet honey butter.",
    category: "Food - Snacks",
    price: 2.99,
  },
  {
    name: "Avocados",
    description: "Fresh, creamy avocados ideal for salads and guacamole.",
    category: "Food - Produce",
    price: 1.5,
  },
  {
    name: "Himalayan Pink Salt",
    description:
      "Natural mineral salt with a subtle flavor, ideal for cooking and seasoning.",
    category: "Food - Condiments",
    price: 1.99,
  },
  {
    name: "Blueberry Muffin Mix",
    description:
      "Make delightful blueberry muffins at home with this easy mix.",
    category: "Food - Baking",
    price: 4.29,
  },
  {
    name: "Rice Noodles",
    description: "Thin rice noodles, ideal for stir-fries and soups.",
    category: "Food - Grains",
    price: 3.49,
  },
  {
    name: "Baked Potato Chips",
    description: "Light and crispy baked chips, a healthier snack option.",
    category: "Food - Snacks",
    price: 2.49,
  },
  {
    name: "Garlic Breadsticks",
    description: "Ready-to-bake garlic breadsticks, perfect with pasta dishes.",
    category: "Food - Sides",
    price: 3.49,
  },
  {
    name: "Crafting Kit",
    description: "Complete crafting kit for kids and adults.",
    category: "Art Supplies",
    price: 29.99,
  },
  {
    name: "Wooden Puzzle Game",
    description: "Classic wooden puzzle game for kids and adults.",
    category: "Toys",
    price: 14.99,
  },
  {
    name: "Electric Food Steamer",
    description: "Electric food steamer for healthy cooking.",
    category: "Kitchen",
    price: 59.99,
  },
  {
    name: "Self-Cleaning Cat Litter Box",
    description: "Automated litter box that cleans itself after each use.",
    category: "Pets",
    price: 199.99,
  },
  {
    name: "Silicone Cooking Utensils Set",
    description: "Non-stick and heat-resistant utensils for cooking.",
    category: "Kitchen",
    price: 34.99,
  },
  {
    name: "Nut Mix",
    description: "A blend of mixed nuts for snacking.",
    category: "Food - Snacks",
    price: 5.99,
  },
  {
    name: "Italian Meatballs",
    description:
      "Juicy meatballs made with a blend of beef and pork, seasoned with Italian herbs.",
    category: "Food - Meat",
    price: 8.49,
  },
  {
    name: "Pepper Jack Cheese Sticks",
    description:
      "A spicy, flavorful cheese stick great for snacks or lunchboxes.",
    category: "Food - Snacks",
    price: 2.49,
  },
  {
    name: "Electric Food Slicer",
    description: "Versatile slicer for meats, cheeses, and vegetables.",
    category: "Kitchen",
    price: 99.99,
  },
  {
    name: "Glass Water Bottle",
    description: "Borosilicate glass water bottle with silicone sleeve.",
    category: "Fitness",
    price: 25.99,
  },
  {
    name: "Almond Milk Yogurt",
    description: "Creamy yogurt made from almond milk, vegan-friendly.",
    category: "Food - Dairy Alternatives",
    price: 1.99,
  },
  {
    name: "High-Waisted Skirt",
    description:
      "Chic high-waisted skirt, perfect for professional or casual settings.",
    category: "Clothing - Bottoms",
    price: 34.99,
  },
  {
    name: "Portable Laptop Table",
    description: "Foldable table for working with laptops anywhere.",
    category: "Office",
    price: 39.99,
  },
  {
    name: "Mechanical Pencil Set",
    description: "Precision pencils for drawing, sketching, and writing.",
    category: "Office",
    price: 19.99,
  },
  {
    name: "Tuscan Bean Soup",
    description: "A hearty mix of beans in a flavorful tomato broth.",
    category: "Food - Canned Goods",
    price: 2.49,
  },
  {
    name: "Outdoor Folding Table",
    description:
      "Lightweight and portable folding table for camping or picnics.",
    category: "Outdoor",
    price: 39.99,
  },
  {
    name: "Comfy Slippers",
    description: "Soft and cozy slippers for indoor wear.",
    category: "Footwear",
    price: 29.99,
  },
  {
    name: "Roasted Chickpeas",
    description: "Crispy roasted chickpeas seasoned to perfection",
    category: "Food - Snacks",
    price: 2.99,
  },
  {
    name: "Plant Watering Spikes",
    description: "Automatic watering devices for potted plants.",
    category: "Garden",
    price: 12.99,
  },
  {
    name: "Oven-Baked Sweet Potato Fries",
    description:
      "Crispy sweet potato fries, perfectly seasoned and baked to perfection.",
    category: "Food - Frozen Foods",
    price: 3.99,
  },
  {
    name: "Foam Building Blocks for Kids",
    description: "Soft foam blocks perfect for building and imaginative play.",
    category: "Toys",
    price: 22.99,
  },
  {
    name: "Survival Gear Kit",
    description: "Essential survival gear kit for emergencies.",
    category: "Outdoor",
    price: 59.99,
  },
  {
    name: "Gluten-Free Brownies",
    description: "Decadent brownies made without gluten, rich and chocolatey.",
    category: "Food - Baking",
    price: 4.99,
  },
  {
    name: "Bluetooth Tracker",
    description: "Smart tracker to locate keys or other items via app.",
    category: "Accessories",
    price: 19.99,
  },
  {
    name: "Smoked Paprika",
    description: "Add a smoky flavor to your dishes.",
    category: "Food - Spices",
    price: 2.99,
  },
  {
    name: "Knitted Infinity Scarf",
    description: "A warm knitted scarf to keep you cozy in winter.",
    category: "Clothing - Accessories",
    price: 29.99,
  },
  {
    name: "Solar Power Bank",
    description: "Eco-friendly power bank that charges via sunlight.",
    category: "Electronics",
    price: 39.99,
  },
  {
    name: "Italian Herb Balsamic Marinade",
    description:
      "A rich marinade perfect for meats and vegetables, infused with Italian herbs and balsamic vinegar.",
    category: "Food - Condiments",
    price: 3.99,
  },
  {
    name: "Veggie Burger Patties",
    description: "Delicious veggie burger patties for grilling or frying.",
    category: "Food - Meat Substitutes",
    price: 5.99,
  },
  {
    name: "Pet Safety Harness",
    description: "Comfortable harness designed to keep pets safe in the car.",
    category: "Pets",
    price: 24.99,
  },
  {
    name: "Noise-Canceling Earbuds",
    description: "Wireless earbuds designed for immersive sound experience.",
    category: "Audio",
    price: 79.99,
  },
  {
    name: "DIY Lip Balm Making Kit",
    description: "Complete kit to make your own flavored lip balms at home.",
    category: "Crafts",
    price: 22.99,
  },
  {
    name: "Personalized Pet ID Tags",
    description:
      "Custom engraved ID tags for pets with your contact information.",
    category: "Pets",
    price: 9.99,
  },
  {
    name: "Banana Chips",
    description: "Crunchy and sweet banana chips, a great on-the-go snack.",
    category: "Food - Snacks",
    price: 1.99,
  },
  {
    name: "Savory Italian Herbs",
    description: "A blend of dried Italian herbs for cooking.",
    category: "Food - Spices",
    price: 2.99,
  },
  {
    name: "Pumpkin Spice Cookies",
    description: "Delicious cookies flavored with pumpkin and spices.",
    category: "Food - Bakery",
    price: 3.29,
  },
  {
    name: "Slim Fit Chinos",
    description: "Comfortable slim fit chinos for a polished look.",
    category: "Clothing - Pants",
    price: 54.99,
  },
];

export const loadProducts = async () => {
  const categories = new Set<string>();

  for (const product of products) {
    categories.add(product.category);
  }

  await db.deleteFrom("category").execute();

  for (const category of categories) {
    db.insertInto("category")
      .values({ category: category })
      .onConflict((oc) => oc.doNothing())
      .execute();
  }

  await db.deleteFrom("product").execute();

  for (const product of products) {
    db.insertInto("product")
      .values(product)
      .onConflict((oc) => oc.doNothing())
      .execute();
  }
};
