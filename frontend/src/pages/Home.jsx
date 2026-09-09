import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductGrid from "../components/ProductGrid";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Newsletter from "../components/Newsletter";


export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Categories />
      <Banner />
      <ProductGrid />            
      <Newsletter />     
      
    </>
  );
}