// src/components/Menu.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { 
  ShoppingCart, 
  Plus, 
  Filter, 
  X, 
  ChevronDown, 
  ChevronUp, 
  Search,
  Star,
  Clock,
  Heart,
  Eye,
  Sparkles,
  TrendingUp
} from 'lucide-react';

export default function Menu() {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [showMore, setShowMore] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name'); // name, price-low, price-high, popularity
  const [favorites, setFavorites] = useState(new Set());
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickView, setShowQuickView] = useState(null);
  
  // Animation states
  const [animatedItems, setAnimatedItems] = useState(new Set());
  
  useEffect(() => {
    // Animate items on mount
    const timer = setTimeout(() => {
      setAnimatedItems(new Set(menuItems.map(item => item.id)));
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  const menuItems = [
    // Burgers
    {
      id: 1,
      name: "Signature Beef Burger",
      price: "$12.99",
      category: "Burgers",
      description: "Premium Angus beef with truffle aioli, aged cheddar, caramelized onions, and arugula on brioche bun",
      imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      popular: true,
      isNew: false,
      rating: 4.8,
      prepTime: "12-15 mins",
      calories: 650,
      spicyLevel: 1
    },
    {
      id: 2,
      name: "Gourmet Cheese Deluxe",
      price: "$13.99",
      category: "Burgers",
      description: "Triple cheese blend with wagyu beef, crispy bacon, and house-made pickles",
      imageUrl: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=400&h=300&fit=crop",
      popular: true,
      isNew: false,
      rating: 4.9,
      prepTime: "10-12 mins",
      calories: 720,
      spicyLevel: 0
    },
    {
      id: 3,
      name: "Smoky BBQ Ranch",
      price: "$14.49",
      category: "Burgers", 
      description: "Smoked beef patty with BBQ glaze, crispy onion rings, ranch, and smoked bacon",
      imageUrl: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=400&h=300&fit=crop",
      popular: false,
      isNew: true,
      rating: 4.7,
      prepTime: "15-18 mins",
      calories: 680,
      spicyLevel: 2
    },
    {
      id: 4,
      name: "Double Stack Monster",
      price: "$16.99",
      category: "Burgers",
      description: "Two premium beef patties, double cheese, bacon, lettuce, tomato, and special sauce",
      imageUrl: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop",
      popular: true,
      isNew: false,
      rating: 4.8,
      prepTime: "18-20 mins",
      calories: 890,
      spicyLevel: 1
    },
    {
      id: 5,
      name: "Garden Veggie Supreme",
      price: "$11.99",
      category: "Burgers",
      description: "House-made quinoa and black bean patty with avocado, sprouts, and tahini sauce",
      imageUrl: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&h=300&fit=crop",
      popular: false,
      isNew: true,
      rating: 4.5,
      prepTime: "10-12 mins",
      calories: 420,
      spicyLevel: 0
    },
    {
      id: 6,
      name: "Truffle Mushroom Elite",
      price: "$15.49",
      category: "Burgers",
      description: "Wagyu beef with truffle mushrooms, Swiss cheese, and garlic aioli",
      imageUrl: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
      popular: false,
      isNew: false,
      rating: 4.6,
      prepTime: "16-18 mins",
      calories: 710,
      spicyLevel: 0
    },
    {
      id: 7,
      name: "Spicy Jalapeño Heat",
      price: "$13.49",
      category: "Burgers",
      description: "Spicy beef patty with jalapeños, pepper jack cheese, and chipotle mayo",
      imageUrl: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=400&h=300&fit=crop",
      popular: false,
      isNew: false,
      rating: 4.4,
      prepTime: "12-15 mins",
      calories: 640,
      spicyLevel: 4
    },
    {
      id: 8,
      name: "Mediterranean Lamb",
      price: "$17.99",
      category: "Burgers",
      description: "Lamb patty with feta, olives, cucumber, tomato, and tzatziki on pita bread",
      imageUrl: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=300&fit=crop",
      popular: false,
      isNew: true,
      rating: 4.7,
      prepTime: "18-20 mins",
      calories: 580,
      spicyLevel: 1
    },
    {
      id: 25,
      name: "Hawaiian Paradise",
      price: "$14.99",
      category: "Burgers",
      description: "Grilled pineapple, ham, teriyaki glaze, and coconut mayo on toasted brioche",
      imageUrl: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=400&h=300&fit=crop",
      popular: false,
      isNew: false,
      rating: 4.3,
      prepTime: "14-16 mins",
      calories: 620,
      spicyLevel: 0
    },
    {
      id: 26,
      name: "Texas Smokehouse",
      price: "$15.99",
      category: "Burgers",
      description: "Brisket and beef blend with smoked cheddar, BBQ sauce, and crispy shallots",
      imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      popular: true,
      isNew: false,
      rating: 4.8,
      prepTime: "16-18 mins",
      calories: 750,
      spicyLevel: 2
    },
    {
      id: 27,
      name: "Black Truffle Luxury",
      price: "$22.99",
      category: "Burgers",
      description: "Premium wagyu with black truffle, foie gras, and aged gruyere on artisan bun",
      imageUrl: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop",
      popular: false,
      isNew: true,
      rating: 4.9,
      prepTime: "20-25 mins",
      calories: 890,
      spicyLevel: 0
    },
    {
      id: 28,
      name: "Breakfast Brunch Burger",
      price: "$16.49",
      category: "Burgers",
      description: "Beef patty with fried egg, bacon, hash browns, hollandaise, and chives",
      imageUrl: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=400&h=300&fit=crop",
      popular: false,
      isNew: false,
      rating: 4.6,
      prepTime: "18-20 mins",
      calories: 820,
      spicyLevel: 0
    },
    
    // Chicken Items
    {
      id: 9,
      name: "Nashville Hot Chicken",
      price: "$13.99",
      category: "Chicken",
      description: "Crispy fried chicken with Nashville hot seasoning, pickles, and cooling ranch",
      imageUrl: "https://images.unsplash.com/photo-1513185158878-8d064c2de2a2?w=400&h=300&fit=crop",
      popular: true,
      isNew: false,
      rating: 4.7,
      prepTime: "15-18 mins",
      calories: 680,
      spicyLevel: 5
    },
    {
      id: 10,
      name: "Herb-Crusted Chicken",
      price: "$12.99",
      category: "Chicken",
      description: "Grilled chicken breast with Mediterranean herbs, lemon, and tzatziki",
      imageUrl: "https://images.unsplash.com/photo-1606755962773-d324e9a13086?w=400&h=300&fit=crop",
      popular: false,
      isNew: false,
      rating: 4.5,
      prepTime: "12-15 mins",
      calories: 450,
      spicyLevel: 0
    },
    {
      id: 11,
      name: "Buffalo Chicken Deluxe",
      price: "$11.99",
      category: "Chicken",
      description: "Spicy buffalo chicken with blue cheese, celery slaw, and hot sauce drizzle",
      imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      popular: false,
      isNew: false,
      rating: 4.4,
      prepTime: "10-12 mins",
      calories: 520,
      spicyLevel: 4
    },
    {
      id: 12,
      name: "Gourmet Chicken Tenders",
      price: "$9.99",
      category: "Chicken",
      description: "Hand-breaded premium chicken tenders with signature dipping sauces (6 pieces)",
      imageUrl: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop",
      popular: true,
      isNew: false,
      rating: 4.6,
      prepTime: "8-10 mins",
      calories: 480,
      spicyLevel: 1
    },
    {
      id: 29,
      name: "Korean BBQ Wings",
      price: "$14.99",
      category: "Chicken",
      description: "Crispy wings with Korean BBQ glaze, sesame seeds, and green onions (12 pieces)",
      imageUrl: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop",
      popular: true,
      isNew: true,
      rating: 4.8,
      prepTime: "15-18 mins",
      calories: 720,
      spicyLevel: 3
    },
    {
      id: 30,
      name: "Chicken Caesar Supreme",
      price: "$13.49",
      category: "Chicken",
      description: "Grilled chicken with romaine, parmesan, croutons, and house caesar dressing",
      imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      popular: false,
      isNew: false,
      rating: 4.3,
      prepTime: "8-10 mins",
      calories: 420,
      spicyLevel: 0
    },
    {
      id: 31,
      name: "Chicken Tikka Flatbread",
      price: "$15.99",
      category: "Chicken",
      description: "Naan flatbread with tikka chicken, red onions, cilantro, and mint yogurt",
      imageUrl: "https://images.unsplash.com/photo-1513185158878-8d064c2de2a2?w=400&h=300&fit=crop",
      popular: false,
      isNew: true,
      rating: 4.5,
      prepTime: "12-15 mins",
      calories: 580,
      spicyLevel: 3
    },
    {
      id: 32,
      name: "Honey Garlic Chicken",
      price: "$11.49",
      category: "Chicken",
      description: "Crispy chicken with honey garlic glaze, sesame seeds, and steamed vegetables",
      imageUrl: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop",
      popular: false,
      isNew: false,
      rating: 4.4,
      prepTime: "10-12 mins",
      calories: 510,
      spicyLevel: 1
    },
    {
      id: 33,
      name: "Chicken & Waffle Stack",
      price: "$16.99",
      category: "Chicken",
      description: "Fried chicken breast on Belgian waffles with maple syrup and butter",
      imageUrl: "https://images.unsplash.com/photo-1606755962773-d324e9a13086?w=400&h=300&fit=crop",
      popular: false,
      isNew: true,
      rating: 4.6,
      prepTime: "15-18 mins",
      calories: 750,
      spicyLevel: 0
    },

    // Sides
    {
      id: 13,
      name: "Truffle Parmesan Fries",
      price: "$7.99",
      category: "Sides",
      description: "Golden fries with truffle oil, parmesan cheese, and fresh herbs",
      imageUrl: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&h=300&fit=crop",
      popular: true,
      isNew: false,
      rating: 4.7,
      prepTime: "6-8 mins",
      calories: 420,
      spicyLevel: 0
    },
    {
      id: 14,
      name: "Sweet Potato Wedges",
      price: "$6.49",
      category: "Sides",
      description: "Roasted sweet potato wedges with cinnamon sugar and maple aioli",
      imageUrl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop",
      popular: false,
      isNew: false,
      rating: 4.4,
      prepTime: "8-10 mins",
      calories: 320,
      spicyLevel: 0
    },
    {
      id: 15,
      name: "Beer-Battered Onion Rings",
      price: "$7.49",
      category: "Sides",
      description: "Thick-cut onions in craft beer batter with chipotle ranch dipping sauce",
      imageUrl: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop",
      popular: false,
      isNew: false,
      rating: 4.5,
      prepTime: "8-10 mins",
      calories: 380,
      spicyLevel: 1
    },
    {
      id: 16,
      name: "Loaded Nachos Supreme",
      price: "$12.99",
      category: "Sides",
      description: "House-made tortilla chips with cheese, jalapeños, guacamole, and sour cream",
      imageUrl: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&h=300&fit=crop",
      popular: true,
      isNew: false,
      rating: 4.6,
      prepTime: "10-12 mins",
      calories: 680,
      spicyLevel: 2
    },
    {
      id: 34,
      name: "Mozzarella Stick Bites",
      price: "$8.99",
      category: "Sides",
      description: "Hand-breaded mozzarella with marinara and ranch dipping sauces (8 pieces)",
      imageUrl: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?w=400&h=300&fit=crop",
      popular: false,
      isNew: false,
      rating: 4.3,
      prepTime: "6-8 mins",
      calories: 520,
      spicyLevel: 0
    },
    {
      id: 35,
      name: "Artisan Garlic Bread",
      price: "$6.99",
      category: "Sides",
      description: "Fresh baked sourdough with roasted garlic butter and herb blend",
      imageUrl: "https://images.unsplash.com/photo-1619740455994-9b5e73d8d0c6?w=400&h=300&fit=crop",
      popular: false,
      isNew: false,
      rating: 4.2,
      prepTime: "5-7 mins",
      calories: 280,
      spicyLevel: 0
    },
    {
      id: 36,
      name: "Superfood Caesar Salad",
      price: "$9.99",
      category: "Sides",
      description: "Organic romaine with quinoa, avocado, parmesan, and house caesar dressing",
      imageUrl: "https://images.unsplash.com/photo-1512852939750-1305098529bf?w=400&h=300&fit=crop",
      popular: false,
      isNew: true,
      rating: 4.4,
      prepTime: "5-7 mins",
      calories: 320,
      spicyLevel: 0
    },
    {
      id: 37,
      name: "Asian Fusion Slaw",
      price: "$5.49",
      category: "Sides",
      description: "Crispy cabbage and carrots with sesame ginger dressing",
      imageUrl: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=400&h=300&fit=crop",
      popular: false,
      isNew: true,
      rating: 4.1,
      prepTime: "3-5 mins",
      calories: 180,
      spicyLevel: 1
    },
    {
      id: 38,
      name: "Loaded Potato Skins",
      price: "$9.49",
      category: "Sides",
      description: "Crispy potato skins with cheese, bacon bits, and sour cream (4 pieces)",
      imageUrl: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&h=300&fit=crop",
      popular: false,
      isNew: false,
      rating: 4.5,
      prepTime: "10-12 mins",
      calories: 580,
      spicyLevel: 0
    },

    // Drinks
    {
      id: 17,
      name: "Craft Soda Selection",
      price: "$3.99",
      category: "Drinks",
      description: "Artisan sodas: Cola, Root Beer, Ginger Beer, or Lemon-Lime",
      imageUrl: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop",
      popular: false,
      isNew: false,
      rating: 4.2,
      prepTime: "1-2 mins",
      calories: 150,
      spicyLevel: 0
    },
    {
      id: 18,
      name: "Fresh Mint Lemonade",
      price: "$4.99",
      category: "Drinks",
      description: "House-made lemonade with fresh mint, cucumber, and sparkling water",
      imageUrl: "https://images.unsplash.com/photo-1523371683702-af24e16d4787?w=400&h=300&fit=crop",
      popular: true,
      isNew: false,
      rating: 4.6,
      prepTime: "3-5 mins",
      calories: 120,
      spicyLevel: 0
    },
    {
      id: 19,
      name: "Premium Milkshakes",
      price: "$6.99",
      category: "Drinks",
      description: "Thick milkshakes: Vanilla Bean, Belgian Chocolate, Strawberry Cheesecake",
      imageUrl: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&h=300&fit=crop",
      popular: true,
      isNew: false,
      rating: 4.8,
      prepTime: "5-7 mins",
      calories: 450,
      spicyLevel: 0
    },
    {
      id: 20,
      name: "Cold Brew Coffee",
      price: "$4.49",
      category: "Drinks", 
      description: "Smooth cold brew with vanilla cream and cinnamon",
      imageUrl: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&h=300&fit=crop",
      popular: false,
      isNew: false,
      rating: 4.3,
      prepTime: "2-3 mins",
      calories: 80,
      spicyLevel: 0
    },
    {
      id: 39,
      name: "Fresh-Squeezed OJ",
      price: "$4.99",
      category: "Drinks",
      description: "Organic oranges squeezed fresh daily with pulp options",
      imageUrl: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop",
      popular: false,
      isNew: false,
      rating: 4.4,
      prepTime: "2-3 mins",
      calories: 140,
      spicyLevel: 0
    },
    {
      id: 40,
      name: "Açaí Power Bowl",
      price: "$8.99",
      category: "Drinks",
      description: "Açaí smoothie bowl with granola, berries, coconut, and chia seeds",
      imageUrl: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300&fit=crop",
      popular: false,
      isNew: true,
      rating: 4.5,
      prepTime: "5-7 mins",
      calories: 320,
      spicyLevel: 0
    },
    {
      id: 41,
      name: "Artisan Hot Chocolate",
      price: "$5.49",
      category: "Drinks",
      description: "Belgian chocolate with marshmallows, whipped cream, and cinnamon",
      imageUrl: "https://images.unsplash.com/photo-1542990253-0b8be4f15da1?w=400&h=300&fit=crop",
      popular: false,
      isNew: false,
      rating: 4.4,
      prepTime: "3-5 mins",
      calories: 320,
      spicyLevel: 0
    },
    {
      id: 42,
      name: "Energy Boost Drinks",
      price: "$3.49",
      category: "Drinks",
      description: "Premium energy drinks with natural caffeine and vitamins",
      imageUrl: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop",
      popular: false,
      isNew: false,
      rating: 4.1,
      prepTime: "1-2 mins",
      calories: 110,
      spicyLevel: 0
    },
    {
      id: 43,
      name: "Alkaline Water",
      price: "$2.99",
      category: "Drinks",
      description: "Premium alkaline water with electrolytes and minerals",
      imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop",
      popular: false,
      isNew: false,
      rating: 4.0,
      prepTime: "1 min",
      calories: 0,
      spicyLevel: 0
    },

    // Desserts
    {
      id: 21,
      name: "Molten Chocolate Volcano",
      price: "$8.99",
      category: "Desserts",
      description: "Warm chocolate lava cake with vanilla bean ice cream and berry compote",
      imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
      popular: true,
      isNew: false,
      rating: 4.9,
      prepTime: "8-10 mins",
      calories: 520,
      spicyLevel: 0
    },
    {
      id: 22,
      name: "Grandmother's Apple Pie",
      price: "$7.49",
      category: "Desserts", 
      description: "Classic apple pie with cinnamon spice and vanilla ice cream",
      imageUrl: "https://images.unsplash.com/photo-1535920527002-b35e96722eb4?w=400&h=300&fit=crop",
      popular: false,
      isNew: false,
      rating: 4.5,
      prepTime: "5-7 mins",
      calories: 420,
      spicyLevel: 0
    },
    {
      id: 23,
      name: "Gourmet Ice Cream Sundae",
      price: "$6.99",
      category: "Desserts",
      description: "Three scoops with hot fudge, caramel, whipped cream, and maraschino cherry",
      imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
      popular: false,
      isNew: false,
      rating: 4.4,
      prepTime: "3-5 mins",
      calories: 480,
      spicyLevel: 0
    },
    {
      id: 24,
      name: "New York Cheesecake",
      price: "$8.49",
      category: "Desserts",
      description: "Rich NY-style cheesecake with seasonal berry compote and graham crust",
      imageUrl: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
      popular: true,
      isNew: false,
      rating: 4.7,
      prepTime: "3-5 mins",
      calories: 450,
      spicyLevel: 0
    },
    {
      id: 44,
      name: "Salted Caramel Brûlée",
      price: "$9.99",
      category: "Desserts",
      description: "Creamy custard with caramelized sugar crust and sea salt flakes",
      imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
      popular: false,
      isNew: true,
      rating: 4.6,
      prepTime: "5-7 mins",
      calories: 380,
      spicyLevel: 0
    },
    {
      id: 45,
      name: "Italian Tiramisu",
      price: "$8.99",
      category: "Desserts",
      description: "Authentic tiramisu with espresso-soaked ladyfingers and mascarpone",
      imageUrl: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
      popular: false,
      isNew: false,
      rating: 4.5,
      prepTime: "3-5 mins",
      calories: 420,
      spicyLevel: 0
    },
    {
      id: 46,
      name: "Berry Parfait Tower",
      price: "$7.99",
      category: "Desserts",
      description: "Layered parfait with fresh berries, yogurt, granola, and honey drizzle",
      imageUrl: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
      popular: false,
      isNew: true,
      rating: 4.3,
      prepTime: "3-5 mins",
      calories: 280,
      spicyLevel: 0
    },
    {
      id: 47,
      name: "Artisan Cookie Trio",
      price: "$5.99",
      category: "Desserts",
      description: "Three gourmet cookies: Double Chocolate, Oatmeal Raisin, White Chocolate Macadamia",
      imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop",
      popular: false,
      isNew: false,
      rating: 4.2,
      prepTime: "2-3 mins",
      calories: 320,
      spicyLevel: 0
    },
    {
      id: 48,
      name: "Banana Foster Sundae",
      price: "$9.49",
      category: "Desserts",
      description: "Flambéed bananas with rum sauce over vanilla ice cream and pecans",
      imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
      popular: false,
      isNew: true,
      rating: 4.6,
      prepTime: "5-7 mins",
      calories: 490,
      spicyLevel: 0
    }
  ];

  const handleAddToCart = (item) => {
    setIsLoading(true);
    dispatch(addToCart(item));
    
    // Add animation feedback
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  const toggleFavorite = (itemId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(itemId)) {
        newFavorites.delete(itemId);
      } else {
        newFavorites.add(itemId);
      }
      return newFavorites;
    });
  };

  const categories = ['All', 'Popular', 'Burgers', 'Chicken', 'Sides', 'Drinks', 'Desserts'];
  const priceRanges = ['All', 'Under $5', '$5-$10', '$10-$15', '$15-$20', 'Over $20'];
  const sortOptions = [
    { value: 'name', label: 'Name (A-Z)' },
    { value: 'price-low', label: 'Price (Low to High)' },
    { value: 'price-high', label: 'Price (High to Low)' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest Items' }
  ];

  const toggleShowMore = (category) => {
    setShowMore(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const filterItems = (items, category) => {
    let filtered = items;
    
    // Filter by category
    if (selectedCategory !== 'All') {
      if (selectedCategory === 'Popular') {
        filtered = filtered.filter(item => item.popular === true);
      } else {
        filtered = filtered.filter(item => item.category === selectedCategory);
      }
    }
    
    // Filter by search term
    if (searchTerm.trim()) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by price range
    if (priceRange !== 'All') {
      filtered = filtered.filter(item => {
        const price = parseFloat(item.price.replace('$', ''));
        switch (priceRange) {
          case 'Under $5':
            return price < 5;
          case '$5-$10':
            return price >= 5 && price <= 10;
          case '$10-$15':
            return price >= 10 && price <= 15;
          case '$15-$20':
            return price >= 15 && price <= 20;
          case 'Over $20':
            return price > 20;
          default:
            return true;
        }
      });
    }

    // If showing by categories and no filter selected, filter by category
    if (selectedCategory === 'All' && category) {
      if (category === 'Popular') {
        filtered = menuItems.filter(item => item.popular === true);
      } else {
        filtered = menuItems.filter(item => item.category === category);
      }
      
      // Apply search filter to category-specific items
      if (searchTerm.trim()) {
        filtered = filtered.filter(item =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      
      // Apply price filter to category-specific items
      if (priceRange !== 'All') {
        filtered = filtered.filter(item => {
          const price = parseFloat(item.price.replace('$', ''));
          switch (priceRange) {
            case 'Under $5':
              return price < 5;
            case '$5-$10':
              return price >= 5 && price <= 10;
            case '$10-$15':
              return price >= 10 && price <= 15;
            case '$15-$20':
              return price >= 15 && price <= 20;
            case 'Over $20':
              return price > 20;
            default:
              return true;
          }
        });
      }
    }

    // Sort the filtered results
    if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'price-low') {
      filtered.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
    } else if (sortBy === 'popularity') {
      // Sort popular items first, then by rating
      filtered.sort((a, b) => {
        if (a.popular && !b.popular) return -1;
        if (!a.popular && b.popular) return 1;
        return (b.rating || 0) - (a.rating || 0);
      });
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortBy === 'newest') {
      filtered.sort((a, b) => {
        if (a.isNew && !b.isNew) return -1;
        if (!a.isNew && b.isNew) return 1;
        return 0;
      });
    }

    return filtered;
  };

  const getVisibleItems = (category) => {
    const filtered = filterItems(menuItems, category);
    const isExpanded = showMore[category];
    
    // For Popular and Burgers: always show first 6 items, expand to show all when "See More" is clicked
    if (category === 'Burgers' || category === 'Popular') {
      return isExpanded ? filtered : filtered.slice(0, 6);
    }
    
    // For other categories: show NO items initially, show all when "See More" is clicked
    if (['Chicken', 'Sides', 'Drinks', 'Desserts'].includes(category)) {
      return isExpanded ? filtered : [];
    }
    
    // Default behavior for any other categories
    return isExpanded ? filtered : filtered.slice(0, 6);
  };

  const shouldShowSeeMore = (category) => {
    const filtered = filterItems(menuItems, category);
    
    // For Popular and Burgers: show "See More" if more than 6 items
    if (category === 'Burgers' || category === 'Popular') {
      return filtered.length > 6;
    }
    
    // For other categories: always show "See More" button if there are items
    if (['Chicken', 'Sides', 'Drinks', 'Desserts'].includes(category)) {
      return filtered.length > 0;
    }
    
    // Default behavior
    return filtered.length > 6;
  };

  const getVisibleCategories = () => {
    if (selectedCategory !== 'All') {
      // If a specific category is selected, don't show category sections
      return [];
    }
    
    // Show all categories, but control item visibility through getVisibleItems
    return ['Popular', 'Burgers', 'Chicken', 'Sides', 'Drinks', 'Desserts'];
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-amber-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full text-sm font-semibold mb-6 animate-bounce">
            <Sparkles className="w-8 h-8" />
          <h1 className="text-2xl font-bold"> OUR MENU </h1>
            <Sparkles className="w-8 h-8" />
          </div>
        
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience culinary excellence with our chef-crafted dishes, premium ingredients, and innovative flavors
          </p>
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
            <Star className="w-8 h-8 text-amber-400 fill-current" />
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Compact Modern Filter Section */}
        <div className="mb-12">
          <div className="relative">
            {/* Main Filter Container */}
            <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/30 overflow-hidden">
              {/* Header Bar */}
              <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
              
              <div className="p-6">
                {/* Compact Search Bar */}
                <div className="mb-8">
                  <div className="relative max-w-2xl mx-auto">
                    <div className="relative flex items-center bg-gray-50 rounded-xl border border-gray-200 hover:border-purple-300 transition-colors duration-200">
                     
                      {searchTerm && (
                        <button
                          onClick={() => setSearchTerm('')}
                          className="absolute right-3 p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full transition-all duration-200"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Compact Filter Grid */}
                {/* Ultra Modern Filter Grid - Premium Design */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  
                  {/* Categories Section - Ultra Modern Design */}
                  <div className="lg:col-span-8">
                    <div className="group mb-8">
                      <div className="flex items-center gap-5 mb-8">
                        <div className="relative group/icon">
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur-md opacity-70 group-hover/icon:opacity-100 transition-all duration-500 scale-110"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover/icon:scale-105 transition-all duration-300">
                            <TrendingUp className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-2">
                            Food Categories
                          </h3>
                          <p className="text-slate-600 text-base font-semibold">Discover your favorite cuisine style</p>
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/40 via-blue-500/60 to-purple-600/40 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-7 gap-4">
                      {categories.map((category, index) => (
                        <div
                          key={category}
                          className="group/cat relative transform transition-all duration-500"
                          style={{ 
                            animationDelay: `${index * 100}ms`,
                            animation: 'fadeInUp 0.6s ease-out forwards'
                          }}
                        >
                          <button
                            onClick={() => setSelectedCategory(category)}
                            className={`group relative w-full overflow-hidden rounded-3xl transition-all duration-700 transform ${
                              selectedCategory === category
                                ? 'scale-110 rotate-1 shadow-2xl shadow-cyan-500/30'
                                : 'hover:scale-105 hover:-rotate-1 hover:shadow-xl hover:shadow-blue-500/20'
                            }`}
                          >
                            {/* Ultra Glow Effect for Active */}
                            {selectedCategory === category && (
                              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl opacity-60 blur-xl animate-pulse"></div>
                            )}
                            
                            {/* Animated Background */}
                            <div className={`relative transition-all duration-700 ${
                              selectedCategory === category
                                ? 'bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700'
                                : 'bg-gradient-to-br from-white via-slate-50 to-blue-50 hover:from-cyan-50 hover:via-blue-100 hover:to-purple-100 border-2 border-slate-200 hover:border-cyan-300'
                            }`}>
                              {/* Floating Orbs */}
                              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                                <div className="absolute top-3 right-3 w-5 h-5 bg-white/20 rounded-full animate-bounce"></div>
                                <div className="absolute bottom-3 left-3 w-4 h-4 bg-white/15 rounded-full animate-bounce delay-300"></div>
                                <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-white/10 rounded-full animate-ping delay-700"></div>
                              </div>
                              
                              {/* Content */}
                              <div className="relative p-5 flex flex-col items-center gap-3">
                                <div className={`text-2xl transition-all duration-500 ${
                                  selectedCategory === category ? 'scale-125 rotate-12' : 'group-hover:scale-110 group-hover:rotate-6'
                                }`}>
                                  {category === 'All' && '🍽️'}
                                  {category === 'Popular' && <Star className={`w-6 h-6 ${selectedCategory === category ? 'text-yellow-200 fill-current' : 'text-amber-500 fill-current'}`} />}
                                  {category === 'Burgers' && '🍔'}
                                  {category === 'Chicken' && '🍗'}
                                  {category === 'Sides' && '🍟'}
                                  {category === 'Drinks' && '🥤'}
                                  {category === 'Desserts' && '🍰'}
                                </div>
                                
                                <span className={`font-black text-sm transition-all duration-500 text-center leading-tight ${
                                  selectedCategory === category
                                    ? 'text-white'
                                    : 'text-slate-700 group-hover:text-blue-700'
                                }`}>
                                  {category}
                                </span>
                              </div>
                              
                              {/* Active Pulse Indicator */}
                              {selectedCategory === category && (
                                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                                  <div className="flex gap-1">
                                    <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                                    <div className="w-2 h-2 bg-white rounded-full animate-ping delay-150"></div>
                                    <div className="w-2 h-2 bg-white rounded-full animate-ping delay-300"></div>
                                  </div>
                                </div>
                              )}
                              
                              {/* Rainbow Shimmer Effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 rounded-3xl"></div>
                            </div>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Sort & View Section - Revolutionary Design */}
                  <div className="lg:col-span-4">
                    <div className="group mb-8">
                      <div className="flex items-center gap-5 mb-8">
                        <div className="relative group/icon">
                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600 rounded-2xl blur-md opacity-70 group-hover/icon:opacity-100 transition-all duration-500 scale-110"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover/icon:scale-105 transition-all duration-300">
                            <Filter className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-black bg-gradient-to-r from-slate-900 to-emerald-900 bg-clip-text text-transparent mb-2">
                            Sort & View
                          </h3>
                          <p className="text-slate-600 text-base font-semibold">Customize your display</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {/* Revolutionary Sort Dropdown */}
                      <div className="group/select relative">
                        <div className="relative">
                          {/* Glow Background */}
                          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-blue-600 rounded-2xl opacity-30 blur-lg group-hover/select:opacity-50 transition-all duration-500"></div>
                          
                          <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="relative w-full pl-6 pr-12 py-5 bg-gradient-to-br from-white via-slate-50 to-emerald-50 border-2 border-slate-200 rounded-2xl text-base font-bold text-slate-800 focus:outline-none focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all duration-500 appearance-none cursor-pointer shadow-lg hover:shadow-xl hover:border-emerald-400 group-hover/select:border-emerald-500"
                          >
                            {sortOptions.map((option) => (
                              <option key={option.value} value={option.value} className="font-bold bg-white">
                                {option.label}
                              </option>
                            ))}
                          </select>
                          
                          {/* Animated Dropdown Arrow */}
                          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <div className="w-6 h-6 text-slate-500 group-hover/select:text-emerald-600 transition-all duration-300 group-hover/select:scale-110">
                              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="group-hover/select:animate-bounce">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                          
                          {/* Floating Particles */}
                          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                            <div className="absolute top-2 right-8 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-50"></div>
                            <div className="absolute bottom-2 left-8 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-500 opacity-50"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Next-Gen View Mode Toggle */}
                      <div className="relative">
                        <div className="relative bg-gradient-to-r from-slate-100 via-white to-slate-100 p-3 rounded-2xl shadow-inner border-2 border-slate-200">
                          {/* Animated Sliding Background */}
                          <div 
                            className={`absolute top-3 bottom-3 bg-gradient-to-r from-emerald-500 via-teal-600 to-blue-600 rounded-xl shadow-2xl transition-all duration-700 ease-out transform ${
                              viewMode === 'grid' ? 'left-3 right-1/2 mr-1.5 scale-100' : 'left-1/2 right-3 ml-1.5 scale-100'
                            }`}
                          ></div>
                          
                          <div className="relative flex">
                            <button
                              onClick={() => setViewMode('grid')}
                              className={`relative z-10 flex-1 py-4 px-5 rounded-xl text-base font-black transition-all duration-500 flex items-center justify-center gap-3 transform ${
                                viewMode === 'grid'
                                  ? 'text-white scale-105'
                                  : 'text-slate-600 hover:text-emerald-700 hover:scale-105'
                              }`}
                            >
                              <div className="grid grid-cols-2 gap-1">
                                <div className="w-2 h-2 bg-current rounded-sm"></div>
                                <div className="w-2 h-2 bg-current rounded-sm"></div>
                                <div className="w-2 h-2 bg-current rounded-sm"></div>
                                <div className="w-2 h-2 bg-current rounded-sm"></div>
                              </div>
                              Grid View
                            </button>
                            <button
                              onClick={() => setViewMode('list')}
                              className={`relative z-10 flex-1 py-4 px-5 rounded-xl text-base font-black transition-all duration-500 flex items-center justify-center gap-3 transform ${
                                viewMode === 'list'
                                  ? 'text-white scale-105'
                                  : 'text-slate-600 hover:text-emerald-700 hover:scale-105'
                              }`}
                            >
                              <div className="flex flex-col gap-1">
                                <div className="w-4 h-0.5 bg-current rounded-full"></div>
                                <div className="w-4 h-0.5 bg-current rounded-full"></div>
                                <div className="w-4 h-0.5 bg-current rounded-full"></div>
                              </div>
                              List View
                            </button>
                          </div>
                        </div>
                      </div>

                    
                    </div>
                  </div>
                </div>

                {/* Compact Clear Filters Button */}
                {(selectedCategory !== 'All' || priceRange !== 'All' || searchTerm || sortBy !== 'name') && (
                  <div className="mt-6 text-center">
                    <button
                      onClick={() => {
                        setSelectedCategory('All');
                        setPriceRange('All');
                        setSearchTerm('');
                        setSortBy('name');
                      }}
                      className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md flex items-center gap-2 mx-auto"
                    >
                      <X className="w-4 h-4" />
                      Clear Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Quick View Modal */}
        {showQuickView && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
              <button
                onClick={() => setShowQuickView(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-all duration-200"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
              
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <img
                  src={showQuickView.imageUrl}
                  alt={showQuickView.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{showQuickView.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    <span>{showQuickView.rating}</span>
                    <Clock className="w-4 h-4 ml-2" />
                    <span>{showQuickView.prepTime}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{showQuickView.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-purple-600">{showQuickView.price}</span>
                  </div>
                  <div className="text-sm text-gray-500">{showQuickView.calories} cal</div>
                </div>
                
                <button
                  onClick={() => {
                    handleAddToCart(showQuickView);
                    setShowQuickView(null);
                  }}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Menu Items */}
        {selectedCategory === 'All' ? (
          // Show by categories when "All" is selected
          <>
            {getVisibleCategories().map((category) => {
              const visibleItems = getVisibleItems(category);
              const showSeeMore = shouldShowSeeMore(category);
              
              if (visibleItems.length === 0) return null;

              return (
                <div key={category} className="mb-20">
                  <div className="text-center mb-12">
                    <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
                      {category}
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                  </div>
                  
                  <div className={`grid gap-8 ${
                    viewMode === 'grid' 
                      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                      : 'grid-cols-1 max-w-4xl mx-auto'
                  }`}>
                    {visibleItems.map((item, index) => (
                      <div
                        key={`${item.id}-${item.category}`}
                        className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 ${
                          animatedItems.has(item.id) ? 'animate-fadeInUp' : 'opacity-0'
                        } ${viewMode === 'list' ? 'flex flex-row h-48' : 'hover:scale-105'}`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {/* Image Section */}
                        <div className={`relative overflow-hidden ${
                          viewMode === 'list' ? 'w-48 h-full' : 'h-56'
                        }`}>
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            onError={(e) => {
                              e.target.src = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop';
                            }}
                          />
                          
                          {/* Overlay Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          {/* Badges */}
                          <div className="absolute top-3 left-3 flex flex-col gap-2">
                            {item.popular && (
                              <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                <Star className="w-3 h-3 fill-current" />
                                Popular
                              </div>
                            )}
                            {item.isNew && (
                              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                NEW
                              </div>
                            )}
                          </div>
                          
                          {/* Action Buttons */}
                          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <button
                              onClick={() => toggleFavorite(item.id)}
                              className={`p-2 rounded-full transition-all duration-200 shadow-lg hover:scale-110 ${
                                favorites.has(item.id)
                                  ? 'bg-red-500 text-white'
                                  : 'bg-white/90 text-gray-600 hover:bg-red-500 hover:text-white'
                              }`}
                              title="Add to Favorites"
                            >
                              <Heart className={`w-4 h-4 ${favorites.has(item.id) ? 'fill-current' : ''}`} />
                            </button>
                            <button
                              onClick={() => setShowQuickView(item)}
                              className="bg-white/90 hover:bg-purple-500 text-gray-600 hover:text-white p-2 rounded-full transition-all duration-200 shadow-lg hover:scale-110"
                              title="Quick View"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleAddToCart(item)}
                              className="bg-white/90 hover:bg-purple-500 text-gray-600 hover:text-white p-2 rounded-full transition-all duration-200 shadow-lg hover:scale-110"
                              title="Quick Add to Cart"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Spicy Level Indicator */}
                          {item.spicyLevel > 0 && (
                            <div className="absolute bottom-3 left-3">
                              <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full ${
                                      i < item.spicyLevel ? 'bg-red-500' : 'bg-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
              
                        {/* Content Section */}
                        <div className={`p-6 flex-1 ${viewMode === 'list' ? 'flex flex-col justify-between' : ''}`}>
                          {/* Rating & Prep Time */}
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-amber-400 fill-current" />
                              <span className="text-sm font-semibold text-gray-700">{item.rating}</span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-500">
                              <Clock className="w-4 h-4" />
                              <span className="text-sm">{item.prepTime}</span>
                            </div>
                          </div>

                          {/* Item Name */}
                          <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-200">
                            {item.name}
                          </h4>
                          
                          {/* Description */}
                          <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                            {item.description}
                          </p>

                          {/* Calories */}
                          <div className="text-xs text-gray-500 mb-4">
                            {item.calories} calories
                          </div>
                          
                          {/* Price and Action */}
                          <div className="flex items-center justify-between mt-auto">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                {item.price}
                              </span>
                            </div>
                            
                            <button 
                              onClick={() => handleAddToCart(item)}
                              disabled={isLoading}
                              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg disabled:cursor-not-allowed"
                            >
                              {isLoading ? (
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              ) : (
                                <ShoppingCart className="w-4 h-4" />
                              )}
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced See More Button */}
                  {showSeeMore && (
                    <div className="text-center mt-12">
                      <div className="mb-6">
                        <span className="text-gray-600 text-lg font-medium">
                          {(category === 'Burgers' || category === 'Popular') ? (
                            `Showing ${visibleItems.length} of ${filterItems(menuItems, category).length} items`
                          ) : showMore[category] ? (
                            `Showing all ${filterItems(menuItems, category).length} items`
                          ) : (
                            `${filterItems(menuItems, category).length} items available`
                          )}
                        </span>
                      </div>
                      <button
                        onClick={() => toggleShowMore(category)}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto shadow-xl hover:shadow-2xl"
                      >
                        {showMore[category] ? (
                          <>
                            <ChevronUp className="w-6 h-6" />
                            Hide {category}
                          </>
                        ) : category === 'Burgers' ? (
                          <>
                            <ChevronDown className="w-6 h-6" />
                            See More {category} ({filterItems(menuItems, category).length - 6} more)
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-6 h-6" />
                            Show {category} ({filterItems(menuItems, category).length} items)
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </>
        ) : (
          // Show filtered items when a specific category is selected
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
                {selectedCategory}
                {priceRange !== 'All' && ` - ${priceRange}`}
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>
            
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1 max-w-4xl mx-auto'
            }`}>
              {filterItems(menuItems).map((item, index) => (
                <div
                  key={`${item.id}-${item.category}-filtered`}
                  className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 ${
                    animatedItems.has(item.id) ? 'animate-fadeInUp' : 'opacity-0'
                  } ${viewMode === 'list' ? 'flex flex-row h-48' : 'hover:scale-105'}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image Section */}
                  <div className={`relative overflow-hidden ${
                    viewMode === 'list' ? 'w-48 h-full' : 'h-56'
                  }`}>
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop';
                      }}
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {item.popular && (
                        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <Star className="w-3 h-3 fill-current" />
                          Popular
                        </div>
                      )}
                      {item.isNew && (
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          NEW
                        </div>
                      )}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button
                        onClick={() => toggleFavorite(item.id)}
                        className={`p-2 rounded-full transition-all duration-200 shadow-lg hover:scale-110 ${
                          favorites.has(item.id)
                            ? 'bg-red-500 text-white'
                            : 'bg-white/90 text-gray-600 hover:bg-red-500 hover:text-white'
                        }`}
                        title="Add to Favorites"
                      >
                        <Heart className={`w-4 h-4 ${favorites.has(item.id) ? 'fill-current' : ''}`} />
                      </button>
                      <button
                        onClick={() => setShowQuickView(item)}
                        className="bg-white/90 hover:bg-purple-500 text-gray-600 hover:text-white p-2 rounded-full transition-all duration-200 shadow-lg hover:scale-110"
                        title="Quick View"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="bg-white/90 hover:bg-purple-500 text-gray-600 hover:text-white p-2 rounded-full transition-all duration-200 shadow-lg hover:scale-110"
                        title="Quick Add to Cart"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Spicy Level Indicator */}
                    {item.spicyLevel > 0 && (
                      <div className="absolute bottom-3 left-3">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i < item.spicyLevel ? 'bg-red-500' : 'bg-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
        
                  {/* Content Section */}
                  <div className={`p-6 flex-1 ${viewMode === 'list' ? 'flex flex-col justify-between' : ''}`}>
                    {/* Rating & Prep Time */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-amber-400 fill-current" />
                        <span className="text-sm font-semibold text-gray-700">{item.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{item.prepTime}</span>
                      </div>
                    </div>

                    {/* Item Name */}
                    <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-200">
                      {item.name}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    {/* Calories */}
                    <div className="text-xs text-gray-500 mb-4">
                      {item.calories} calories
                    </div>
                    
                    {/* Price and Action */}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          {item.price}
                        </span>
                      </div>
                      
                      <button 
                        onClick={() => handleAddToCart(item)}
                        disabled={isLoading}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                          <ShoppingCart className="w-4 h-4" />
                        )}
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Enhanced No Results Message */}
            {filterItems(menuItems).length === 0 && (
              <div className="text-center py-20">
                <div className="text-8xl mb-6">🍽️</div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent mb-4">
                  No delicious items found
                </h3>
                <p className="text-xl text-gray-500 mb-8">
                  Try adjusting your filters to discover more amazing dishes.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setPriceRange('All');
                    setSearchTerm('');
                    setSortBy('name');
                  }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}