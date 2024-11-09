import React, { useState } from 'react';
import './FoodAppHome.css';
import { Link } from 'react-router-dom';

const FoodAppHome = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categoryItems = {
    Italian: [
      { name: 'Margherita Pizza', image: 'https://www.jessicagavin.com/wp-content/uploads/2019/08/skillet-margherita-pizza-12-1200.jpg', price: 12.99 },
      { name: 'Spaghetti Carbonara', image: 'https://editorialtelevisa.brightspotcdn.com/dims4/default/097390f/2147483647/strip/true/crop/700x700+250+0/resize/1000x1000!/quality/90/?url=https:%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2F89%2Fac%2F5131b5fa430c88dc0156434e93a3%2Fspaghetti-carbonara.jpg', price: 14.99 },
      { name: 'Lasagna', image: 'https://th.bing.com/th/id/OIP.QBPez2WqwwONu-n4Rl4lxAAAAA?rs=1&pid=ImgDetMain', price: 13.99 },
      { name: 'Risotto', image: 'https://th.bing.com/th/id/R.119f0b992db95a7d76aa55913b9268bf?rik=%2bg%2bMOpfzMbnRkw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-6_QduiJLm8c%2fVfr6RmlzCkI%2fAAAAAAAAPYw%2f_yJ--vuXgq0%2fs1600%2frisotto2.jpg&ehk=KBC4xuHRvH3MnYsPwu4y4PwKRpd1mTVqR0gDJhdIDRc%3d&risl=&pid=ImgRaw&r=0', price: 15.99 },
      { name: 'Tiramisu', image: 'https://th.bing.com/th/id/OIP.PUtVCGjYekdsCCjiYvoBPAHaE7?rs=1&pid=ImgDetMain', price: 7.99 },
      { name: 'Bruschetta', image: 'https://th.bing.com/th/id/OIP.vWZ1-bZXIivGH_Xzw2kD-wHaHa?rs=1&pid=ImgDetMain', price: 8.99 },
    ],
    Japanese: [
      { name: 'Sushi Roll', image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VzaGl8ZW58MHx8MHx8fDA%3D', price: 16.99 },
      { name: 'Ramen', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFtZW58ZW58MHx8MHx8fDA%3D', price: 12.99 },
      { name: 'Tempura', image: 'https://th.bing.com/th/id/OIP.FFJ7R098LOSVMH5Zayrf8gHaE7?rs=1&pid=ImgDetMain', price: 14.99 },
      { name: 'Miso Soup', image: 'https://cdn.tasteatlas.com/images/recipes/9b79b196c8794a2c966657c13332a25d.jpg?mw=1300', price: 5.99 },
      { name: 'Udon', image: 'https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWRvbnxlbnwwfHwwfHx8MA%3D%3D', price: 11.99 },
      { name: 'Takoyaki', image: 'https://th.bing.com/th/id/OIP.M2cAHztAYZQqeyOYD4mIUwHaEK?rs=1&pid=ImgDetMain', price: 9.99 },
    ],
    Indian: [
      { name: 'Butter Chicken', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnV0dGVyJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D', price: 14.99 },
      { name: 'Biryani', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D', price: 13.99 },
      { name: 'Naan Bread', image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFhbiUyMGJyZWFkfGVufDB8fDB8fHww', price: 3.99 },
      { name: 'Samosas', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftb3NhfGVufDB8fDB8fHww', price: 6.99 },
      { name: 'Tandoori Chicken', image: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFuZG9vcmklMjBjaGlja2VufGVufDB8fDB8fHww', price: 15.99 },
      { name: 'Palak Paneer', image: 'https://images.unsplash.com/photo-1618449840665-9ed506d73a34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFsYWslMjBwYW5lZXJ8ZW58MHx8MHx8fDA%3D', price: 12.99 },
    ],
    Mexican: [
      { name: 'Tacos', image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFjb3N8ZW58MHx8MHx8fDA%3D', price: 10.99 },
      { name: 'Burrito', image: 'https://th.bing.com/th/id/OIP.4lXiqCheaaVrDBtlRWH6IQHaE8?rs=1&pid=ImgDetMain', price: 11.99 },
      { name: 'Guacamole', image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3VhY2Ftb2xlfGVufDB8fDB8fHww', price: 7.99 },
      { name: 'Enchiladas', image: 'https://th.bing.com/th/id/OIP.vWy-d6A2ZVWZpz00wLWYKAHaHa?rs=1&pid=ImgDetMain', price: 13.99 },
      { name: 'Quesadilla', image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cXVlc2FkaWxsYXxlbnwwfHwwfHx8MA%3D%3D', price: 9.99 },
      { name: 'Churros', image: 'https://www.julieseatsandtreats.com/wp-content/uploads/2022/04/Churros-18-of-23.jpg', price: 6.99 },
    ],
    Chinese: [
      { name: 'Kung Pao Chicken', image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3VuZyUyMHBhbyUyMGNoaWNrZW58ZW58MHx8MHx8fDA%3D', price: 13.99 },
      { name: 'Dim Sum', image: 'https://images.unsplash.com/photo-1590330297626-d7aff25a0431?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGltJTIwc3VtfGVufDB8fDB8fHww', price: 12.99 },
      { name: 'Mapo Tofu', image: 'https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFwbyUyMHRvZnV8ZW58MHx8MHx8fDA%3D', price: 11.99 },
      { name: 'Spring Rolls', image: 'https://th.bing.com/th/id/OIP.xBeulAz3IpGtPMrDtpjYiAHaHa?rs=1&pid=ImgDetMain', price: 8.99 },
      { name: 'Peking Duck', image: 'https://amazingribs.com/wp-content/uploads/2017/12/peking-duck-scaled.jpg', price: 18.99 },
      { name: 'Sweet and Sour Pork', image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3dlZXQlMjBhbmQlMjBzb3VyJTIwcG9ya3xlbnwwfHwwfHx8MA%3D%3D', price: 14.99 },
    ],
    American: [
      { name: 'Butter Chicken', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnV0dGVyJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D', price: 14.99 },
      { name: 'Biryani', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D', price: 13.99 },
      { name: 'Naan Bread', image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFhbiUyMGJyZWFkfGVufDB8fDB8fHww', price: 3.99 },
      { name: 'Samosas', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftb3NhfGVufDB8fDB8fHww', price: 6.99 },
      { name: 'Tandoori Chicken', image: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFuZG9vcmklMjBjaGlja2VufGVufDB8fDB8fHww', price: 15.99 },
      { name: 'Palak Paneer', image: 'https://images.unsplash.com/photo-1618449840665-9ed506d73a34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFsYWslMjBwYW5lZXJ8ZW58MHx8MHx8fDA%3D', price: 12.99 },
    ]
  };



  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="food-app">
      {/* <header>
        <nav>
          <h1>FoodieFind</h1>
          <button className="sign-in-btn">Sign In</button>
        </nav>
      </header> */}

      <main>
        <section className="hero">
          <h2>Discover Delicious Dishes</h2>
          <p>Find and order your favorite meals from local restaurants</p>
          <div className="search-bar">
            <input type="text" placeholder="Search for dishes or restaurants" />
            <button className="search-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              Search
            </button>
          </div>
        </section>

        <section className="popular-dishes">
          <h3 style={{ textAlign: 'center' }}>Popular Right Now</h3>
          <div className="dish-grid">
            {[
              { name: 'Pizza Margherita', image: 'https://cdn.loveandlemons.com/wp-content/uploads/2019/09/margherita-pizza-1080x1080.jpg' },
              { name: 'Sushi Platter', image: 'https://th.bing.com/th/id/R.95f07291f6fcf3029007fd58320ea888?rik=b2%2bAUCQO0nGuUA&riu=http%3a%2f%2fshujisushi.com.au%2fimages%2fVegetarian-Sushi-Platter-1467011210JMl7L.jpg&ehk=W%2fFGe5Avlbn8OY3%2bZdaQlrHq3ECplY8kro0hSReDqgM%3d&risl=&pid=ImgRaw&r=0-I-500x500.jpg' },
              { name: 'Chicken Tikka Masala', image: 'https://cafedelites.com/wp-content/uploads/2018/04/Best-Chicken-Tikka-Masala-IMAGE-1.jpg' }
            ].map((dish) => (
              <div key={dish.name} className="dish-card">
                <img src={dish.image} alt={dish.name} />
                <div className="dish-info">
                  <h4>{dish.name}</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <button className="order-btn">
                    Order Now
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="categories">
          <h3 style={{ textAlign: 'center' }}>Browse by Category</h3>
          <div className="category-grid">
            {['Italian', 'Japanese', 'Indian', 'Mexican', 'Chinese', 'American'].map((category) => (
              <div key={category} className="category-card" onClick={() => handleCategoryClick(category)}>
                <div className="category-icon">🍽️</div>
                <h4>{category}</h4>
              </div>
            ))}
          </div>
        </section>

        {selectedCategory && (
          <section className="category-items">
            <h3 style={{ textAlign: 'center' }}>{selectedCategory} Dishes</h3>
            <div className="dish-grid">
              {categoryItems[selectedCategory].map((item) => (
                <div key={item.name} className="dish-card">
                  <img src={item.image} alt={item.name} />
                  <div className="dish-info">
                    <h4>{item.name}</h4>
                    <p>${item.price.toFixed(2)}</p>
                    <button className="order-btn">Order Now</button>
                  </div>
                </div>
              ))}
            </div>
            <button className="show-more-btn">Show More</button>
          </section>
        )}
      </main>

      <footer>
        <div className="footer-content">
          <p>© 2024 FoodieFind. All rights reserved.</p>
          <nav>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};
export default FoodAppHome;