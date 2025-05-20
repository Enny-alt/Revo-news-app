import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import TopHeadline from "../Components/TopHeadline";
import OtherNews from "../Components/OtherNews";

const Category = () => {
  const [news, setNews] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    async function fetchCategoryData() {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?category=${categoryName}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        );
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCategoryData();
  }, []);

  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };
  return (
    <>
      <Header />
      <main className="py-6 px-6 md:px-16 lg:px-24">
        <h2 className="font-bold text-3xl my-3 mx-1 md:text-5xl">{capitalize(categoryName)}</h2>
        <div className="lg:flex lg:gap-4">
          {news.slice(0, 1).map((item) => {
            return (
              <TopHeadline
                key={item.publishedAt}
                image={item.urlToImage}
                headline={item.title}
                source={item.source.name}
                author={item.author}
                link={item.url}
              />
            );
          })}
          <hr className="mt-3 border-[#ccc]" />
          <div>
            <h3 className="font-bold text-xl mt-5">More News</h3>
            {news.slice(2, 5).map((item) => {
              return (
                <OtherNews
                  key={item.publishedAt}
                  image={item.urlToImage}
                  title={item.title}
                  source={item.source.name}
                  link={item.url}
                />
              );
            })}
          </div>
        </div>
         <div className="lg:flex items-center gap-12">
          <div className="lg:basis-2/3">
            <h3 className="font-bold text-xl mt-5">Most Popular</h3>
            <ul className="list-decimal p-4 marker:text-[#e43f5d] marker:font-bold">
              {news.slice(11, 18).map((item) => {
                return (
                  <li className="py-4 text-base border-b-1 border-[#ccc]">
                    <a href={item.url} target="_blank">
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="lg:basis-1/3 border-dashed border-black border-1 p-6">
            <p className="font-roboto text-sm">
              <span className="font-bold">Today, Explained</span> Understand the
              world with a daily explainer plus the most compelling stories of
              the day, compiled by news editor Sean Collins.
            </p>
            <form action="">
              <input
                type="text"
                placeholder="Enter You Email"
                className="block md:w-88 border-1 border-[#212121] mt-4 lg:w-full p-2"
              />
              <button className="background text-white p-2 mt-4 font-bold text-nowrap text-sm ">
                Subscribe to our Newsletter
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Category;
