import { useEffect, useMemo, useState } from "react";
import "./App.css";

const API = "http://localhost:5004/api";

const categories = [
  { name: "All", emoji: "🍽️" },
  { name: "Biryani", emoji: "🍛" },
  { name: "Rice", emoji: "🍚" },
  { name: "Ice Cream", emoji: "🍨" },
  { name: "Pizza", emoji: "🍕" },
  { name: "Burgers", emoji: "🍔" },
  { name: "Sandwiches", emoji: "🥪" },
  { name: "South Indian", emoji: "🥞" },
  { name: "Noodles", emoji: "🍜" },
  { name: "Snacks", emoji: "🍟" },
  { name: "Cold Drinks", emoji: "🥤" },
  { name: "Milkshakes", emoji: "🥛" },
  { name: "Hot Beverages", emoji: "☕" },
];

const imageByCategory = {
  Biryani: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=800&auto=format&fit=crop&q=85",
  Rice: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&auto=format&fit=crop&q=85",
  "Ice Cream": "https://images.unsplash.com/photo-1501446529957-6226bd447c46?w=800&auto=format&fit=crop&q=85",
  Pizza: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=85",
  Burgers: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=85",
  Sandwiches: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&auto=format&fit=crop&q=85",
  "South Indian": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=85",
  Noodles: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop&q=85",
  Snacks: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&auto=format&fit=crop&q=85",
  "Cold Drinks": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&auto=format&fit=crop&q=85",
  Milkshakes: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&auto=format&fit=crop&q=85",
  "Hot Beverages": "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&auto=format&fit=crop&q=85",
  Other: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=85",
};


// Individual dish photos. Each menu item gets its own image instead of sharing
// one category image. If a name is not listed, the category image is used.
const imageByFoodName = {
  "vegetable fried rice": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&auto=format&fit=crop&q=85",
  "chicken biryani": "https://images.pexels.com/photos/28674660/pexels-photo-28674660.jpeg?auto=compress&cs=tinysrgb&w=800",
  "mutton biryani": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&auto=format&fit=crop&q=85",
  "veg biryani": "https://images.pexels.com/photos/38807031/pexels-photo-38807031.jpeg?auto=compress&cs=tinysrgb&w=800",
  "paneer biryani": "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800&auto=format&fit=crop&q=85",
  "chicken fried rice": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&auto=format&fit=crop&q=85",
  "egg fried rice": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&auto=format&fit=crop&q=85",
  "schezwan rice": "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=800&auto=format&fit=crop&q=85",
  "veg pulao": "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&auto=format&fit=crop&q=85",
  "vanilla ice cream": "https://images.pexels.com/photos/23191350/pexels-photo-23191350.jpeg?auto=compress&cs=tinysrgb&w=800",
  "chocolate ice cream": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop&q=85",
  "strawberry ice cream": "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&auto=format&fit=crop&q=85",
  "butterscotch ice cream": "https://images.unsplash.com/photo-1560008581-09826d1de69e?w=800&auto=format&fit=crop&q=85",
  "margherita pizza": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&auto=format&fit=crop&q=85",
  "farmhouse pizza": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=85",
  "paneer pizza": "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800&auto=format&fit=crop&q=85",
  "chicken pizza": "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800&auto=format&fit=crop&q=85",
  "veg burger": "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=800&auto=format&fit=crop&q=85",
  "cheese burger": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=85",
  "chicken burger": "https://images.pexels.com/photos/19737927/pexels-photo-19737927.jpeg?auto=compress&cs=tinysrgb&w=800",
  "double patty burger": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=85",
  "veg sandwich": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&auto=format&fit=crop&q=85",
  "cheese sandwich": "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=800&auto=format&fit=crop&q=85",
  "grilled sandwich": "https://images.pexels.com/photos/8478421/pexels-photo-8478421.jpeg?auto=compress&cs=tinysrgb&w=800",
  "chicken sandwich": "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&auto=format&fit=crop&q=85",
  "masala dosa": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&auto=format&fit=crop&q=85",
  "plain dosa": "https://images.pexels.com/photos/35351659/pexels-photo-35351659.jpeg?auto=compress&cs=tinysrgb&w=800",
  "idli": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=85",
  "medu vada": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=85",
  "veg noodles": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop&q=85",
  "egg noodles": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&auto=format&fit=crop&q=85",
  "chicken noodles": "https://images.pexels.com/photos/24738508/pexels-photo-24738508.jpeg?auto=compress&cs=tinysrgb&w=800",
  "schezwan noodles": "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=800&auto=format&fit=crop&q=85",
  "french fries": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&auto=format&fit=crop&q=85",
  "chicken nuggets": "https://images.unsplash.com/photo-1562967914-608f82629710?w=800&auto=format&fit=crop&q=85",
  "samosa": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=85",
  "spring rolls": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&auto=format&fit=crop&q=85",
  "tea": "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&auto=format&fit=crop&q=85",
  "coffee": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop&q=85",
  "fresh juice": "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&auto=format&fit=crop&q=85",
  "coke": "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800&auto=format&fit=crop&q=85",
  "sprite": "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=800&auto=format&fit=crop&q=85",
  "thums up": "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=800&auto=format&fit=crop&q=85",
  "fanta": "https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=800&auto=format&fit=crop&q=85",
  "chocolate milkshake": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&auto=format&fit=crop&q=85",
  "oreo milkshake": "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=800&auto=format&fit=crop&q=85",
  "strawberry milkshake": "https://images.unsplash.com/photo-1553787499-6f9133860278?w=800&auto=format&fit=crop&q=85",
  "mango milkshake": "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=800&auto=format&fit=crop&q=85",
  "badam milk": "https://commons.wikimedia.org/wiki/Special:FilePath/Badam%20milk.jpg",
  "hot chocolate": "https://images.pexels.com/photos/15149193/pexels-photo-15149193.jpeg?auto=compress&cs=tinysrgb&w=800"
};

function getFoodCategory(name = "") {
  const n = name.toLowerCase();
  if (n.includes("biryani")) return "Biryani";
  if (n.includes("fried rice") || n.includes("schezwan rice") || n.includes("pulao")) return "Rice";
  if (n.includes("ice cream")) return "Ice Cream";
  if (n.includes("pizza")) return "Pizza";
  if (n.includes("burger")) return "Burgers";
  if (n.includes("sandwich")) return "Sandwiches";
  if (["dosa", "idli", "vada", "uttapam"].some((x) => n.includes(x))) return "South Indian";
  if (n.includes("noodles") || n.includes("chow mein")) return "Noodles";
  if (["fries", "nuggets", "samosa", "spring roll"].some((x) => n.includes(x))) return "Snacks";
  if (["juice", "coke", "sprite", "thums", "fanta", "cold drink", "lemonade"].some((x) => n.includes(x))) return "Cold Drinks";
  if (n.includes("shake") || n.includes("smoothie")) return "Milkshakes";
  if (["tea", "coffee", "badam milk", "hot chocolate"].some((x) => n.includes(x))) return "Hot Beverages";
  return "Other";
}

function money(value) {
  return `₹${Number(value || 0).toFixed(2)}`;
}

function App() {
  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState({});
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [amountReceived, setAmountReceived] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [placingOrder, setPlacingOrder] = useState(false);
  const [receipt, setReceipt] = useState(null);
  const [activeTab, setActiveTab] = useState("home");

  async function loadFoods() {
    try {
      const response = await fetch(`${API}/foods`);
      if (!response.ok) throw new Error("Unable to load food menu");
      setFoods(await response.json());
    } catch (error) {
      setMessage(`${error.message}. Check that the backend and MySQL are running.`);
    } finally {
      setLoading(false);
    }
  }

  async function loadOrders() {
    try {
      const response = await fetch(`${API}/orders`);
      if (response.ok) setOrders(await response.json());
    } catch {
      // Keep the page usable if order history cannot refresh.
    }
  }

  useEffect(() => {
    loadFoods();
    loadOrders();
  }, []);

  const filteredFoods = useMemo(() => foods.filter((food) => {
    const matchesSearch = food.name.toLowerCase().includes(search.trim().toLowerCase());
    const category = getFoodCategory(food.name);
    const matchesCategory = selectedCategory === "All" || category === selectedCategory;
    return matchesSearch && matchesCategory;
  }), [foods, search, selectedCategory]);

  const cartFoods = foods.filter((food) => Number(cart[food.id] || 0) > 0);
  const cartCount = Object.values(cart).reduce((sum, quantity) => sum + Number(quantity), 0);
  const total = cartFoods.reduce((sum, food) => sum + Number(food.price) * Number(cart[food.id]), 0);
  const changeAmount = Math.max(0, Number(amountReceived || 0) - total);

  function addToCart(food) {
    const current = Number(cart[food.id] || 0);
    if (current >= Number(food.stock)) {
      setMessage(`Only ${food.stock} ${food.name} available in stock.`);
      return;
    }
    setCart((previous) => ({ ...previous, [food.id]: current + 1 }));
    setMessage("");
  }

  function updateQuantity(food, amount) {
    setCart((previous) => {
      const next = { ...previous };
      const quantity = Number(next[food.id] || 0) + amount;
      if (quantity <= 0) delete next[food.id];
      else if (quantity <= Number(food.stock)) next[food.id] = quantity;
      return next;
    });
  }

  function choosePayment(method) {
    setPaymentMethod(method);
    if (method === "UPI") setAmountReceived(total.toFixed(2));
    else setAmountReceived("");
  }

  async function placeOrder(event) {
    event.preventDefault();
    setMessage("");

    if (!customerName.trim()) return setMessage("Please enter the customer name.");
    if (!/^[0-9]{10,15}$/.test(phone.trim())) return setMessage("Enter a valid mobile number (10–15 digits).");
    if (!cartCount) return setMessage("Please add at least one food item.");
    if (Number(amountReceived) < total) return setMessage(`Amount received must be at least ${money(total)}.`);

    const items = cartFoods.map((food) => ({
      food_id: Number(food.id),
      quantity: Number(cart[food.id]),
    }));

    setPlacingOrder(true);
    try {
      const response = await fetch(`${API}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: customerName.trim(),
          phone: phone.trim(),
          items,
          payment_method: paymentMethod,
          amount_received: Number(amountReceived),
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Unable to complete order.");

      setReceipt(data);
      setCart({});
      setCustomerName("");
      setPhone("");
      setAmountReceived("");
      setActiveTab("receipt");
      await loadFoods();
      await loadOrders();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setMessage(error.message);
    } finally {
      setPlacingOrder(false);
    }
  }

  function goTo(id, tab) {
    setActiveTab(tab);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function printReceipt() {
    window.print();
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="#home" onClick={() => setActiveTab("home")}>
            <span className="brand-mark">S<span>+</span></span>
            <span className="brand-copy"><strong>smart<span>canteen</span></strong><small>CAMPUS FOOD, MADE EASY</small></span>
          </a>
          <nav className="desktop-nav">
            <button className={activeTab === "home" ? "nav-link active" : "nav-link"} onClick={() => goTo("home", "home")}>Home</button>
            <button className="nav-link" onClick={() => goTo("menu", "home")}>Explore menu</button>
            <button className="nav-link" onClick={() => goTo("cart", "cart")}>My cart <span className="nav-badge">{cartCount}</span></button>
            <button className="nav-link" onClick={() => goTo("orders", "orders")}>Orders</button>
          </nav>
          <button className="top-order-btn" onClick={() => goTo("cart", "cart")}>View cart <span>↗</span></button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="live-dot"></span> YOUR CAMPUS FOOD DESTINATION</div>
            <h1>Good food.<br /><em>Great days.</em></h1>
            <p>Freshly prepared favourites, a few clicks away. Find your craving, place your order and skip the queue.</p>
            <button className="primary-btn" onClick={() => goTo("menu", "home")}>Explore the menu <span>→</span></button>
            <div className="hero-stats">
              <div><strong>13</strong><span>Food categories</span></div>
              <div><strong>Easy</strong><span>Online ordering</span></div>
              <div><strong>Fast</strong><span>Queue tracking</span></div>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-photo"><img src={imageByCategory.Biryani} alt="" aria-hidden="true" onError={(e) => { e.currentTarget.style.display = "none"; }} /></div>
            <div className="hero-sticker"><span>✦</span><div><b>Made fresh</b><small>Just for you</small></div></div>
            <div className="hero-note">A little joy<br />in every bite.</div>
            <span className="hero-spark spark-one">✳</span><span className="hero-spark spark-two">✦</span>
          </div>
        </section>

        {message && <div className="alert-message" role="status"><span>{message}</span><button onClick={() => setMessage("")}>×</button></div>}

        <section className="menu-area" id="menu">
          <div className="section-top">
            <div><span className="section-label">THE GOOD STUFF</span><h2>What are you craving?</h2><p>Explore the menu and pick your favourites.</p></div>
            <div className="search-box"><span>⌕</span><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search food..." aria-label="Search food" />{search && <button onClick={() => setSearch("")}>×</button>}</div>
          </div>

          <div className="category-strip">
            {categories.map((category) => (
              <button key={category.name} className={selectedCategory === category.name ? "category-chip selected" : "category-chip"} onClick={() => setSelectedCategory(category.name)}>
                <span>{category.emoji}</span>{category.name}
              </button>
            ))}
          </div>

          {loading ? <div className="empty-panel">Loading the menu…</div> : filteredFoods.length === 0 ? (
            <div className="empty-panel"><span>🥣</span><h3>No dishes found</h3><p>Try another search or category.</p><button className="outline-btn" onClick={() => { setSearch(""); setSelectedCategory("All"); }}>Show all dishes</button></div>
          ) : (
            <div className="food-grid">
              {filteredFoods.map((food) => {
                const quantity = Number(cart[food.id] || 0);
                const category = getFoodCategory(food.name);
                const image = imageByFoodName[food.name.trim().toLowerCase()] || imageByCategory[category] || imageByCategory.Other;
                return (
                  <article className="food-card" key={food.id}>
                    <div className="food-photo"><img src={image} alt="" aria-hidden="true" loading="lazy" onError={(e) => { e.currentTarget.style.display = "none"; }} /><span className="food-tag">{category === "Other" ? "Chef's pick" : category}</span>{Number(food.stock) <= 0 && <span className="sold-tag">Sold out</span>}</div>
                    <div className="food-info">
                      <div className="food-name-line"><h3>{food.name}</h3><span className="rating">★ 4.8</span></div>
                      <p>Freshly prepared with delicious flavours.</p>
                      <div className="food-buy-row"><div className="price">{money(food.price)}<small>{Number(food.stock) > 0 ? `${food.stock} available` : "Currently unavailable"}</small></div>
                        {quantity === 0 ? <button className="add-btn" disabled={Number(food.stock) <= 0} onClick={() => addToCart(food)}>ADD <span>+</span></button> :
                          <div className="quantity-control"><button onClick={() => updateQuantity(food, -1)}>−</button><b>{quantity}</b><button disabled={quantity >= Number(food.stock)} onClick={() => addToCart(food)}>+</button></div>}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        <section className="checkout-area" id="cart">
          <div className="section-top checkout-title"><div><span className="section-label">ALMOST THERE</span><h2>Your order & checkout</h2><p>Review your items and complete your payment.</p></div><div className="cart-count-pill">🛒 {cartCount} items</div></div>
          <div className="checkout-grid">
            <div className="cart-box">
              <div className="box-heading"><h3>Order summary</h3><span>{cartCount} items</span></div>
              {cartFoods.length === 0 ? <div className="empty-cart"><span>🛍️</span><h3>Your cart is empty</h3><p>Add something tasty from the menu.</p><button className="outline-btn" onClick={() => goTo("menu", "home")}>Browse menu</button></div> :
                cartFoods.map((food) => <div className="cart-line" key={food.id}><div className="cart-line-icon">{categories.find((c) => c.name === getFoodCategory(food.name))?.emoji || "🍽️"}</div><div className="cart-line-name"><b>{food.name}</b><small>{money(food.price)} each</small></div><div className="quantity-control"><button onClick={() => updateQuantity(food, -1)}>−</button><b>{cart[food.id]}</b><button disabled={Number(cart[food.id]) >= Number(food.stock)} onClick={() => addToCart(food)}>+</button></div><strong className="line-total">{money(Number(food.price) * Number(cart[food.id]))}</strong></div>)}
              <div className="cart-total"><span>Grand total</span><strong>{money(total)}</strong></div>
            </div>

            <form className="payment-box" onSubmit={placeOrder}>
              <div className="box-heading"><h3>Customer & payment</h3><span className="secure-label">● SECURE CHECKOUT</span></div>
              <label htmlFor="customerName">Customer name</label><input id="customerName" value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Enter your full name" required />
              <label htmlFor="phone">Mobile number</label><input id="phone" value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 15))} placeholder="10-digit mobile number" inputMode="numeric" required />
              <div className="form-divider"></div>
              <label>Payment method</label>
              <div className="payment-methods">
                <button type="button" className={paymentMethod === "Cash" ? "method-card chosen" : "method-card"} onClick={() => choosePayment("Cash")}><span>💵</span><b>Cash</b><small>Pay at counter</small></button>
                <button type="button" className={paymentMethod === "UPI" ? "method-card chosen" : "method-card"} onClick={() => choosePayment("UPI")}><span>📱</span><b>UPI</b><small>Digital payment</small></button>
              </div>
              <label htmlFor="amountReceived">{paymentMethod === "Cash" ? "Cash amount received (₹)" : "UPI amount received (₹)"}</label>
              <input id="amountReceived" type="number" min={total} step="0.01" value={amountReceived} onChange={(e) => setAmountReceived(e.target.value)} placeholder={`Enter at least ${total.toFixed(2)}`} required />
              <div className="payment-calculation"><span>Amount due <b>{money(total)}</b></span><span>Change to return <b className="change-value">{money(changeAmount)}</b></span></div>
              <button className="pay-button" type="submit" disabled={placingOrder || cartCount === 0}>{placingOrder ? "Processing payment…" : `Pay ${money(total)} & complete order →`}</button>
              <p className="payment-footnote">Your order and payment details will be securely saved in the canteen database.</p>
            </form>
          </div>
        </section>

        <section className="orders-area" id="orders">
          <div className="section-top"><div><span className="section-label">STAY IN THE LOOP</span><h2>Your recent orders</h2><p>Track your canteen orders and their preparation status.</p></div><button className="outline-btn" onClick={loadOrders}>↻ Refresh</button></div>
          {orders.length === 0 ? <div className="empty-panel"><span>🧾</span><h3>No orders yet</h3><p>Your completed checkouts will appear here.</p></div> :
            <div className="orders-grid">{orders.map((order) => <article className="order-card" key={order.id}><div><small>ORDER #{order.id}</small><h3>{order.customer_name}</h3><p>{order.phone || "Customer"}</p></div><span className={`order-status ${String(order.status).toLowerCase()}`}>{order.status}</span><div className="order-card-bottom"><span>{order.payment_status || "Unpaid"}</span><strong>{money(order.total_amount)}</strong></div></article>)}</div>}
        </section>
      </main>

      <footer className="footer"><div className="footer-brand"><span className="brand-mark">S<span>+</span></span><div><b>smartcanteen</b><small>Making campus meals better.</small></div></div><span>© {new Date().getFullYear()} Smart Canteen Management System</span></footer>

      {receipt && <div className="receipt-backdrop" role="dialog" aria-modal="true" aria-label="Order receipt">
        <div className="receipt-card">
          <button className="receipt-close no-print" onClick={() => setReceipt(null)} aria-label="Close receipt">×</button>
          <div className="receipt-success"><span>✓</span><small>PAYMENT SUCCESSFUL</small><h2>Order completed!</h2><p>Your order has been placed successfully.</p></div>
          <div className="receipt-brand">SMART CANTEEN<small>Campus food, made easy</small></div>
          <div className="receipt-meta"><span>Receipt <b>#{receipt.order_id}</b></span><span>Queue <b>#{receipt.queue_number}</b></span></div>
          <div className="receipt-customer"><b>{receipt.customer?.name}</b><span>{receipt.customer?.phone}</span></div>
          <div className="receipt-items"><div className="receipt-table-head"><span>ITEM</span><span>QTY</span><span>PRICE</span></div>
            {receipt.items?.map((item, index) => <div className="receipt-item" key={`${item.food_id}-${index}`}><span>{item.food_name}</span><span>{item.quantity}</span><b>{money(item.line_total)}</b></div>)}
          </div>
          <div className="receipt-total"><span>Total paid</span><strong>{money(receipt.total_amount)}</strong></div>
          <div className="receipt-payment"><span>Payment method<b>{receipt.payment?.method}</b></span><span>Amount received<b>{money(receipt.payment?.amount_received)}</b></span><span>Change returned<b>{money(receipt.payment?.change_amount)}</b></span></div>
          <div className="receipt-thanks">Thank you for choosing Smart Canteen!<small>Please show your queue number at the counter.</small></div>
          <div className="receipt-actions no-print"><button className="pay-button" onClick={printReceipt}>Print receipt ⎙</button><button className="outline-btn" onClick={() => setReceipt(null)}>Continue shopping</button></div>
        </div>
      </div>}
      <nav className="mobile-bar"><button onClick={() => goTo("home", "home")}>⌂<small>Home</small></button><button onClick={() => goTo("menu", "home")}>☷<small>Menu</small></button><button onClick={() => goTo("cart", "cart")}>🛒<small>Cart ({cartCount})</small></button><button onClick={() => goTo("orders", "orders")}>▤<small>Orders</small></button></nav>
    </div>
  );
}

export default App;
