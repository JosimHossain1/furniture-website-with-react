import React from "react";
import Hero from "./Hero/Hero";
import Process from "./Process/Process";
import CoffeTable from "./CoffeTable/CoffeTable";
import ShopProduct from "./ShopProduct/ShopProduct";
import Design from "./Design/Design";
import CustomerReview from "./CustomerReview/CustomerReview";
import NewsFeed from "./NewsFeed/NewsFeed";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <Process />
      <CoffeTable />
      <ShopProduct />
      <Design />
      <CustomerReview />
      <NewsFeed />    
    </div>
  );
};

export default HomeScreen;
