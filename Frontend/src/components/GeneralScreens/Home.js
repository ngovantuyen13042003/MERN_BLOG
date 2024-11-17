import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SkeletonStory from "../Skeletons/SkeletonStory";
import CardStory from "../StoryScreens/CardStory";
import NoStories from "../StoryScreens/NoStories";
import Pagination from "./Pagination";
import "../../Css/Home.css";

const Home = () => {
  const search = useLocation().search;
  const searchKey = new URLSearchParams(search).get("search");
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const getStories = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `/story/getAllStories?search=${searchKey || ""}&page=${page}`
        );

        // Điều hướng URL
        navigate({
          pathname: "/",
          search: searchKey
            ? `?search=${searchKey}${page > 1 ? `&page=${page}` : ""}`
            : `${page > 1 ? `?page=${page}` : ""}`,
        });

        setStories(data.data);
        setPages(data.pages);
      } catch (error) {
        console.error("Error fetching stories:", error);
      } finally {
        setLoading(false);
      }
    };

    getStories();
  }, [searchKey, page, navigate]);

  useEffect(() => {
    setPage(1);
  }, [searchKey]);

  return (
    <div>
      {/* Background div */}
      <div
        className="background-image"
        style={{
          backgroundImage: "url('blackpink.svg')", // Đường dẫn đến ảnh nền
        }}
      ></div>

      {/* Nội dung chính */}
      <div className="Inclusive-home-page">
        {loading ? (
          <div className="skeleton_emp">
            {[...Array(6)].map((_, index) => (
              <SkeletonStory key={index} />
            ))}
          </div>
        ) : (
          <div>
            <div className="story-card-wrapper">
              {stories.length !== 0 ? (
                stories.map((story) => (
                  <CardStory key={story.id || story.uuid} story={story} />
                ))
              ) : (
                <NoStories />
              )}
            </div>

            <Pagination page={page} pages={pages} changePage={setPage} />
          </div>
        )}
        <br />
      </div>
    </div>
  );
};

export default Home;
