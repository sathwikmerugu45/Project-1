import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import ProductCategories from '../components/home/ProductCategories';
import LatestNews from '../components/home/LatestNews';
import WhyChooseUs from '../components/home/WhyChooseUs';
import StoriesOfPlay from '../components/home/StoriesOfPlay';
import QuickContact from '../components/home/QuickContact';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <ProductCategories />
      <LatestNews />
      <WhyChooseUs />
      <StoriesOfPlay />
      <QuickContact />
    </div>
  );
};

export default Home;