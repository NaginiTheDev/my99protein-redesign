// Demo content for the my99protein redesign — a healthy meal-prep delivery
// service in the Kansas City metro. Meal names + images are the brand's real
// catalogue (Shopify CDN), curated for the demo.

export type Meal = {
  name: string;
  price: number;
  category: "Lunch & Dinner" | "Breakfast";
  tags: string[];
  img: string;
  protein: number; // grams, illustrative
  calories: number;
};

export const MEALS: Meal[] = [
  { name: "Chop Chop Chicken", price: 11.99, category: "Lunch & Dinner", tags: ["High Protein"], img: "https://cdn.shopify.com/s/files/1/2683/9412/files/chop-chop-chicken.png", protein: 42, calories: 480 },
  { name: "Baked Cheesy Chicken Mac", price: 11.99, category: "Lunch & Dinner", tags: ["Comfort"], img: "https://cdn.shopify.com/s/files/1/2683/9412/files/BAKED-CHEESY-CHICKEN-MAC-1_e729e58d-7a78-4451-ba5f-b67f0f16eb1c.png", protein: 38, calories: 560 },
  { name: "Crispy Orange Chicken", price: 11.99, category: "Lunch & Dinner", tags: ["High Protein"], img: "https://cdn.shopify.com/s/files/1/2683/9412/files/crispy-orange-chicken.png", protein: 40, calories: 520 },
  { name: "Chicken Soft Tacos", price: 11.99, category: "Lunch & Dinner", tags: ["High Protein"], img: "https://cdn.shopify.com/s/files/1/2683/9412/files/CHICKEN-SOFT-TACOS-1.png", protein: 36, calories: 500 },
  { name: "KETO Creamy Cajun Chicken", price: 9.99, category: "Lunch & Dinner", tags: ["Keto"], img: "https://cdn.shopify.com/s/files/1/2683/9412/files/keto-cajun-chicken.png", protein: 44, calories: 460 },
  { name: "Honey Dijon Chicken", price: 11.99, category: "Lunch & Dinner", tags: ["Paleo"], img: "https://cdn.shopify.com/s/files/1/2683/9412/files/honey-dijon-chicken-1.png", protein: 41, calories: 470 },
  { name: "Balsamic Chicken", price: 11.99, category: "Lunch & Dinner", tags: ["Paleo", "Keto"], img: "https://cdn.shopify.com/s/files/1/2683/9412/files/balsamic-chicken.png", protein: 43, calories: 450 },
  { name: "Shepherd's Pie", price: 11.99, category: "Lunch & Dinner", tags: ["Comfort"], img: "https://cdn.shopify.com/s/files/1/2683/9412/files/sheppards-pie.png", protein: 35, calories: 540 },
  { name: "Steak & Egg Breakfast Burrito", price: 8.99, category: "Breakfast", tags: ["High Protein"], img: "https://cdn.shopify.com/s/files/1/2683/9412/files/steak-and-egg-breakfast-burrito.png", protein: 32, calories: 430 },
  { name: "KFC Bowl", price: 11.99, category: "Breakfast", tags: ["High Protein"], img: "https://cdn.shopify.com/s/files/1/2683/9412/files/kentucky-fried-chicken-bowl.png", protein: 39, calories: 510 },
  { name: "Sausage McGriddles", price: 8.29, category: "Breakfast", tags: ["Comfort"], img: "https://cdn.shopify.com/s/files/1/2683/9412/files/sausage-mcgriddles.png", protein: 28, calories: 440 },
  { name: "Breakfast Burrito Bowl", price: 8.99, category: "Breakfast", tags: ["Keto"], img: "https://cdn.shopify.com/s/files/1/2683/9412/files/breakfast-burrito-bowl.png", protein: 30, calories: 410 },
  { name: "Philly Steak Egg & Cheese", price: 8.99, category: "Breakfast", tags: ["High Protein"], img: "https://cdn.shopify.com/s/files/1/2683/9412/files/philly-steak-egg-and-cheese.png", protein: 34, calories: 460 },
];

export const PLANS = [
  { name: "High Protein 5-Day", price: 129.99, meals: 5, blurb: "Five chef-cooked high-protein lunches or dinners, delivered weekly.", featured: false },
  { name: "The $99 Starter", price: 99, meals: 5, blurb: "Our most popular way to start — a full week of meals for $99.", featured: true },
  { name: "Gluten Free 5-Day", price: 139.99, meals: 5, blurb: "Five gluten-free meals, hand-prepared with clean ingredients.", featured: false },
  { name: "7 Day Full Reset", price: 161.99, meals: 7, blurb: "A meal for every day of the week — zero cooking, zero cleanup.", featured: false },
];

export const STEPS = [
  { n: 1, title: "Pick your plan", body: "Choose how many meals you want each week. Keto, paleo, gluten-free and high-protein options every week." },
  { n: 2, title: "We cook it fresh", body: "Our chefs hand-prepare every meal in our Kansas City kitchen — fully cooked, never frozen." },
  { n: 3, title: "Delivered to your door", body: "Meals arrive ready to heat and eat in 90 seconds. No prep, no dishes, no guesswork." },
];

export const CITIES = ["Kansas City", "Overland Park", "Lenexa", "Lee's Summit", "Olathe", "Shawnee"];

export const TESTIMONIALS = [
  { quote: "I've hit my protein goals every single week without thinking about it. The orange chicken is unreal.", name: "Marcus T.", role: "Overland Park" },
  { quote: "As a nurse on 12-hour shifts, this gave me my evenings back. Real food, zero prep.", name: "Dana R.", role: "Lenexa" },
  { quote: "Started for the $99 deal, stayed because the food actually tastes like a restaurant.", name: "Cody B.", role: "Lee's Summit" },
];

export const SITE = {
  name: "my99protein",
  tagline: "Fresh, high-protein meals delivered across Kansas City.",
  phoneCity: "Kansas City metro",
};
