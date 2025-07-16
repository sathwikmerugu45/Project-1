import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import ProductCategories from '../components/home/ProductCategories';
import WhyChooseUs from '../components/home/WhyChooseUs';
import QuickContact from '../components/home/QuickContact';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <ProductCategories />
      <WhyChooseUs />
      <QuickContact />
    </div>
  );
};

export default Home;