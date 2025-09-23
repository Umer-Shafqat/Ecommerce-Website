import logo_1 from './logo_1.png';
import location_logo from './location_logo.png'
import search_icon from './search_icon.png'
import cart_icon from './cart_icon.png'
import mainpic from './mainpic.png'
import box1 from './box1.jpg'
import box2 from './box2.jpg'
import box3 from './box3.jpg'
import box4 from './box4.jpg'
import box5 from './box5.jpg'
import box6 from './box6.jpg'
import box7 from './box7.jpeg'
import box8 from './box8.jpg'
import appliance1 from './appliance1.webp'
import appliance2 from './appliance2.webp'
import appliance3 from './appliance3.webp'
import appliance4 from './appliance4.webp'
import appliance5 from './appliance5.webp'
import appliance6 from './appliance6.webp'
import appliance7 from './appliance7.webp'
import appliance8 from './appliance8.webp'
import appliance9 from './appliance9.webp'
import appliance10 from './appliance10.webp'
import baby1 from './baby1.webp'
import baby2 from './baby2.webp'
import baby3 from './baby3.webp'
import blender from './blender.webp'
import book1 from './book1.webp'
import book2 from './book2.webp'
import book3 from './book3.webp'
import book4 from './book4.webp'
import book5 from './book5.webp'
import book6 from './book6.webp'
import book7 from './book7.webp'
import book8 from './book8.webp'
import book9 from './book9.webp'
import book10 from './book10.webp'
import brush from './brush.webp'
import candle from './candle.webp'
import chickenmate from './chickenmate.webp'
import chickenshredder from './chickenshredder.webp'
import coffee from './coffee.webp'
import decor1 from './decor1.webp'
import decor2 from './decor2.webp'
import decor3 from './decor3.webp'
import decor4 from './decor4.webp'
import decor5 from './decor5.webp'
import decor6 from './decor6.webp'
import decor7 from './decor7.jpg'
import decor8 from './decor8.jpg'
import decor9 from './decor9.jpg'
import decor10 from './decor10.jpg'
import digitalthermo from './digitalthermo.webp'
import DNA from './DNA.webp'
import echodot from './echodot.webp'
import fan from './fan.webp'
import food from './food.webp'
import footmassager from './footmassager.webp'
import gaming1 from './gaming1.webp'
import gaming2 from './gaming2.webp'
import gaming3 from './gaming3.webp'
import gaming4 from './gaming4.webp'
import gaming5 from './gaming5.webp'
import gaming6 from './gaming6.webp'
import gaming7 from './gaming7.webp'
import gaming8 from './gaming8.webp'
import gaming9 from './gaming9.webp'
import gaming10 from './gaming10.webp'
import laptop1 from './laptop1.webp'
import laptop2 from './laptop2.webp'
import laptop3 from './laptop3.webp'
import laptop4 from './laptop4.webp'
import laptop5 from './laptop5.webp'
import laptop6 from './laptop6.webp'
import laptop7 from './laptop7.webp'
import laptop8 from './laptop8.webp'
import laptop9 from './laptop9.webp'
import laptop10 from './laptop10.webp'
import legmassager from './legmassager.jpg'
import lushion from './lushion.jpg'
import manshirt1 from './manshirt1.webp'
import manshirt2 from './manshirt2.webp'
import manshirt3 from './manshirt3.webp'
import manshirt4 from './manshirt4.webp'
import manshirt5 from './manshirt5.webp'
import mouthwasher from './mouthwasher.webp'
import neck from './neck.webp'
import papertowel from './papertowel.webp'
import repair from './repair.jpg'
import veken from './veken.webp'
import women1 from './women1.webp'
import women2 from './women2.webp'


export const assests = {
  logo_1,
  location_logo,
  search_icon,
  cart_icon,
  mainpic,
  box1,
  box2,
  box3,
  box4,
  box5,
  box6,
  box7,
  box8,
};

export const item_list = [
  { id: 1, box_name: "Health & Personal Care", box_img: box1 },
  { id: 2, box_name: "Refresh your space",      box_img: box2 },
  { id: 3, box_name: "Books",                   box_img: box3 },
  { id: 4, box_name: "Shop Fashion for trend",  box_img: box4 },
  { id: 5, box_name: "Appliance",               box_img: box5 },
  { id: 6, box_name: "Gaming Categories",       box_img: box6 },
  { id: 7, box_name: "Laptop need for everyone", box_img: box7 },
  { id: 8, box_name: "Warm & welcoming decor",  box_img: box8 },
];

export const display_items =[
  {
        _id:"1",
        name : "Perricone MD",
        image : lushion,
        price: 35.98,
        description: "Perricone MD High Potency Hyaluronic Intensive Body Therapy, 6 fl. oz.",
        category: "Health & Personal Care", 
  },
    {
        _id:"2",
        name : "Leg Massager",
        image : legmassager,
        price: 23.34,
        description: "Leg Massager with Heat and Compression, Foot Calf & Thigh Massage.",
        category: "Health & Personal Care", 
  },
    {
        _id:"3",
        name : "Foot Massager",
        image : footmassager,
        price: 31.54,
        description: "Nekteck Shiatsu Foot Massager with Heat, Deep Kneading Therapy.",
        category: "Health & Personal Care", 
  },
    {
        _id:"4",
        name : "Mouthwash",
        image : mouthwasher,
        price: 8.34,
        description: "Mouthwash Travel Size,Alcohol & Fluoride Free Fresh mouth.",
        category: "Health & Personal Care", 
  },  
  {
        _id:"5",
        name : "Digital Thermometer",
        image : digitalthermo,
        price: 9.99,
        description: "Digital Thermometer for Adults and Kids, Forehead No-Touch Thermometer with Fever Alarm.",
        category: "Health & Personal Care", 
  },  
  {
        _id:"6",
        name : "Heating Pad",
        image : neck,
        price: 20.43,
        description: "NIUONSIX Heating Pad for Neck and Shoulders and Back.",
        category: "Health & Personal Care", 
  },
    {
        _id:"7",
        name : "Salmon DNA",
        image : DNA,
        price: 5.65,
        description: "Salmon DNA PDRN Anti-Aging Serum, 5000ppm Salmon Egg DNA Ampoule, 2000ppm.",
        category: "Health & Personal Care", 
  },
    {
        _id:"8",
        name : "Intensive Repair Serum",
        image : repair,
        price: 17.76,
        description: "Intensive Repair Serum, 15%Hyaluronic Acid for Sensitive Skin Anti Aging Ultra Hydrating Serum for Face Calming Barrier Repair Redness Relief with Ceramides Centella 30Vials Daily Travel Care.",
        category: "Health & Personal Care", 
  },  
  {
        _id:"9",
        name : "leg Massage",
        image : legmassager,
        price: 23.54,
        description: "Leg Massager with Heat and Air Compression, Foot Calf & Thigh Massage for Circulation and Pain Relief, Sequential Compression Device for Swollen Legs, 3 Intensities 6 Modes - FSA HSA Eligible",
        category: "Health & Personal Care", 
  },  
  {
        _id:"10",
        name : "Toothbrushes",
        image : brush,
        price: 4.00,
        description: "Cleaings® Mini Brushes-Disposable Toothbrushes with Toothpaste and Pick for Work or Travel, 24 Count (Mint Flavor（Pack of 1）).",
        category: "Health & Personal Care", 
  },  
  {
        _id:"11",
        name : "Veken Rustproof & Waterproof Shower",
        image : veken,
        price: 31.45,
        description: "Veken Rustproof & Waterproof Shower Caddy 6-Pack, No Drilling Adhesive Shelves Rack.",
        category: "Refresh your space", 
  },
    {
        _id:"12",
        name : "Chicken Shredder",
        image : chickenshredder,
        price: 23.67,
        description: "Chicken Shredder Tool Twist for Kitchen, Manual Chicken Breast Grinder Machine.",
        category: "Refresh your space", 
  },
    {
        _id:"13",
        name : "Ceiling Fans",
        image : fan,
        price: 16.45,
        description: "Ceiling Fans with Lights, 52 Inch Black Ceiling Fan with Light and Remote 3 Color 6 Speed Adjustable.",
        category: "Refresh your space", 
  },
    {
        _id:"14",
        name : "Amazon Echo Dot",
        image : echodot,
        price: 56.65,
        description: "Amazon Echo Dot (newest model), Vibrant sounding Alexa speaker, Deep Sea Blue.",
        category: "Refresh your space", 
  }, 
   {
        _id:"15",
        name : "Paper Towel Holder",
        image : papertowel,
        price: 5.55,
        description: "Paper Towel Holder - Self-Adhesive or Drilling,Upgraded Aluminum Kitchen Roll Dispenser.",
        category: "Refresh your space", 
  }, 
   {
        _id:"16",
        name : "StepRite Kitchen Mats",
        image : chickenmate,
        price: 76.54,
        description: "StepRite Kitchen Mats, 2PCS Kitchen Rugs, Cushioned Anti Fatigue Kitchen Mats for Floor.",
        category: "Refresh your space", 
  }, 
  
  {
        _id:"17",
        name : "K-Cup Pod Coffee",
        image : coffee,
        price: 46.34,
        description: "Keurig K-Mini Single Serve K-Cup Pod Coffee Maker, 6 to 12oz Brew size.",
        category: "Refresh your space", 
  },
    {
        _id:"18",
        name : " Bullet Blender",
        image : blender,
        price: 17.45,
        description: "Magic Bullet Blender, Small, Silver, 11 Piece Set.",
        category: "Refresh your space", 
  },
    {
        _id:"19",
        name : "Food Kitchen",
        image : food,
        price: 45.34,
        description: "Etekcity Food Kitchen Scale, Digital Grams and Ounces for Weight Loss, Baking, Cooking, Keto and Meal Prep",
        category: "Refresh your space", 
  },
    {
        _id:"20",
        name : "Mini Brushes-Disposable",
        image : candle,
        price: 31.34,
        description: "Hand-poured soy wax candle with calming essential oils for a clean, long-lasting burn. Perfect for creating a cozy, relaxing atmosphere in any room.",
        category: "Refresh your space", 
  },
    {
        _id:"21",
        name : "The Fallen and the Kiss of Dusk (Crowns of Nyaxia Book 4)",
        image : book1,
        price: 4.56,
        description: "The Fallen and the Kiss of Dusk (Crowns of Nyaxia Book 4)",
        category: "Books", 
  },
    {
        _id:"22",
        name : "The First Witch of Boston: A Novel .",
        image : book2,
        price: 3.76,
        description: "The First Witch of Boston: A Novel.",
        category: "Books", 
  },
    {
        _id:"23",
        name : "One Nation Always Under God: Profiles in Christian Courage",
        image : book3,
        price: 6.56,
        description: "One Nation Always Under God: Profiles in Christian Courage",
        category: "Books", 
  },
    {
        _id:"24",
        name : "The Night Before Kindergarten",
        image : book4,
        price: 9.00,
        description: "The Night Before Kindergarten",
        category: "Books", 
  }, 
   {
        _id:"25",
        name : "Reckoning Hour (Dean Lincoln Legal Thriller Book 1)",
        image : book5,
        price: 3.54,
        description: "Reckoning Hour (Dean Lincoln Legal Thriller Book 1)",
        category: "Books", 
  },
    {
        _id:"26",
        name : "The Boomerang: A Thriller.",
        image : book6,
        price: 6.96,
        description: "The Boomerang: A Thriller.",
        category: "Books", 
  },
    {
        _id:"27",
        name : "Abscond: A Short Story",
        image : book7,
        price: 17.9,
        description: "Abscond: A Short Story",
        category: "Books", 
  },
    {
        _id:"28",
        name : "James (Pulitzer Prize Winner): A Novel",
        image : book8,
        price: 11.56,
        description: "James (Pulitzer Prize Winner): A Novel.",
        category: "Books", 
  },
    {
        _id:"29",
        name : "The Let Them Theory: A Life-Changing Tool That Millions of People Can't Stop Talking About",
        image : book9,
        price: 13.65,
        description: "The Let Them Theory: A Life-Changing Tool That Millions of People Can't Stop Talking About",
        category: "Books", 
  },
    {
        _id:"30",
        name : "The Idaho Four: An American Tragedy",
        image : book10,
        price: 23.76,
        description: "The Idaho Four: An American Tragedy.",
        category: "Books", 
  },
    {
        _id:"31",
        name : " Mens Polo Shirts",
        image : manshirt1,
        price: 23.43,
        description: "PJ PAUL JONES Mens Polo Shirts Regular Fit Textured V-Neck Knit Golf Polos",
        category: "Shop Fashion for trend", 
  },
    {
        _id:"32",
        name : "Mens Casual Polo",
        image : manshirt2,
        price: 17.76,
        description: "JMIERR Mens Casual Polo Shirt Summer Short Sleeve Vacation Button Beach Knit Stretchy Golf Shirts",
        category: "Shop Fashion for trend", 
  },
    {
        _id:"33",
        name : "Mens Sweat Shorts",
        image : manshirt3,
        price: 15.99,
        description: "JMIERR Mens Sweat Shorts Casual Stretch Elastic Waist Waffle Workout Gym Short 7 inch Inseam Running Shots.",
        category: "Shop Fashion for trend", 
  }, 
   {
        _id:"34",
        name : "Men's Track Suits",
        image : manshirt4,
        price: 23.54,
        description: "Vssjavun Men's Track Suits 2 Piece Outfits Casual Short Sleeve Shirt and Shorts Set Sweatsuit Summer Tracksuit",
        category: "Shop Fashion for trend", 
  },
    {
        _id:"35",
        name : "Womens Two Piece Outfits Sweater",
        image : women1,
        price: 22.00,
        description: "PRETTYGARDEN Womens Two Piece Outfits Sweater Sets Knit Pullover Tops And High Waisted Pants Matching Track Suits Set.",
        category: "Shop Fashion for trend", 
  },
    {
        _id:"36",
        name : "ATHMILE Women's Puff Short Sleeve",
        image : women2,
        price: 31.54,
        description: "ATHMILE Women's Puff Short Sleeve Sweater Tops 2025 Spring Summer Fall Trendy Casual T Shirts Blouses.",
        category: "Shop Fashion for trend", 
  },
    {
        _id:"37",
        name : "Baby Girl Boy Sweater",
        image : baby1,
        price: 12.65,
        description: "FYBITBO Baby Girl Boy Sweater Knit Oversized Pullover Sweatshirt Romper Onesie Warm Fall Winter Clothes Outfit Newborn.",
        category: "Shop Fashion for trend", 
  },
    {
        _id:"38",
        name : "Solid Color Baby Long Sleeve",
        image : baby2,
        price: 32.61,
        description: "Lovely Solid Color Baby Long Sleeve Jumpsuit baby girl bodysuit",
        category: "Shop Fashion for trend", 
  },
    {
        _id:"39",
        name : "Winter Knit Baby Hat ",
        image : baby3,
        price: 27.89,
        description: "JANGANNSA Winter Knit Baby Hat Twist Warm Beanie for Boys Girls Infant Toddler Baby Beanie with Pompom.",
        category: "Shop Fashion for trend", 
  },
    {
        _id:"40",
        name : "Sweater Mens",
        image : manshirt5,
        price: 32.43,
        description: "GURUNVANI Patchwork Sweater Mens Colorblock Jumper Cable Knitted Pullover Oversized.",
        category: "Shop Fashion for trend", 
  },
    {
        _id:"41",
        name : "Paris Hilton Air Fryer",
        image : appliance1,
        price: 23.54,
        description: "Paris Hilton Air Fryer, Large 6-Quart Capacity, Nonstick Made without PFAS, Touchscreen Display, 8-in-1.",
        category: "Appliance", 
  },
    {
        _id:"42",
        name : "Mini Electric Can Opener",
        image : appliance2,
        price: 43.00,
        description: "Kitchen Mama Mini Electric Can Opener Smooth Edge: Opens Can with One Press.",
        category: "Appliance", 
  },
    {
        _id:"43",
        name : "Vegetable Chopper and Spiralizer",
        image : appliance3,
        price: 41.99,
        description: "Fullstar The Original Pro Chopper - Vegetable Chopper and Spiralizer, Food Chopper with Container,",
        category: "Appliance", 
  },
    {
        _id:"44",
        name : "portable steam cleaner for tile",
        image : appliance4,
        price: 66.15,
        description: "BISSELL® Steam Shot™ OmniReach handheld portable steam cleaner for tile,fabric steaming tool,includes 10.",
        category: "Appliance", 
  },
    {
        _id:"45",
        name : " Electric Sandwich Maker",
        image : appliance5,
        price: 34.23,
        description: "OVENTE Electric Sandwich Maker with Non-Stick Plates, Indicator Lights, Cool Touch Handle, Easy to Clean and Store.",
        category: "Appliance", 
  },
    {
        _id:"46",
        name : "Electric Griddle with Warming Tray",
        image : appliance6,
        price: 15.99,
        description: "bella Electric Griddle with Warming Tray - Smokeless Indoor Grill, Copper/Black",
        category: "Appliance", 
  }, 
   {
        _id:"47",
        name : "Smart Scale for Body Weight",
        image : appliance7,
        price: 76.23,
        description: "Etekcity Smart Scale for Body Weight, Bathroom Digital Weighing Scale with BMI, Body Fat.",
        category: "Appliance", 
  },
    {
        _id:"48",
        name : "Vakumar Liquid Vacuum Sealer Machine",
        image :appliance8,
        price: 43.54,
        description: "Vakumar Liquid Vacuum Sealer Machine, 90Kpa Vacuum Sealer Machine Preservation Dry/Moist/Liquid Modes, LED Indicator Light.",
        category: "Appliance", 
  },
    {
        _id:"49",
        name : "Ninja Fit Compact Personal Blender",
        image : appliance9,
        price: 65.45,
        description: "Ninja Fit Compact Personal Blender,700-Watt Base, (2) 16-oz. Cups and Spout Lids, Black QB3001SS.",
        category: "Appliance", 
  },
    {
        _id:"50",
        name : "Cord Organizer for Appliances",
        image : appliance10,
        price: 49.54,
        description: "Cord Organizer for Appliances, 4PCS Kitchen Appliance Cord Winder Cable Organizer.",
        category: "Appliance", 
  },
    {
        _id:"51",
        name : "Nintendo Switch™ ",
        image : gaming1,
        price: 8.89,
        description: "Nintendo Switch™ with Neon Blue and Neon Red Joy‑Con™.",
        category: "Gaming Categories", 
  },
    {
        _id:"52",
        name : "Meta Quest",
        image : gaming2,
        price: 9.87,
        description: "Meta Quest 2 128GB - Advanced All-in-One Virtual Reality Headset (Renewed).",
        category: "Gaming Categories", 
  },
    {
        _id:"53",
        name : "Xbox",
        image : gaming3,
        price: 15.99,
        description: "Xbox One S 1TB All-Digital Console with Xbox One Wireless Controller (Renewed).",
        category: "Gaming Categories", 
  },
    {
        _id:"54",
        name : " Gaming Headset for PC",
        image : gaming4,
        price: 11.11,
        description: "2.4GHz Wireless Gaming Headset for PC, Ps5, Ps4 - Lossless Audio USB & Type-C Ultra Stable Gaming Headphone.",
        category: "Gaming Categories", 
  },
    {
        _id:"55",
        name : "GGaming Keyboard and Mouse and Mouse pad and Gaming Headset",
        image : gaming5,
        price: 31.23,
        description: "Gaming Keyboard and Mouse and Mouse pad and Gaming Headset, Wired LED and PS4 Users - 4 in 1 Edition Hornet RX-250.",
        category: "Gaming Categories", 
  },
    {
        _id:"56",
        name : "Gaming Keyboard ",
        image : gaming6,
        price: 21.23,
        description: "AULA F2088 Typewriter Style Mechanical Gaming Keyboard Blue Switches,Rainbow LED Backlit.",
        category: "Gaming Categories", 
  },
    {
        _id:"57",
        name : "Gaming Mouse",
        image : gaming7,
        price: 34.43,
        description: "Redragon Gaming Mouse, MMO Mouse Gaming UP 12400 DPI, 19 Macro Programmable Buttons.",
        category: "Gaming Categories", 
  }, 
   {
        _id:"58",
        name : "Gaming Chair",
        image : gaming8,
        price: 15.99,
        description: "Gaming Chair,Ergonomic Massage Computer Office Desk Chair with Footrest,Pocket Spring Cushion,Reclining Leather Adjustable Gamer Chair with Headrest and Lumbar Support,Purple",
        category: "Gaming Categories", 
  },
    {
        _id:"59",
        name : "PlayStation 4",
        image : gaming9,
        price: 12.21,
        description: "Sony PlayStation 4 Console 1TB - Black (Renewed).",
        category: "Gaming Categories", 
  },
    {
        _id:"60",
        name : "Gamer Novelty Funny T Shirt.",
        image : gaming10,
        price: 32.54,
        description: "I Paused My Game to Be Here Graphic Tees Men Gaming Gamer Novelty Funny T Shirt.",
        category: "Gaming Categories", 
  },
    {
        _id:"61",
        name : "15.6 Inch Laptop",
        image : laptop1,
        price: 23.43,
        description: "15.6 Inch Laptop, Win 11 Laptop Computer with 16GB RAM 1TB SSD, 6500mAh.",
        category: "Laptop need for everyone", 
  },
    {
        _id:"62",
        name : "THEYETI 2 in 1 Laptop Convertible",
        image : laptop2,
        price: 45.78,
        description: "THEYETI 2 in 1 Laptop Convertible 15.6 Inch (16GB RAM, 1TB SSD), i3-1215U 6-Core Processor(Up to 4.4Ghz).",
        category: "Laptop need for everyone", 
  },
    {
        _id:"63",
        name : "Lenovo Laptop Bag ",
        image : laptop3,
        price: 34.65,
        description: "Lenovo Laptop Bag T210, Messenger Shoulder Bag for Laptop or Tablet, Sleek, Durable & Water-Repellent Fabric.",
        category: "Laptop need for everyone", 
  },
    {
        _id:"64",
        name : "Laptop Tray",
        image : laptop4,
        price: 15.99,
        description: "Laptop Tray - Lap Tray with Cushion, Laptop Table for Bed & Sofa, Adjustable Lap Desk, Ergonomic Wooden Stand .",
        category: "Laptop need for everyone", 
  }, 
   {
        _id:"65",
        name : "HP Stream 14 HD BrightView Laptop",
        image : laptop5,
        price: 56.36,
        description: "HP Stream 14 HD BrightView Laptop, Intel Celeron N4120, 16GB RAM, 288GB Storage.",
        category: "Laptop need for everyone", 
  },
    {
        _id:"66",
        name : "2 in 1 Laptop Computers Windows 11",
        image : laptop6,
        price: 23.45,
        description: "2 in 1 Laptop Computers Windows 11, 11.6 inch Touchscreen Laptop Tablet, 4GB RAM 256 GB SSD.",
        category: "Laptop need for everyone", 
  },
    {
        _id:"67",
        name : "Waterproof Leather Laptop",
        image : laptop7,
        price: 73.36,
        description: "Leather Mens Messenger Bag Vintage 15.6 Inch Waterproof Leather Laptop Briefcase Satchel Shoulder Bag Computer Laptop Bag Coffee.",
        category: "Laptop need for everyone", 
  },
    {
        _id:"68",
        name : "ASUS Chromebook C203XA ",
        image : laptop8,
        price: 55.43,
        description: "ASUS Chromebook C203XA Rugged & Spill Resistant Laptop, 11.6 HD, 180 Degree, MediaTek Quad-Core Processor.",
        category: "Laptop need for everyone", 
  },
    {
        _id:"69",
        name : "PC Mac Phone",
        image : laptop9,
        price: 23.45,
        description: "WGK Portable Monitor Narrow Edge 17.3” 1080P FHD 144Hz USB-C HDMI Gaming PC IPS HDR Screen for Travel PC Mac Phone Xbox PS5 Switch Laptop with Smart Cover and Built-in Speakers.",
        category: "Laptop need for everyone", 
  },
    {
        _id:"70",
        name : "Unisex Laptop Tote Backpack",
        image : laptop10,
        price: 54.34,
        description: "Unisex Laptop Tote Backpack Convertible Lightweight Durable Stylish Everyday Shoulder Tote bag Backpack with Water Bottle Pocket Work Travel, Black.",
        category: "Laptop need for everyone", 
  }, 
   {
        _id:"71",
        name : "Welcome Porch Sign Decor Wooden",
        image : decor1,
        price: 15.99,
        description: "Welcome Porch Sign Decor Wooden Hanging Sign Door Porch Standing Decorative Signs Plaques for Front Door.",
        category: "Warm & welcoming decor", 
  }, 
   {
        _id:"72",
        name : "3 Pcs Mason Jar",
        image : decor2,
        price: 11.11,
        description: "3 Pcs Mason Jar Centerpiece Table Decorations for Dining Table Coffee Table Decor with Wood Tray.",
        category: "Warm & welcoming decor", 
  },
    {
        _id:"73",
        name : "Trap Door Indoor and Outdoor",
        image : decor3,
        price: 13.32,
        description: "Bestcustom Definitely Not A Trap Door Indoor and Outdoor (Indoor & Outdoor 24x16).",
        category: "Warm & welcoming decor", 
  },
    {
        _id:"74",
        name : "Boho Tassel Garland Western Decor",
        image : decor4,
        price: 15.45,
        description: "Boho Tassel Garland Western Decor Terracotta Rainbow Tassel for Graduation Back to School Home Nursery Decorations.",
        category: "Warm & welcoming decor", 
  },
    {
        _id:"75",
        name : "Large Wall Clock",
        image : decor5,
        price: 10.21,
        description: "Large Wall Clock –30 Inch Farmhouse Clock -Extra Large 30 Inch Wood and Metal Wall Clock.",
        category: "Warm & welcoming decor", 
  },
    {
        _id:"76",
        name : "Personalized Teacher Door Sign",
        image : decor6,
        price: 21.89,
        description: "Personalized Teacher Door Sign in This Classroom You are Teacher Door Signs Classroom Welcome Wreath Personalized Teacher Wall Decor Sign Back To School Gifts for Teachers Must have.",
        category: "Warm & welcoming decor", 
  },
    {
        _id:"77",
        name : "CLXEAST 30 Inch Large Wall Clock Modern",
        image : decor7,
        price: 19.00,
        description: "CLXEAST 30 Inch Large Wall Clock Modern, Oversized Roman Numeral Decorative Black Metal Wall Clock for Living Room Decor,House Warming Gifts New Home.",
        category: "Warm & welcoming decor", 
  },
    {
        _id:"78",
        name : "Antique Tower 30 inch Large Roman Numeral Wall Clock",
        image : decor8,
        price: 43.23,
        description: "Antique Tower 30 inch Large Roman Numeral Wall Clock, Indoor Outdoor Patio Waterproof Oversized Decorative Contemporary Clock, Antique Black Metal Wall Clock Battery Operated Retro Art Hanging Clock.",
        category: "Warm & welcoming decor", 
  },
    {
        _id:"79",
        name : "Wall Clock,Large Gold Decorative Clock for Living Room",
        image : decor9,
        price: 23.22,
        description: "Wall Clock,Large Gold Decorative Clock for Living Room,Silent Non Ticking Clock with Pendulum,Battery Operated Oversized Modern Wall Art for Bedroom,Farmhouse,Office Wall Decor / 27.9 * 16.5 Inch.",
        category: "Warm & welcoming decor", 
  },
    {
        _id:"80",
        name : "CLXEAST 24 Inch Wall Clock",
        image : decor10,
        price: 33.33,
        description: "CLXEAST 24 Inch Wall Clock with Moving Gears,Oversized Large Industrial Steampunk Clock, Antique Gold Metal Roman Numeral Wall Clocks for Farmhouse Living Room Decor.",
        category: "Warm & welcoming decor", 
  }
]