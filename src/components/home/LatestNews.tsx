import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

const LatestNews = () => {
  const newsArticles = [
    {
      id: 'tour-de-play-chicago',
      title: 'Tour de Play: Chicago',
      date: '12 Mar 2018',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=400&h=300',
      excerpt: 'Join us for an exciting playground tour showcasing the latest innovations in Chicago.',
      category: 'Events'
    },
    {
      id: 'building-safer-playground',
      title: 'Building a Safer Playground',
      date: '12 Mar 2018',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&h=300',
      excerpt: 'Learn about the latest safety standards and how we implement them in our playground designs.',
      category: 'Safety'
    },
    {
      id: 'four-trends-parks-playgrounds',
      title: 'Four trends for parks & playgrounds in 2017... and beyond',
      date: '12 Mar 2018',
      image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=400&h=300',
      excerpt: 'Discover the emerging trends shaping the future of playground design and park development.',
      category: 'Trends'
    },
    {
      id: 'extraordinary-playscapes-portland',
      title: 'Extraordinary Playscapes coming to Portland',
      date: '12 Mar 2018',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&h=300',
      excerpt: 'Portland will soon feature some of the most innovative playground designs in the country.',
      category: 'Projects'
    }
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">
            LATEST NEWS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsArticles.map((article, index) => (
            <Link
              key={article.id}
              to={`/insights/${article.id}`}
              className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Article Image */}
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary-600 text-white px-2 py-1 rounded text-xs font-medium">
                  {article.category}
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-sm text-neutral-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Date */}
                <div className="flex items-center text-xs text-neutral-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  {article.date}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/insights" 
            className="btn-primary inline-flex items-center group"
          >
            View All News
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;