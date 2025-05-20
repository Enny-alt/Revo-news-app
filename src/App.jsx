import React, { useState, useEffect } from "react";
import Header from "./Components/Header.jsx";
import Join from "./Components/Join.jsx";
import TopHeadline from "./Components/TopHeadline.jsx";
import OtherNews from "./Components/OtherNews.jsx";
import Carousel from "./Components/Carousel.jsx";
import Footer from "./Components/Footer.jsx";


const App = () => {
  const [news, setNews] = useState([]);

   useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?category=general&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        );
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.log(error);
      }
    }
    fetchNews();
  }, []);
  return (
    <>
      <Header />
      <main className="py-6 px-6 md:px-16 lg:px-24">
        <Join />
        <div className="lg:flex lg:gap-4">
          {news.slice(1,2).map((item) => {
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
            {news.slice(10,13).map((item) => {
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
        <hr className="mt-3 border-[#ccc]" />
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
        <div>
          <h2 className="mt-12 text-2xl font-bold">More on Revo</h2>
          <div className="md:flex my-4 md:gap-12">
            {news.slice(5, 8).map((item) => {
              return (
                <Carousel
                  image={item.urlToImage}
                  source={item.source.name}
                  title={item.title}
                  link={item.url}
                />
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
