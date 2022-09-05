import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg0kkB50gbd8uph38rj8bZciFcxlvGiqsSEg&usqp=CAU"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="always a good time for Burgers"
            price={100}
            rating={5}
            image="https://b.zmtcdn.com/data/pictures/1/310301/dfd4a06ddb03ab32129562fc0023412b.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
          />
          <Product
            id="49538094"
            title="Biryani is a emotion!   Order Now"
            price={239.0}
            rating={4}
            image="https://b.zmtcdn.com/data/pictures/chains/3/307893/2738bd3dfa84f54d62587a1f5af1c8fe_o2_featured_v2.jpg"
          />
          <Product
            id="49538094"
            title="work hard, be nice, eat PIZZA.
            "
            price={139.0}
            rating={4}
            image="https://b.zmtcdn.com/data/pictures/1/19296121/b04c52d0c652b007e9f5637901d6855b_o2_featured_v2.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Veg Thali"
            price={99}
            rating={3}
            image="https://b.zmtcdn.com/data/pictures/0/18446480/06000587abae9e12c5bece649e177668_o2_featured_v2.jpg"
          />
          <Product
            id="23445930"
            title="First, let me complete my Chole Bhature !"
            price={99}
            rating={5}
            image="https://b.zmtcdn.com/data/pictures/chains/1/491/aa50c08ea5ade50a6d1c2d7aca242a1c_o2_featured_v2.jpg"
          />
          <Product
            id="3254354345"
            title="Stay Same And Love Dosa !"
            price={59}
            rating={4}
            image="https://b.zmtcdn.com/data/pictures/chains/9/899/6812b7d6166430abf0f62016ea8fe548_o2_featured_v2.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Manchurian"
            price={104}
            rating={4}
            image="https://b.zmtcdn.com/data/pictures/chains/6/836/009ab85645f2fb4cb840face5f99436c_o2_featured_v2.jpg"
          
          />
          <Product
            id="49538094"
            title="Hydrabadi Biryani"
            price={249.0}
            rating={4}
            image="https://b.zmtcdn.com/data/pictures/chains/2/18363082/4aa2853159bd98bad02a7cd5f2f40be6_o2_featured_v2.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;