const shop = [
  {
    title: "Yellow Potatoes Whole Fresh, 5lb Bag",
    image: "./src/images/potates.png",
    newPrice: 0.5,
    oldPrice: 1.99,
    discount: "75%",
    status: "In Stock",
    category: "Baby & Pregnancy",
    brand: "N/A",
  },
  {
    title: "Large Bagged Oranges",
    image: "./src/images/orange.png",
    newPrice: 0.89,
    oldPrice: 1.78,
    discount: "50%",
    status: "In Stock",
    category: "Baby & Pregnancy",
    brand: "N/A",
  },
  {
    title: "Strawberries – 1lb",
    image: "./src/images/strawberry.png",
    newPrice: 1.5,
    oldPrice: 2.16,
    discount: "31%",
    status: "In Stock",
    category: "Baby & Pregnancy",
    brand: "N/A",
  },
  {
    title: "Simple Kitchen FD Sliced Strawberries – 10lb",
    image: "./src/images/sliced-strawberry.png",
    newPrice: 21.9,
    oldPrice: 24.9,
    discount: "13%",
    status: "In Stock",
    category: "Baby & Pregnancy",
    brand: "Simple Kitchen",
  },
  {
    title: "Peach – each",
    image: "./src/images/peach.png",
    newPrice: 0.75,
    oldPrice: 1.75,
    discount: "58%",
    status: "In Stock",
    category: "Baby & Pregnancy",
    brand: "N/A",
  },
  {
    title: "MarketSide Fresh Organic Bananas, Bunch",
    image: "./src/images/banana.png",
    newPrice: 0.89,
    oldPrice: 1.99,
    discount: "56%",
    status: "In Stock",
    category: "Baby & Pregnancy",
    brand: "MarketSide Fresh",
  },
  {
    title: "Large Garden Spinach & Herb Wrap Tortillas",
    image: "./src/images/spinach-wrap.png",
    newPrice: 27.9,
    oldPrice: 32.9,
    discount: "15%",
    status: "In Stock",
    category: "Baby & Pregnancy",
    brand: "N/A",
  },
  {
    title: "Halloween Harvest Caramel Apple Soft Caramels",
    image: "./src/images/caramel.png",
    newPrice: 19.37,
    oldPrice: 31.37,
    discount: "40%",
    status: "In Stock",
    category: "Baby & Pregnancy",
    brand: "N/A",
  },
  {
    title: "Fresh Purple Eggplant",
    image: "./src/images/eggplant.png",
    newPrice: 2.99,
    oldPrice: 3.99,
    discount: "25%",
    status: "In Stock",
    category: "Baby & Pregnancy",
    brand: "N/A",
  },
  {
    title: "Fresh Pomegranate, Each",
    image: "./src/images/pomegranet.png",
    newPrice: 1.5,
    oldPrice: 2.99,
    discount: "50%",
    status: "In Stock",
    category: "Baby & Pregnancy",
    brand: "N/A",
  },
  {
    title: "Pampers Swaddlers Diapers - Size 1",
    image: "https://via.placeholder.com/150/ADD8E6/000000?text=Diapers+Size+1",
    newPrice: 24.99,
    oldPrice: 29.99,
    discount: "17%",
    status: "In Stock",
    category: "Baby & Pregnancy",
    brand: "Pampers",
  },
  {
    title: "Similac Advance Infant Formula - 12.4oz",
    image: "https://via.placeholder.com/150/FFD700/000000?text=Infant+Formula",
    newPrice: 19.99,
    oldPrice: 24.99,
    discount: "20%",
    status: "In Stock",
    category: "Baby & Pregnancy",
    brand: "Similac",
  },
  {
    title: "Huggies Little Snugglers Diapers - Size 2",
    image: "https://via.placeholder.com/150/ADD8E6/000000?text=Diapers+Size+2",
    newPrice: 22.99,
    oldPrice: 27.99,
    discount: "18%",
    status: "In Stock",
    category: "Baby & Pregnancy",
    brand: "Huggies",
  },
  {
    title: "Johnson's Baby Shampoo - 27.1 fl oz",
    image: "https://via.placeholder.com/150/FFD700/000000?text=Baby+Shampoo",
    newPrice: 6.49,
    oldPrice: 7.99,
    discount: "19%",
    status: "In Stock",
    category: "Baby & Pregnancy",
    brand: "Johnson's",
  },
  {
    title: "Gerber Good Start GentlePro Formula - 20oz",
    image:
      "https://via.placeholder.com/150/FFD700/000000?text=GentlePro+Formula",
    newPrice: 26.99,
    oldPrice: 31.99,
    discount: "16%",
    status: "In Stock",
    category: "Baby & Pregnancy",
    brand: "Gerber",
  },
  {
    title: "Aveeno Baby Daily Moisture Lotion - 18oz",
    image: "https://via.placeholder.com/150/FFD700/000000?text=Moisture+Lotion",
    newPrice: 8.99,
    oldPrice: 10.99,
    discount: "18%",
    status: "In Stock",
    category: "Baby & Pregnancy",
    brand: "Aveeno",
  },
  {
    title: "Graco SnugRide 35 Lite Infant Car Seat",
    image: "https://via.placeholder.com/150/ADD8E6/000000?text=Infant+Car+Seat",
    newPrice: 139.99,
    oldPrice: 159.99,
    discount: "13%",
    status: "In Stock",
    category: "Baby & Pregnancy",
    brand: "Graco",
  },
  {
    title: "Babyganics Foaming Hand Sanitizer - 8.45 fl oz",
    image: "https://via.placeholder.com/150/FFD700/000000?text=Hand+Sanitizer",
    newPrice: 4.99,
    oldPrice: 5.99,
    discount: "17%",
    status: "In Stock",
    category: "Baby & Pregnancy",
    brand: "Babyganics",
  },
  {
    title: "Philips Avent Natural Baby Bottle - 9oz, 3-Pack",
    image: "https://via.placeholder.com/150/ADD8E6/000000?text=Baby+Bottle",
    newPrice: 19.99,
    oldPrice: 22.99,
    discount: "13%",
    status: "In Stock",
    category: "Baby & Pregnancy",
    brand: "Philips Avent",
  },
  {
    title: "Desitin Diaper Rash Cream - 16oz",
    image:
      "https://via.placeholder.com/150/FFD700/000000?text=Diaper+Rash+Cream",
    newPrice: 13.99,
    oldPrice: 16.99,
    discount: "18%",
    status: "In Stock",
    category: "Baby & Pregnancy",
    brand: "Desitin",
  },
  {
    title: "Large Bagged Oranges Juice",
    image:
      "https://via.placeholder.com/150/FFA500/FFFFFF?text=Large+Bagged+Oranges+Juice",
    newPrice: 0.89,
    oldPrice: 1.78,
    discount: "50%",
    status: "In Stock",
    category: "Beverages",
    brand: "N/A",
  },
  {
    title: "Fresh Orange Juice - 1L",
    image:
      "https://via.placeholder.com/150/FF8C00/FFFFFF?text=Fresh+Orange+Juice",
    newPrice: 1.99,
    oldPrice: 2.99,
    discount: "33%",
    status: "In Stock",
    category: "Beverages",
    brand: "Fresh",
  },
  {
    title: "Lemonade Fresh Drink - 500ml",
    image:
      "https://via.placeholder.com/150/FFD700/FFFFFF?text=Lemonade+Fresh+Drink",
    newPrice: 1.5,
    oldPrice: 2.5,
    discount: "40%",
    status: "In Stock",
    category: "Beverages",
    brand: "Fresh Squeeze",
  },
  {
    title: "Iced Tea - Peach Flavor",
    image: "https://via.placeholder.com/150/FFB6C1/FFFFFF?text=Iced+Tea+Peach",
    newPrice: 2.2,
    oldPrice: 3.2,
    discount: "31%",
    status: "In Stock",
    category: "Beverages",
    brand: "Chill Tea",
  },
  {
    title: "Sparkling Water - Lemon",
    image: "https://via.placeholder.com/150/FFFFE0/000000?text=Sparkling+Water",
    newPrice: 1.0,
    oldPrice: 1.5,
    discount: "33%",
    status: "In Stock",
    category: "Beverages",
    brand: "Pure Sparkle",
  },
  {
    title: "Coconut Water - 1L",
    image: "https://via.placeholder.com/150/FFE4B5/000000?text=Coconut+Water",
    newPrice: 2.5,
    oldPrice: 3.5,
    discount: "29%",
    status: "In Stock",
    category: "Beverages",
    brand: "Tropical",
  },
  {
    title: "Herbal Tea - Mint",
    image: "https://via.placeholder.com/150/98FB98/000000?text=Herbal+Tea+Mint",
    newPrice: 1.25,
    oldPrice: 2.0,
    discount: "38%",
    status: "In Stock",
    category: "Beverages",
    brand: "Herbal Essence",
  },
  {
    title: "Cold Brew Coffee - 1L",
    image:
      "https://via.placeholder.com/150/6F4C7A/FFFFFF?text=Cold+Brew+Coffee",
    newPrice: 3.99,
    oldPrice: 5.99,
    discount: "33%",
    status: "In Stock",
    category: "Beverages",
    brand: "Brewed Awakenings",
  },
  {
    title: "Fresh Salmon Fillet - 1lb",
    image:
      "https://via.placeholder.com/150/FF6347/FFFFFF?text=Fresh+Salmon+Fillet",
    newPrice: 12.99,
    oldPrice: 15.99,
    discount: "19%",
    status: "In Stock",
    category: "Meats & Seafood",
    brand: "Ocean's Best",
  },
  {
    title: "Organic Chicken Breast - 1lb",
    image:
      "https://via.placeholder.com/150/FFDEAD/000000?text=Organic+Chicken+Breast",
    newPrice: 8.49,
    oldPrice: 10.49,
    discount: "19%",
    status: "In Stock",
    category: "Meats & Seafood",
    brand: "Farm Fresh",
  },
  {
    title: "Beef Tenderloin - 1lb",
    image: "https://via.placeholder.com/150/8B4513/FFFFFF?text=Beef+Tenderloin",
    newPrice: 24.99,
    oldPrice: 29.99,
    discount: "17%",
    status: "In Stock",
    category: "Meats & Seafood",
    brand: "Prime Cuts",
  },
  {
    title: "Shrimp - 1lb",
    image: "https://via.placeholder.com/150/FFD700/000000?text=Shrimp",
    newPrice: 15.99,
    oldPrice: 18.99,
    discount: "16%",
    status: "In Stock",
    category: "Meats & Seafood",
    brand: "Seafood Delight",
  },
  {
    title: "Pork Chops - 1lb",
    image: "https://via.placeholder.com/150/FA8072/000000?text=Pork+Chops",
    newPrice: 9.99,
    oldPrice: 12.99,
    discount: "23%",
    status: "In Stock",
    category: "Meats & Seafood",
    brand: "Butcher's Choice",
  },
  {
    title: "Canned Tuna - 6oz",
    image: "https://via.placeholder.com/150/4682B4/FFFFFF?text=Canned+Tuna",
    newPrice: 2.5,
    oldPrice: 3.5,
    discount: "29%",
    status: "In Stock",
    category: "Meats & Seafood",
    brand: "Ocean Star",
  },
  {
    title: "Ground Beef - 1lb",
    image: "https://via.placeholder.com/150/5C4033/FFFFFF?text=Ground+Beef",
    newPrice: 7.49,
    oldPrice: 9.49,
    discount: "21%",
    status: "In Stock",
    category: "Meats & Seafood",
    brand: "Farm Fresh",
  },
  {
    title: "Lobster Tail - Each",
    image: "https://via.placeholder.com/150/DC143C/FFFFFF?text=Lobster+Tail",
    newPrice: 19.99,
    oldPrice: 24.99,
    discount: "20%",
    status: "In Stock",
    category: "Meats & Seafood",
    brand: "Gourmet Seafood",
  },
  {
    title: "Chocolate Chip Cookies - 12 Pack",
    image:
      "https://via.placeholder.com/150/D2691E/FFFFFF?text=Chocolate+Chip+Cookies",
    newPrice: 3.99,
    oldPrice: 5.99,
    discount: "33%",
    status: "In Stock",
    category: "Biscuits & Snacks",
    brand: "Sweet Treats",
  },
  {
    title: "Salted Pretzels - 8oz",
    image: "https://via.placeholder.com/150/DAA520/000000?text=Salted+Pretzels",
    newPrice: 2.49,
    oldPrice: 3.49,
    discount: "29%",
    status: "In Stock",
    category: "Biscuits & Snacks",
    brand: "Snack Time",
  },
  {
    title: "Assorted Crackers - 10oz",
    image:
      "https://via.placeholder.com/150/F0E68C/000000?text=Assorted+Crackers",
    newPrice: 3.5,
    oldPrice: 4.5,
    discount: "22%",
    status: "In Stock",
    category: "Biscuits & Snacks",
    brand: "Cracker Barrel",
  },
  {
    title: "Cheddar Cheese Snacks - 6oz",
    image:
      "https://via.placeholder.com/150/FF8C00/FFFFFF?text=Cheddar+Cheese+Snacks",
    newPrice: 2.99,
    oldPrice: 3.99,
    discount: "25%",
    status: "In Stock",
    category: "Biscuits & Snacks",
    brand: "Cheesy Delights",
  },
  {
    title: "Oreo Cookies - Family Size",
    image: "https://via.placeholder.com/150/000000/FFFFFF?text=Oreo+Cookies",
    newPrice: 4.99,
    oldPrice: 6.99,
    discount: "29%",
    status: "In Stock",
    category: "Biscuits & Snacks",
    brand: "Oreo",
  },
  {
    title: "Granola Bars - 10 Pack",
    image: "https://via.placeholder.com/150/228B22/FFFFFF?text=Granola+Bars",
    newPrice: 3.49,
    oldPrice: 4.49,
    discount: "22%",
    status: "In Stock",
    category: "Biscuits & Snacks",
    brand: "Nature's Best",
  },
  {
    title: "Potato Chips - 8oz",
    image: "https://via.placeholder.com/150/FF4500/FFFFFF?text=Potato+Chips",
    newPrice: 2.99,
    oldPrice: 3.49,
    discount: "14%",
    status: "In Stock",
    category: "Biscuits & Snacks",
    brand: "Crunchy Snacks",
  },
  {
    title: "Rice Cakes - 6 Pack",
    image: "https://via.placeholder.com/150/FFFACD/000000?text=Rice+Cakes",
    newPrice: 2.49,
    oldPrice: 3.49,
    discount: "29%",
    status: "In Stock",
    category: "Biscuits & Snacks",
    brand: "Healthy Snacking",
  },
  {
    title: "Sourdough Bread - 1lb",
    image: "https://via.placeholder.com/150/DEB887/FFFFFF?text=Sourdough+Bread",
    newPrice: 3.49,
    oldPrice: 4.49,
    discount: "22%",
    status: "In Stock",
    category: "Breads & Bakery",
    brand: "Artisan Breads",
  },
  {
    title: "Whole Wheat Bread - 24oz",
    image:
      "https://via.placeholder.com/150/8B4513/FFFFFF?text=Whole+Wheat+Bread",
    newPrice: 2.99,
    oldPrice: 3.99,
    discount: "25%",
    status: "In Stock",
    category: "Breads & Bakery",
    brand: "Healthy Grains",
  },
  {
    title: "French Baguette - Each",
    image: "https://via.placeholder.com/150/F5DEB3/000000?text=French+Baguette",
    newPrice: 1.99,
    oldPrice: 2.49,
    discount: "20%",
    status: "In Stock",
    category: "Breads & Bakery",
    brand: "Bakery Fresh",
  },
  {
    title: "Chocolate Croissant - 2 Pack",
    image:
      "https://via.placeholder.com/150/FFD700/000000?text=Chocolate+Croissant",
    newPrice: 3.99,
    oldPrice: 5.49,
    discount: "27%",
    status: "In Stock",
    category: "Breads & Bakery",
    brand: "Pastry Delight",
  },
  {
    title: "Bagels - 6 Pack",
    image: "https://via.placeholder.com/150/FF69B4/FFFFFF?text=Bagels",
    newPrice: 2.49,
    oldPrice: 3.49,
    discount: "29%",
    status: "In Stock",
    category: "Breads & Bakery",
    brand: "Breakfast Bakery",
  },
  {
    title: "Cinnamon Rolls - 4 Pack",
    image: "https://via.placeholder.com/150/8B0000/FFFFFF?text=Cinnamon+Rolls",
    newPrice: 4.49,
    oldPrice: 5.99,
    discount: "25%",
    status: "In Stock",
    category: "Breads & Bakery",
    brand: "Sweet Bakery",
  },
  {
    title: "Rye Bread - 1lb",
    image: "https://via.placeholder.com/150/696969/FFFFFF?text=Rye+Bread",
    newPrice: 3.99,
    oldPrice: 4.99,
    discount: "20%",
    status: "In Stock",
    category: "Breads & Bakery",
    brand: "Traditional Breads",
  },
  {
    title: "Focaccia Bread - Each",
    image: "https://via.placeholder.com/150/FFDAB9/000000?text=Focaccia+Bread",
    newPrice: 2.99,
    oldPrice: 3.99,
    discount: "25%",
    status: "In Stock",
    category: "Breads & Bakery",
    brand: "Italian Breads",
  },
  {
    title: "Oatmeal - Maple & Brown Sugar",
    image: "https://via.placeholder.com/150/F5F5DC/000000?text=Oatmeal",
    newPrice: 2.99,
    oldPrice: 3.49,
    discount: "14%",
    status: "In Stock",
    category: "Breakfast & Dairy",
    brand: "Healthy Start",
  },
  {
    title: "Greek Yogurt - Vanilla Flavor",
    image: "https://via.placeholder.com/150/FFF8DC/000000?text=Greek+Yogurt",
    newPrice: 1.99,
    oldPrice: 2.49,
    discount: "20%",
    status: "In Stock",
    category: "Breakfast & Dairy",
    brand: "Creamy Goodness",
  },
  {
    title: "Whole Milk - 1 Gallon",
    image: "https://via.placeholder.com/150/FFFACD/000000?text=Whole+Milk",
    newPrice: 3.49,
    oldPrice: 4.49,
    discount: "22%",
    status: "In Stock",
    category: "Breakfast & Dairy",
    brand: "Dairy Fresh",
  },
  {
    title: "Cheddar Cheese - Block",
    image: "https://via.placeholder.com/150/FFD700/000000?text=Cheddar+Cheese",
    newPrice: 4.99,
    oldPrice: 5.99,
    discount: "17%",
    status: "In Stock",
    category: "Breakfast & Dairy",
    brand: "Cheese Lovers",
  },
  {
    title: "Scrambled Eggs - 12 Pack",
    image: "https://via.placeholder.com/150/FFF0F5/000000?text=Scrambled+Eggs",
    newPrice: 3.99,
    oldPrice: 4.99,
    discount: "20%",
    status: "In Stock",
    category: "Breakfast & Dairy",
    brand: "Farm Fresh",
  },
  {
    title: "Granola Cereal - Honey Almond",
    image: "https://via.placeholder.com/150/E6E6FA/000000?text=Granola+Cereal",
    newPrice: 3.49,
    oldPrice: 4.49,
    discount: "22%",
    status: "In Stock",
    category: "Breakfast & Dairy",
    brand: "Morning Crunch",
  },
  {
    title: "Butter - Salted",
    image: "https://via.placeholder.com/150/FFF8DC/000000?text=Salted+Butter",
    newPrice: 2.49,
    oldPrice: 3.49,
    discount: "29%",
    status: "In Stock",
    category: "Breakfast & Dairy",
    brand: "Dairy Delight",
  },
  {
    title: "Breakfast Sausage - 1lb",
    image:
      "https://via.placeholder.com/150/8B4513/FFFFFF?text=Breakfast+Sausage",
    newPrice: 4.99,
    oldPrice: 5.99,
    discount: "17%",
    status: "In Stock",
    category: "Breakfast & Dairy",
    brand: "Morning Star",
  },
  {
    title: "Frozen Broccoli Florets - 16oz",
    image: "https://via.placeholder.com/150/98FB98/000000?text=Frozen+Broccoli",
    newPrice: 2.49,
    oldPrice: 3.49,
    discount: "29%",
    status: "In Stock",
    category: "Frozen Foods",
    brand: "Fresh & Frozen",
  },
  {
    title: "Frozen Pizza - Pepperoni",
    image: "https://via.placeholder.com/150/DC143C/FFFFFF?text=Frozen+Pizza",
    newPrice: 8.99,
    oldPrice: 10.49,
    discount: "14%",
    status: "In Stock",
    category: "Frozen Foods",
    brand: "Pizza Palace",
  },
  {
    title: "Ice Cream - Cookies & Cream",
    image: "https://via.placeholder.com/150/FFF8DC/000000?text=Ice+Cream",
    newPrice: 4.99,
    oldPrice: 6.49,
    discount: "23%",
    status: "In Stock",
    category: "Frozen Foods",
    brand: "Sweet Treats",
  },
  {
    title: "Frozen Chicken Nuggets - 24oz",
    image: "https://via.placeholder.com/150/FFD700/000000?text=Chicken+Nuggets",
    newPrice: 6.99,
    oldPrice: 8.49,
    discount: "17%",
    status: "In Stock",
    category: "Frozen Foods",
    brand: "Nugget Delight",
  },
  {
    title: "Frozen Mixed Vegetables - 16oz",
    image:
      "https://via.placeholder.com/150/FFDAB9/000000?text=Mixed+Vegetables",
    newPrice: 2.99,
    oldPrice: 3.99,
    discount: "25%",
    status: "In Stock",
    category: "Frozen Foods",
    brand: "Farm Fresh",
  },
  {
    title: "Frozen Fries - 28oz",
    image: "https://via.placeholder.com/150/F0E68C/000000?text=Frozen+Fries",
    newPrice: 3.49,
    oldPrice: 4.49,
    discount: "22%",
    status: "In Stock",
    category: "Frozen Foods",
    brand: "Crispy Treats",
  },
  {
    title: "Frozen Burritos - 8 Pack",
    image: "https://via.placeholder.com/150/FF4500/FFFFFF?text=Frozen+Burritos",
    newPrice: 7.49,
    oldPrice: 9.49,
    discount: "21%",
    status: "In Stock",
    category: "Frozen Foods",
    brand: "Burrito Express",
  },
  {
    title: "Frozen Salmon - 1lb",
    image: "https://via.placeholder.com/150/20B2AA/FFFFFF?text=Frozen+Salmon",
    newPrice: 12.99,
    oldPrice: 15.99,
    discount: "19%",
    status: "In Stock",
    category: "Frozen Foods",
    brand: "Seafood Delights",
  },
  {
    title: "Organic Brown Rice - 2lb",
    image: "https://via.placeholder.com/150/D2B48C/000000?text=Brown+Rice",
    newPrice: 3.49,
    oldPrice: 4.49,
    discount: "22%",
    status: "In Stock",
    category: "Grocery & Staples",
    brand: "Healthy Grains",
  },
  {
    title: "Pasta - Spaghetti - 16oz",
    image: "https://via.placeholder.com/150/FFD700/000000?text=Spaghetti",
    newPrice: 1.99,
    oldPrice: 2.49,
    discount: "20%",
    status: "In Stock",
    category: "Grocery & Staples",
    brand: "Pasta Perfect",
  },
  {
    title: "All-Purpose Flour - 5lb",
    image:
      "https://via.placeholder.com/150/F5DEB3/000000?text=All-Purpose+Flour",
    newPrice: 4.99,
    oldPrice: 5.99,
    discount: "17%",
    status: "In Stock",
    category: "Grocery & Staples",
    brand: "Baker's Best",
  },
  {
    title: "Granulated Sugar - 4lb",
    image:
      "https://via.placeholder.com/150/FFB6C1/000000?text=Granulated+Sugar",
    newPrice: 3.29,
    oldPrice: 4.29,
    discount: "23%",
    status: "In Stock",
    category: "Grocery & Staples",
    brand: "Sweet Harvest",
  },
  {
    title: "Canned Tomatoes - 14.5oz",
    image: "https://via.placeholder.com/150/CD5C5C/FFFFFF?text=Canned+Tomatoes",
    newPrice: 1.49,
    oldPrice: 1.99,
    discount: "25%",
    status: "In Stock",
    category: "Grocery & Staples",
    brand: "Garden Fresh",
  },
  {
    title: "Peanut Butter - 16oz",
    image: "https://via.placeholder.com/150/F4A460/FFFFFF?text=Peanut+Butter",
    newPrice: 2.99,
    oldPrice: 3.49,
    discount: "14%",
    status: "In Stock",
    category: "Grocery & Staples",
    brand: "Nutty Delights",
  },
  {
    title: "Soy Sauce - 15oz",
    image: "https://via.placeholder.com/150/8B4513/FFFFFF?text=Soy+Sauce",
    newPrice: 2.29,
    oldPrice: 2.99,
    discount: "23%",
    status: "In Stock",
    category: "Grocery & Staples",
    brand: "Asian Pantry",
  },
  {
    title: "Olive Oil - 16oz",
    image: "https://via.placeholder.com/150/DAA520/000000?text=Olive+Oil",
    newPrice: 6.99,
    oldPrice: 8.49,
    discount: "17%",
    status: "In Stock",
    category: "Grocery & Staples",
    brand: "Mediterranean Essentials",
  },
  {
    title: "Vitamin C 1000mg - 60 Tablets",
    image: "https://via.placeholder.com/150/FF6347/FFFFFF?text=Vitamin+C",
    newPrice: 9.99,
    oldPrice: 12.99,
    discount: "23%",
    status: "In Stock",
    category: "Healthcare",
    brand: "Wellness Essentials",
  },
  {
    title: "Fish Oil Omega-3 - 120 Softgels",
    image: "https://via.placeholder.com/150/FFD700/000000?text=Fish+Oil",
    newPrice: 14.99,
    oldPrice: 17.99,
    discount: "17%",
    status: "In Stock",
    category: "Healthcare",
    brand: "Oceanic Health",
  },
  {
    title: "Multivitamin for Adults - 90 Gummies",
    image: "https://via.placeholder.com/150/FF4500/FFFFFF?text=Multivitamin",
    newPrice: 11.99,
    oldPrice: 14.99,
    discount: "20%",
    status: "In Stock",
    category: "Healthcare",
    brand: "NutraLife",
  },
  {
    title: "Calcium + Vitamin D - 100 Tablets",
    image:
      "https://via.placeholder.com/150/F5DEB3/000000?text=Calcium+%2B+Vitamin+D",
    newPrice: 8.49,
    oldPrice: 10.49,
    discount: "19%",
    status: "In Stock",
    category: "Healthcare",
    brand: "Bone Health",
  },
  {
    title: "Probiotics - 30 Capsules",
    image: "https://via.placeholder.com/150/3CB371/FFFFFF?text=Probiotics",
    newPrice: 16.99,
    oldPrice: 19.99,
    discount: "15%",
    status: "In Stock",
    category: "Healthcare",
    brand: "Gut Wellness",
  },
  {
    title: "Cough Syrup - 4oz",
    image: "https://via.placeholder.com/150/8B0000/FFFFFF?text=Cough+Syrup",
    newPrice: 5.99,
    oldPrice: 7.49,
    discount: "20%",
    status: "In Stock",
    category: "Healthcare",
    brand: "Relief Remedies",
  },
  {
    title: "First Aid Kit - Complete",
    image: "https://via.placeholder.com/150/FFDAB9/000000?text=First+Aid+Kit",
    newPrice: 19.99,
    oldPrice: 24.99,
    discount: "20%",
    status: "In Stock",
    category: "Healthcare",
    brand: "Safety First",
  },
  {
    title: "Thermometer - Digital",
    image: "https://via.placeholder.com/150/6495ED/FFFFFF?text=Thermometer",
    newPrice: 12.99,
    oldPrice: 15.99,
    discount: "19%",
    status: "In Stock",
    category: "Healthcare",
    brand: "Health Monitor",
  },
  {
    title: "All-Purpose Cleaner - 32oz",
    image:
      "https://via.placeholder.com/150/FFD700/000000?text=All-Purpose+Cleaner",
    newPrice: 4.99,
    oldPrice: 5.99,
    discount: "17%",
    status: "In Stock",
    category: "Household Needs",
    brand: "Clean & Shine",
  },
  {
    title: "Laundry Detergent - 64oz",
    image:
      "https://via.placeholder.com/150/00BFFF/000000?text=Laundry+Detergent",
    newPrice: 9.99,
    oldPrice: 11.99,
    discount: "17%",
    status: "In Stock",
    category: "Household Needs",
    brand: "Fresh Laundry",
  },
  {
    title: "Dish Soap - Lemon Scent - 24oz",
    image: "https://via.placeholder.com/150/FFD700/000000?text=Dish+Soap",
    newPrice: 2.49,
    oldPrice: 3.49,
    discount: "29%",
    status: "In Stock",
    category: "Household Needs",
    brand: "Sparkling Clean",
  },
  {
    title: "Toilet Paper - 12 Rolls",
    image: "https://via.placeholder.com/150/FFFACD/000000?text=Toilet+Paper",
    newPrice: 6.99,
    oldPrice: 8.49,
    discount: "17%",
    status: "In Stock",
    category: "Household Needs",
    brand: "Soft Comfort",
  },
  {
    title: "Paper Towels - 6 Rolls",
    image: "https://via.placeholder.com/150/FFE4E1/000000?text=Paper+Towels",
    newPrice: 4.49,
    oldPrice: 5.49,
    discount: "18%",
    status: "In Stock",
    category: "Household Needs",
    brand: "Quick Absorb",
  },
  {
    title: "Fabric Softener - 64oz",
    image: "https://via.placeholder.com/150/ADD8E6/000000?text=Fabric+Softener",
    newPrice: 7.49,
    oldPrice: 8.99,
    discount: "17%",
    status: "In Stock",
    category: "Household Needs",
    brand: "Soft Touch",
  },
  {
    title: "Broom & Dustpan Set",
    image:
      "https://via.placeholder.com/150/8B4513/FFFFFF?text=Broom+%26+Dustpan",
    newPrice: 12.99,
    oldPrice: 14.99,
    discount: "13%",
    status: "In Stock",
    category: "Household Needs",
    brand: "Cleaning Essentials",
  },
  {
    title: "Trash Bags - 40 Count",
    image: "https://via.placeholder.com/150/696969/FFFFFF?text=Trash+Bags",
    newPrice: 9.99,
    oldPrice: 11.49,
    discount: "13%",
    status: "In Stock",
    category: "Household Needs",
    brand: "Waste Management",
  },
];

const itemsPerPage = 10;
let currentPage = 1;
const filterPriceButton = document.querySelector(".filter-btn");
const minPriceInput = document.querySelector(".min-input");
const maxPriceInput = document.querySelector(".max-input");
const minValue = minPriceInput.value || 0;
const maxValue = maxPriceInput.value || 30;
const productsWrapper = document.querySelector(".shop-products");
const paginationWrapper = document.querySelector("#pagination");



function renderShopProducts(data) {
  productsWrapper.innerHTML = "";
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const productsToDisplay = data.slice(start, end);

  productsToDisplay.forEach((product) => {
    productsWrapper.innerHTML += `
                    <div class="column_card">
                        <div class="card" style="width: 18rem">
                            <div class="card_top">
                                <img src="${product.image}" class="card-img-top" alt="..." />
                                <div class="discount">${product.discount}</div>
                                <i class="bi bi-heart heart"></i>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">${product.title}</h5>
                                <p class="mt-3"><span class="ctg">Category:</span> ${product.category}</p>
                                <div class="price">
                                    <span class="new">$${product.newPrice}</span> <span class="old">$${product.oldPrice}</span>
                                </div>
                                <div class="card_bottom d-flex align-items-center mt-3 gap-3" style="border: none;">
                                    <button class="btn btn-cart addToCart">
                                        <img src="./src/icons/cart.svg" alt="" />
                                    </button>
                                    <h6>In stock</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
  });
}

function renderPagination(totalItems) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  paginationWrapper.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.innerText = i;
    button.className = "btn btn-light";
    button.onclick = () => {
      currentPage = i;
      filterProducts();
    };
    paginationWrapper.appendChild(button);
  }
}

function filterProducts() {
  const checkedCheckboxes = document.querySelectorAll(
    ".form-check-input:checked"
  );
  const selectedCategories = Array.from(checkedCheckboxes).map(
    (cb) => cb.value
  );
  const minPrice = parseFloat(minPriceInput.value);
  const maxPrice = parseFloat(maxPriceInput.value);

  let filteredProducts = shop;
  if (selectedCategories.length) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedCategories.includes(product.category)
    );
  }

  // Price filter
  filteredProducts = filteredProducts.filter(
    (product) => product.newPrice >= minPrice && product.newPrice <= maxPrice
  );

  renderShopProducts(filteredProducts);
  renderPagination(filteredProducts.length);
}

document.querySelectorAll(".form-check-input").forEach((checkbox) => {
  checkbox.addEventListener("change", filterProducts);
});

filterPriceButton.addEventListener("click", filterProducts);

// Initial render
renderShopProducts(shop);
renderPagination(shop.length);
