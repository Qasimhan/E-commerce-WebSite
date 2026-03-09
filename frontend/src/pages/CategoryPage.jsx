// src/pages/CategoryPage.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaHeart,  FaArrowLeft } from "react-icons/fa";


function CategoryPage() {
  const { categoryName } = useParams(); // URL se category name le ga
  const navigate = useNavigate();

  const [wishlist, setWishlist] = useState([]);
  const [products, setProducts] = useState([]);

  // Sab categories ke products
  

  useEffect(() => {
    const allProducts = {
    "womens-fashion": [
    { id: 101, name: "Printed Lawn Suit", description: "Elegant summer lawn suit with digital prints", price: 3999, originalPrice: 5500, image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500", discount: 27, category: "eastern" },
    { id: 102, name: "Embroidered Kameez", price: 4599, originalPrice: 6500, description: "Heavy embroidered kameez with chiffon dupatta", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500", discount: 29, category: "eastern" },
    //{ id: 103, name: "Winter Shawl", price: 2999, originalPrice: 4500, description: "Warm pashmina shawl for winter", image: "https://images.unsplash.com/photo-1602353196203-a3cf13a5a2a6?w=500", discount: 33, category: "eastern" },
    { id: 104, name: "Party Wear Gown", price: 6999, originalPrice: 9000, description: "Elegant evening gown for parties", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500", discount: 22, category: "western" },
    { id: 105, name: "Chiffon Dupatta Set", price: 3299, originalPrice: 4800, description: "Luxury chiffon suit with dupatta", image: "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?w=500", discount: 31, category: "eastern" },
    { id: 106, name: "Silk Shirt", price: 2899, originalPrice: 4200, description: "Pure silk shirt for women", image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=500", discount: 31, category: "western" },
    //{ id: 107, name: "Palazzo Pants", price: 1999, originalPrice: 3200, description: "Comfortable palazzo pants", image: "https://images.unsplash.com/photo-1594633313593-bab3825d0c8d?w=500", discount: 38, category: "bottoms" },
    { id: 108, name: "Designer Saree", price: 8999, originalPrice: 12000, description: "Banarasi silk saree with border", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500", discount: 25, category: "eastern" },
   // { id: 109, name: "Casual Tunic", price: 1799, originalPrice: 2800, description: "Cotton tunic for everyday wear", image: "https://images.unsplash.com/photo-1573871669417-f2193b4d8d90?w=500", discount: 36, category: "western" },
    { id: 110, name: "Lehenga Choli", price: 12999, originalPrice: 18000, description: "Wedding lehenga with heavy work", image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=500", discount: 28, category: "eastern" },
   // { id: 111, name: "Kurti with Patiala", price: 2499, originalPrice: 3800, description: "Designer kurti with patiala salwar", image: "https://images.unsplash.com/photo-1584516150909-4349ee35f7e3?w=500", discount: 34, category: "eastern" },
    { id: 112, name: "Evening Gown", price: 7999, originalPrice: 11000, description: "Floor-length evening gown", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500", discount: 27, category: "western" },
  //  { id: 113, name: "Pashmina Shawl", price: 4499, originalPrice: 6500, description: "Handwoven pashmina shawl", image: "https://images.unsplash.com/photo-1601924921557-45e6dea53a5b?w=500", discount: 31, category: "accessories" },
    { id: 114, name: "Anarkali Dress", price: 5499, originalPrice: 7800, description: "Floor-length Anarkali suit", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500", discount: 30, category: "eastern" },
    { id: 115, name: "Denim Jacket", price: 3299, originalPrice: 4800, description: "Stylish denim jacket for women", image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500", discount: 31, category: "western" },
    { id: 116, name: "Cropped Top", price: 1299, originalPrice: 2200, description: "Trendy cropped top", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500", discount: 41, category: "western" },
    { id: 117, name: "Maxi Dress", price: 4499, originalPrice: 6400, description: "Floral print maxi dress", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500", discount: 30, category: "western" },
 //   { id: 118, name: "Straight Pants", price: 1899, originalPrice: 3000, description: "Formal straight pants", image: "https://images.unsplash.com/photo-1594633313593-bab3825d0c8d?w=500", discount: 37, category: "bottoms" },
    { id: 119, name: "Blazer", price: 5999, originalPrice: 8500, description: "Women's blazer for office", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500", discount: 29, category: "western" },
  //  { id: 120, name: "Silk Scarf", price: 899, originalPrice: 1500, description: "Pure silk scarf", image: "https://images.unsplash.com/photo-1584036570351-b307beb77216?w=500", discount: 40, category: "accessories" },
  //  { id: 121, name: "Kurti with Jeans", price: 2799, originalPrice: 4200, description: "Fusion kurti with jeans", image: "https://images.unsplash.com/photo-1584516150909-4349ee35f7e3?w=500", discount: 33, category: "fusion" },
    { id: 122, name: "Party Top", price: 1599, originalPrice: 2600, description: "Sequined party top", image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=500", discount: 38, category: "western" },
    { id: 123, name: "Woolen Sweater", price: 3499, originalPrice: 5200, description: "Warm woolen sweater", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500", discount: 33, category: "winter" },
    { id: 124, name: "Cardigan", price: 2899, originalPrice: 4300, description: "Long cardigan for winter", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX3DaRJCH40VxRQ81J59zZtb1PSWKl8qN3Ww&s", discount: 33, category: "winter" },
    { id: 125, name: "Trench Coat", price: 6999, originalPrice: 10000, description: "Classic trench coat", image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=500", discount: 30, category: "winter" },
    { id: 126, name: "Leather Jacket", price: 8999, originalPrice: 13000, description: "Faux leather jacket", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500", discount: 31, category: "winter" },
    { id: 127, name: "Hoodie", price: 2499, originalPrice: 3800, description: "Comfortable hoodie", image: "https://hangten.com.pk/cdn/shop/files/MH4750-1.jpg?v=1735039612", discount: 34, category: "casual" },
    { id: 128, name: "Track Suit", price: 3299, originalPrice: 4800, description: "Two-piece track suit", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500", discount: 31, category: "sports" },
    { id: 129, name: "Sports Bra", price: 1499, originalPrice: 2500, description: "High-support sports bra", image: "https://image-cdn.ubuy.com/men-s-sports-bra-sleeveless-muscle-half/400_400_100/6950a5612704d92b720b0621.jpg", discount: 40, category: "sports" },
    { id: 130, name: "Yoga Pants", price: 1999, originalPrice: 3200, description: "Stretchy yoga pants", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500", discount: 38, category: "sports" },
    { id: 131, name: "Swimsuit", price: 2799, originalPrice: 4200, description: "One-piece swimsuit", image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500", discount: 33, category: "swimwear" },
    { id: 132, name: "Bikini Set", price: 2299, originalPrice: 3600, description: "Two-piece bikini set", image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500", discount: 36, category: "swimwear" },
    { id: 133, name: "Night Suit", price: 1899, originalPrice: 3000, description: "Cotton night suit", image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=500", discount: 37, category: "sleepwear" },
    { id: 134, name: "Bath Robe", price: 2499, originalPrice: 3800, description: "Soft bath robe", image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=500", discount: 34, category: "sleepwear" },
    { id: 135, name: "Slippers", price: 699, originalPrice: 1200, description: "Comfortable house slippers", image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=500", discount: 42, category: "footwear" },
    { id: 136, name: "Sandals", price: 1299, originalPrice: 2200, description: "Summer sandals", image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=500", discount: 41, category: "footwear" },
    { id: 137, name: "Heels", price: 2799, originalPrice: 4200, description: "Party wear heels", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500", discount: 33, category: "footwear" },
    { id: 138, name: "Sneakers", price: 3299, originalPrice: 4800, description: "Casual sneakers", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500", discount: 31, category: "footwear" },
   // { id: 139, name: "Boots", price: 4499, originalPrice: 6500, description: "Winter boots", image: "https://images.unsplash.com/photo-1608256246200-53e635b8859b?w=500", discount: 31, category: "footwear" },
    { id: 140, name: "Handbag", price: 2999, originalPrice: 4500, description: "Leather handbag", image: "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?w=500", discount: 33, category: "accessories" },
    { id: 141, name: "Clutch", price: 1599, originalPrice: 2600, description: "Evening clutch", image: "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?w=500", discount: 38, category: "accessories" },
    { id: 142, name: "Backpack", price: 3499, originalPrice: 5200, description: "Casual backpack", image: "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?w=500", discount: 33, category: "accessories" },
    { id: 143, name: "Sunglasses", price: 1299, originalPrice: 2200, description: "UV protection sunglasses", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500", discount: 41, category: "accessories" },
    { id: 144, name: "Watch", price: 3999, originalPrice: 5500, description: "Elegant wrist watch", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500", discount: 27, category: "accessories" },
    { id: 145, name: "Earrings", price: 899, originalPrice: 1500, description: "Gold-plated earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500", discount: 40, category: "jewelry" },
    { id: 146, name: "Necklace", price: 1499, originalPrice: 2500, description: "Designer necklace set", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500", discount: 40, category: "jewelry" },
   // { id: 147, name: "Bracelet", price: 599, originalPrice: 1000, description: "Silver bracelet", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500", discount: 40, category: "jewelry" },
   // { id: 148, name: "Ring", price: 799, originalPrice: 1400, description: "Fashion ring", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500", discount: 43, category: "jewelry" },
   // { id: 149, name: "Hair Accessories", price: 399, originalPrice: 700, description: "Hair clips and bands", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500", discount: 43, category: "accessories" },
   // { id: 150, name: "Belts", price: 899, originalPrice: 1500, description: "Leather belt", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500", discount: 40, category: "accessories" },
  ],
    "mens-collection": [
       { id: 201, name: "Classic Kurta", description: "Cotton kurta for men", price: 2499, originalPrice: 3500, image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500", discount: 28 },
    { id: 202, name: "Waistcoat", price: 1999, originalPrice: 3000, description: "Formal waistcoat", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500", discount: 33 },
    { id: 203, name: "Sherwani", price: 8999, originalPrice: 12000, description: "Wedding sherwani", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500", discount: 25 },
    { id: 204, name: "Casual Shirt", price: 1899, originalPrice: 2800, description: "Cotton casual shirt", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500", discount: 32 },
    { id: 205, name: "Formal Shirt", price: 2299, originalPrice: 3400, description: "Premium formal shirt", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500", discount: 32 },
    { id: 206, name: "T-Shirt", price: 999, originalPrice: 1600, description: "Cotton crew neck t-shirt", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500", discount: 38 },
    { id: 207, name: "Polo Shirt", price: 1499, originalPrice: 2400, description: "Classic polo shirt", image: "https://www.thesportinglodge.com/cdn/shop/files/PoloRalphLaurenCustomSlimFitStripedPoloShirtNewEnglandBlueMulti_1320x.jpg?v=1724082754", discount: 38 },
    { id: 208, name: "Slim Jeans", price: 2799, originalPrice: 4000, description: "Slim fit jeans", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500", discount: 30 },
    { id: 209, name: "Cargo Pants", price: 3299, originalPrice: 4800, description: "Multi-pocket cargo pants", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500", discount: 31 },
    { id: 210, name: "Chino Pants", price: 2999, originalPrice: 4400, description: "Casual chino pants", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500", discount: 32 },
    { id: 211, name: "Shorts", price: 1499, originalPrice: 2400, description: "Casual shorts", image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500", discount: 38 },
    { id: 212, name: "Blazer", price: 5999, originalPrice: 8500, description: "Men's blazer", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500", discount: 29 },
    { id: 213, name: "Suit", price: 12999, originalPrice: 18000, description: "3-piece suit", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500", discount: 28 },
    { id: 214, name: "Tie", price: 899, originalPrice: 1500, description: "Silk tie", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500", discount: 40 },
    { id: 215, name: "Bow Tie", price: 699, originalPrice: 1200, description: "Formal bow tie", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500", discount: 42 },
    { id: 216, name: "Cufflinks", price: 1299, originalPrice: 2200, description: "Silver cufflinks", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500", discount: 41 },
    { id: 217, name: "Sweater", price: 3299, originalPrice: 4800, description: "Wool sweater", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500", discount: 31 },
    { id: 218, name: "Hoodie", price: 2799, originalPrice: 4200, description: "Casual hoodie", image: "https://hangten.com.pk/cdn/shop/files/MH4750-1.jpg?v=1735039612", discount: 33 },
    { id: 219, name: "Jacket", price: 4499, originalPrice: 6500, description: "Denim jacket", image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500", discount: 31 },
    { id: 220, name: "Leather Jacket", price: 8999, originalPrice: 13000, description: "Faux leather jacket", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500", discount: 31 },
    { id: 221, name: "Winter Coat", price: 6999, originalPrice: 10000, description: "Warm winter coat", image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=500", discount: 30 },
    { id: 222, name: "Track Pants", price: 1999, originalPrice: 3200, description: "Sports track pants", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500", discount: 38 },
    { id: 223, name: "Sports Jersey", price: 2499, originalPrice: 3800, description: "Football jersey", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500", discount: 34 },
    { id: 224, name: "Gym Vest", price: 1299, originalPrice: 2200, description: "Gym workout vest", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500", discount: 41 },
    { id: 225, name: "Swim Trunks", price: 1799, originalPrice: 2800, description: "Swimwear for men", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500", discount: 36 },
    { id: 226, name: "Bathrobe", price: 2799, originalPrice: 4200, description: "Soft bath robe", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500", discount: 33 },
    { id: 227, name: "Pyjama Set", price: 1899, originalPrice: 3000, description: "Cotton pyjama set", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500", discount: 37 },
    { id: 228, name: "Slippers", price: 599, originalPrice: 1000, description: "House slippers", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500", discount: 40 },
    { id: 229, name: "Formal Shoes", price: 4499, originalPrice: 6500, description: "Leather formal shoes", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500", discount: 31 },
    { id: 230, name: "Casual Sneakers", price: 3799, originalPrice: 5500, description: "White sneakers", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500", discount: 31 },
    //{ id: 231, name: "Boots", price: 4999, originalPrice: 7200, description: "Winter boots", image: "https://images.unsplash.com/photo-1608256246200-53e635b8859b?w=500", discount: 31 },
    { id: 232, name: "Sandals", price: 1499, originalPrice: 2400, description: "Summer sandals", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500", discount: 38 },
    { id: 233, name: "Cap", price: 899, originalPrice: 1500, description: "Baseball cap", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500", discount: 40 },
    { id: 234, name: "Beanie", price: 699, originalPrice: 1200, description: "Winter beanie", image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500", discount: 42 },
    { id: 235, name: "Sunglasses", price: 1499, originalPrice: 2400, description: "Aviator sunglasses", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500", discount: 38 },
    { id: 236, name: "Watch", price: 4499, originalPrice: 6500, description: "Sports watch", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500", discount: 31 },
    { id: 237, name: "Belt", price: 1299, originalPrice: 2200, description: "Leather belt", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500", discount: 41 },
    { id: 238, name: "Wallet", price: 1499, originalPrice: 2400, description: "Men's wallet", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500", discount: 38 },
    { id: 239, name: "Backpack", price: 3499, originalPrice: 5200, description: "Travel backpack", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500", discount: 33 },
    { id: 240, name: "Messenger Bag", price: 2999, originalPrice: 4400, description: "Casual messenger bag", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500", discount: 32 },
    { id: 241, name: "Socks", price: 399, originalPrice: 700, description: "Cotton socks pack", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500", discount: 43 },
    { id: 242, name: "Underwear", price: 599, originalPrice: 1000, description: "Cotton underwear", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500", discount: 40 },
    { id: 243, name: "Vest", price: 499, originalPrice: 900, description: "Cotton vest", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500", discount: 45 },
    { id: 244, name: "Turban", price: 899, originalPrice: 1500, description: "Men's turban", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500", discount: 40 },
    { id: 245, name: "Patiala Shahi", price: 3999, originalPrice: 5500, description: "Traditional patiala", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500", discount: 27 },
    { id: 246, name: "Achkan", price: 6999, originalPrice: 10000, description: "Wedding achkan", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500", discount: 30 },
   // { id: 247, name: "Nehru Jacket", price: 3299, originalPrice: 4800, description: "Formal Nehru jacket", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500", discount: 31 },
  //{ id: 248, name: "Dhoti", price: 1299, originalPrice: 2200, description: "Traditional dhoti", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500", discount: 41 },
   // { id: 249, name: "Pagri", price: 999, originalPrice: 1700, description: "Traditional pagri", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500", discount: 41 },
   // { id: 250, name: "Khussa", price: 2499, originalPrice: 3800, description: "Traditional khussa", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500", discount: 34 },
  ],
    "kids-wear": [
      { id: 301, name: "Kids Frock", description: "Pretty frock for girls", price: 1599, originalPrice: 2500, image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 36 },
  { id: 302, name: "Party Frock", price: 2299, originalPrice: 3500, description: "Designer party frock", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 34 },
  { id: 303, name: "Baby Girl Dress", price: 999, originalPrice: 1600, description: "Cute baby girl dress", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 38 },
  { id: 304, name: "Girls Lehenga", price: 3499, originalPrice: 5200, description: "Traditional lehenga for girls", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 33 },
  { id: 305, name: "Girls Kurti", price: 1299, originalPrice: 2100, description: "Cotton kurti for girls", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 38 },
  { id: 306, name: "Girls Jeans", price: 1499, originalPrice: 2400, description: "Stylish jeans for girls", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 38 },
  { id: 307, name: "Girls T-Shirt", price: 699, originalPrice: 1200, description: "Printed t-shirt for girls", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 42 },
  { id: 308, name: "Girls Skirt", price: 899, originalPrice: 1500, description: "Pleated skirt for girls", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 40 },
  { id: 309, name: "Girls Top", price: 799, originalPrice: 1300, description: "Casual top for girls", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 38 },
  { id: 310, name: "Girls Sweater", price: 1799, originalPrice: 2800, description: "Warm sweater for girls", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 36 },
  { id: 311, name: "Girls Jacket", price: 2299, originalPrice: 3500, description: "Denim jacket for girls", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 34 },
  { id: 312, name: "Girls Pajamas", price: 1199, originalPrice: 1900, description: "Cotton pajama set", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 37 },
  { id: 313, name: "Girls Night Suit", price: 1399, originalPrice: 2200, description: "Comfortable night suit", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 36 },
  { id: 314, name: "Girls Swimsuit", price: 1599, originalPrice: 2500, description: "Swimsuit for girls", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 36 },
  { id: 315, name: "Girls Raincoat", price: 1899, originalPrice: 3000, description: "Colorful raincoat", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 37 },
  { id: 316, name: "Girls School Uniform", price: 2199, originalPrice: 3400, description: "School uniform for girls", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 35 },
  { id: 317, name: "Girls Blazer", price: 2799, originalPrice: 4200, description: "School blazer", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 33 },
  { id: 318, name: "Girls Cardigan", price: 1699, originalPrice: 2700, description: "Warm cardigan", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 37 },
  { id: 319, name: "Girls Hijab", price: 599, originalPrice: 1000, description: "Kids hijab set", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 40 },
  { id: 320, name: "Girls Accessories Set", price: 899, originalPrice: 1500, description: "Hair accessories set", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 40 },

  // Boys Wear (20 products)
  { id: 321, name: "Boys Kurta", price: 1299, originalPrice: 2000, description: "Cotton kurta for boys", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 35 },
  { id: 322, name: "Boys Sherwani", price: 3999, originalPrice: 5800, description: "Wedding sherwani for boys", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 31 },
  { id: 323, name: "Baby Boy Suit", price: 1199, originalPrice: 1900, description: "Baby boy suit", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 37 },
  { id: 324, name: "Boys Shirt", price: 999, originalPrice: 1600, description: "Casual shirt for boys", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 38 },
  { id: 325, name: "Boys Jeans", price: 1399, originalPrice: 2200, description: "Denim jeans for boys", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 36 },
  { id: 326, name: "Boys T-Shirt", price: 699, originalPrice: 1200, description: "Printed t-shirt", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 42 },
  { id: 327, name: "Boys Polo Shirt", price: 899, originalPrice: 1500, description: "Polo shirt for boys", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 40 },
  { id: 328, name: "Boys Shorts", price: 699, originalPrice: 1200, description: "Casual shorts for boys", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 42 },
  { id: 329, name: "Boys Sweater", price: 1699, originalPrice: 2700, description: "Wool sweater", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 37 },
  { id: 330, name: "Boys Hoodie", price: 1899, originalPrice: 3000, description: "Casual hoodie", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 37 },
  { id: 331, name: "Boys Jacket", price: 2499, originalPrice: 3800, description: "Denim jacket", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 34 },
  { id: 332, name: "Boys Blazer", price: 2999, originalPrice: 4500, description: "Formal blazer", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 33 },
  { id: 333, name: "Boys Waistcoat", price: 1499, originalPrice: 2400, description: "Formal waistcoat", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 38 },
  { id: 334, name: "Boys Track Suit", price: 2199, originalPrice: 3400, description: "Sports track suit", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 35 },
  { id: 335, name: "Boys Swim Trunks", price: 1299, originalPrice: 2100, description: "Swimwear for boys", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 38 },
  { id: 336, name: "Boys Pajamas", price: 1099, originalPrice: 1800, description: "Cotton pajama set", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 39 },
  { id: 337, name: "Boys School Uniform", price: 1999, originalPrice: 3100, description: "School uniform", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 36 },
  { id: 338, name: "Boys Cap", price: 499, originalPrice: 900, description: "Baseball cap", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 45 },
  { id: 339, name: "Boys Beanie", price: 599, originalPrice: 1000, description: "Winter beanie", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 40 },
  { id: 340, name: "Boys Tie Set", price: 799, originalPrice: 1300, description: "Tie and cufflinks set", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 38 },
  // Baby Essentials (10 products)
  { id: 341, name: "Baby Romper", price: 899, originalPrice: 1500, description: "Cotton romper for babies", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 40 },
  { id: 342, name: "Baby Onesie", price: 699, originalPrice: 1200, description: "Comfortable onesie", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 42 },
  { id: 343, name: "Baby Swaddle", price: 1199, originalPrice: 1900, description: "Soft baby swaddle", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 37 },
  { id: 344, name: "Baby Blanket", price: 1599, originalPrice: 2500, description: "Warm baby blanket", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 36 },
  { id: 345, name: "Baby Hat", price: 399, originalPrice: 700, description: "Baby hat with ears", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 43 },
  { id: 346, name: "Baby Socks", price: 299, originalPrice: 500, description: "Baby socks pack", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 40 },
  { id: 347, name: "Baby Shoes", price: 1299, originalPrice: 2100, description: "Soft sole baby shoes", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 38 },
  { id: 348, name: "Baby Bib", price: 399, originalPrice: 700, description: "Waterproof baby bib", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 43 },
  { id: 349, name: "Baby Mittens", price: 299, originalPrice: 500, description: "Baby scratch mittens", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 40 },
  { id: 350, name: "Baby Gift Set", price: 2799, originalPrice: 4200, description: "Complete baby gift set", image: "https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg", discount: 33 },
],
    "accessories": [
      { id: 401, name: "Leather Handbag", description: "Premium leather handbag", price: 3999, originalPrice: 5800, image: "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?w=500", discount: 31 },
  { id: 402, name: "Designer Tote Bag", price: 3299, originalPrice: 4800, description: "Spacious tote bag", image: "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?w=500", discount: 31 },
  { id: 403, name: "Evening Clutch", price: 1899, originalPrice: 2900, description: "Elegant evening clutch", image: "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?w=500", discount: 34 },
  { id: 404, name: "Crossbody Bag", price: 2499, originalPrice: 3700, description: "Casual crossbody bag", image: "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?w=500", discount: 32 },
  { id: 405, name: "Backpack", price: 3499, originalPrice: 5200, description: "Travel backpack", image: "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?w=500", discount: 33 },
  { id: 406, name: "Laptop Bag", price: 2799, originalPrice: 4100, description: "Padded laptop bag", image: "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?w=500", discount: 32 },
  { id: 407, name: "Messenger Bag", price: 2999, originalPrice: 4400, description: "Casual messenger bag", image: "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?w=500", discount: 32 },
  { id: 408, name: "Beach Bag", price: 1899, originalPrice: 2900, description: "Large beach bag", image: "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?w=500", discount: 34 },
  { id: 409, name: "Shopping Tote", price: 1599, originalPrice: 2500, description: "Foldable shopping tote", image: "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?w=500", discount: 36 },
  { id: 410, name: "Wallet", price: 1499, originalPrice: 2300, description: "Leather wallet", image: "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?w=500", discount: 35 },
  { id: 411, name: "Card Holder", price: 899, originalPrice: 1500, description: "Slim card holder", image: "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?w=500", discount: 40 },
  { id: 412, name: "Coin Purse", price: 599, originalPrice: 1000, description: "Small coin purse", image: "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?w=500", discount: 40 },
  { id: 413, name: "Travel Organizer", price: 1299, originalPrice: 2100, description: "Passport organizer", image: "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?w=500", discount: 38 },
  { id: 414, name: "Cosmetic Bag", price: 999, originalPrice: 1700, description: "Makeup organizer bag", image: "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?w=500", discount: 41 },
  { id: 415, name: "Diaper Bag", price: 2999, originalPrice: 4400, description: "Baby diaper bag", image: "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?w=500", discount: 32 },

  // Jewelry (15 products)
  { id: 416, name: "Gold Earrings", description: "Gold-plated earrings", price: 1899, originalPrice: 2900, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500", discount: 34 },
  { id: 417, name: "Silver Earrings", price: 1499, originalPrice: 2300, description: "Silver stud earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500", discount: 35 },
  { id: 418, name: "Jhumka Earrings", price: 1299, originalPrice: 2000, description: "Traditional jhumka", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500", discount: 35 },
  { id: 419, name: "Necklace Set", price: 2799, originalPrice: 4100, description: "Necklace with earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500", discount: 32 },
  { id: 420, name: "Gold Necklace", price: 3499, originalPrice: 5200, description: "Gold chain necklace", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500", discount: 33 },
  { id: 421, name: "Silver Necklace", price: 2499, originalPrice: 3700, description: "Silver pendant necklace", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500", discount: 32 },
  { id: 422, name: "Bracelet", price: 999, originalPrice: 1600, description: "Silver bracelet", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500", discount: 38 },
  { id: 423, name: "Gold Bangle", price: 2199, originalPrice: 3300, description: "Gold-plated bangle", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500", discount: 33 },
  { id: 424, name: "Ring", price: 899, originalPrice: 1500, description: "Fashion ring", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500", discount: 40 },
  { id: 425, name: "Engagement Ring", price: 4999, originalPrice: 7500, description: "Diamond engagement ring", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500", discount: 33 },
  { id: 426, name: "Wedding Ring", price: 3999, originalPrice: 6000, description: "Gold wedding band", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500", discount: 33 },
  { id: 427, name: "Anklet", price: 799, originalPrice: 1300, description: "Silver anklet", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500", discount: 38 },
  { id: 428, name: "Nose Pin", price: 399, originalPrice: 700, description: "Gold nose pin", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500", discount: 43 },
  { id: 429, name: "Brooch", price: 699, originalPrice: 1200, description: "Fashion brooch", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500", discount: 42 },
  { id: 430, name: "Hair Jewelry", price: 599, originalPrice: 1000, description: "Hair pins set", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500", discount: 40 },

  // Watches (10 products)
  { id: 431, name: "Wrist Watch", description: "Elegant wrist watch", price: 3999, originalPrice: 5500, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500", discount: 27 },
  { id: 432, name: "Sports Watch", price: 3299, originalPrice: 4800, description: "Digital sports watch", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500", discount: 31 },
  { id: 433, name: "Smart Watch", price: 8999, originalPrice: 13000, description: "Fitness smart watch", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500", discount: 31 },
  { id: 434, name: "Luxury Watch", price: 15999, originalPrice: 22000, description: "Premium luxury watch", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500", discount: 27 },
  { id: 435, name: "Women's Watch", price: 3499, originalPrice: 5200, description: "Stylish women's watch", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500", discount: 33 },
  { id: 436, name: "Men's Watch", price: 4499, originalPrice: 6500, description: "Classic men's watch", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500", discount: 31 },
  { id: 437, name: "Couple Watch Set", price: 6999, originalPrice: 10000, description: "His and hers watches", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500", discount: 30 },
  { id: 438, name: "Leather Strap Watch", price: 3799, originalPrice: 5600, description: "Watch with leather strap", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500", discount: 32 },
  { id: 439, name: "Metal Strap Watch", price: 4299, originalPrice: 6300, description: "Watch with metal strap", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500", discount: 32 },
  { id: 440, name: "Watch Box", price: 1499, originalPrice: 2400, description: "Watch storage box", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500", discount: 38 },

  // Sunglasses & Eyewear (5 products)
  { id: 441, name: "Aviator Sunglasses", description: "Classic aviator style", price: 1899, originalPrice: 2900, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500", discount: 34 },
  { id: 442, name: "Wayfarer Sunglasses", price: 1699, originalPrice: 2600, description: "Trendy wayfarer", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500", discount: 35 },
  { id: 443, name: "Round Sunglasses", price: 1599, originalPrice: 2500, description: "Vintage round frames", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500", discount: 36 },
  { id: 444, name: "Cat Eye Sunglasses", price: 1799, originalPrice: 2800, description: "Feminine cat eye", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500", discount: 36 },
  { id: 445, name: "Sports Sunglasses", price: 2199, originalPrice: 3300, description: "Performance sports glasses", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500", discount: 33 },



  // Hats & Caps (5 products)
  { id: 451, name: "Baseball Cap", description: "Adjustable baseball cap", price: 899, originalPrice: 1500, image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500", discount: 40 },
  { id: 452, name: "Beanie Hat", price: 799, originalPrice: 1300, description: "Warm winter beanie", image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500", discount: 38 },
  { id: 453, name: "Sun Hat", price: 1299, originalPrice: 2000, description: "Wide brim sun hat", image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500", discount: 35 },
  { id: 454, name: "Fedora Hat", price: 1899, originalPrice: 2900, description: "Stylish fedora", image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500", discount: 34 },
  { id: 455, name: "Trucker Cap", price: 699, originalPrice: 1200, description: "Mesh trucker cap", image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500", discount: 42 },

  // Belts (5 products)
  { id: 456, name: "Leather Belt", description: "Genuine leather belt", price: 1499, originalPrice: 2300, image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500", discount: 35 },
  { id: 457, name: "Women's Belt", price: 1299, originalPrice: 2000, description: "Fashion belt for women", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500", discount: 35 },
  { id: 458, name: "Men's Belt", price: 1599, originalPrice: 2500, description: "Formal belt for men", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500", discount: 36 },
  { id: 459, name: "Canvas Belt", price: 899, originalPrice: 1500, description: "Casual canvas belt", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500", discount: 40 },
  { id: 460, name: "Chain Belt", price: 1199, originalPrice: 1900, description: "Fashion chain belt", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500", discount: 37 },
]
  };
    // URL se categoryName lo aur uske products set karo
    const decodedCategory = decodeURIComponent(categoryName);
    const categoryProducts = allProducts[decodedCategory] || [];
    setProducts(categoryProducts);
    
    // Page title update karo
    document.title = `${getCategoryTitle(decodedCategory)} - KHAN CLOTHING`;
  }, [ categoryName]);

  const getCategoryTitle = (category) => {
    const titles = {
      "womens-fashion": "Women's Fashion",
      "mens-collection": "Men's Collection",
      "kids-wear": "Kids Wear",
      "accessories": "Accessories"
    };
    return titles[category] || category;
  };

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  if (products.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">No Products Found</h2>
          <button 
            onClick={() => navigate('/')}
            className="bg-gray-900 text-white px-6 py-2 rounded-lg"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate(-1)}
              className="text-gray-600 hover:text-gray-900"
            >
              <FaArrowLeft size={20} />
            </button>
            <h1 className="text-2xl font-bold">{getCategoryTitle(categoryName)}</h1>
            <span className="text-gray-500 ml-auto">{products.length} Products</span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    -{product.discount}%
                  </div>
                )}

                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={() => navigate("/signup")}
                    className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-900 hover:text-white transition-colors shadow-lg"
                  >
                    Add to Cart
                  </button>
                  <button 
                    onClick={() => toggleWishlist(product.id)}
                    className={`bg-white p-2 rounded-full shadow-lg transition-colors ${
                      wishlist.includes(product.id) ? 'text-red-500' : 'text-gray-900 hover:text-red-500'
                    }`}
                  >
                    <FaHeart />
                  </button>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold">Rs.{product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-gray-400 line-through text-sm">Rs.{product.originalPrice.toLocaleString()}</span>
                      <span className="text-green-600 text-sm font-semibold">
                        Save Rs.{(product.originalPrice - product.price).toLocaleString()}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;