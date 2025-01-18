import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "./project.css";
import medifyImg from "../../images/medify.jpg";
import expenseImg from "../../images/expenseTracker.jpg";
import botAi from "../../images/botAi.jpg";
import monkImg from "../../images/monk commerce.jpg";
import qTripImg from "../../images/qtrip.jpg";
import assetManagementImg from "../../images/assetManagement.jpg";
import { FaLink } from "react-icons/fa";

const projectData = [
  { id: 1, title: "Medify-Slot-Booking", img: medifyImg, link:'https://medify-slot-booking-steel.vercel.app/' },
  { id: 2, title: "Expense Tracker", img: expenseImg,link:'https://expense-tracker-sage-beta.vercel.app/' },
  { id: 3, title: "Bot Ai", img: botAi,link:'https://bot-ai-application.vercel.app/' },
  { id: 4, title: "Monk Ecommerce", img: monkImg,link:'https://monk-commerce-dashboard.vercel.app/' },
  { id: 5, title: "Asset Management", img: assetManagementImg,link:'https://asset-management-screen.vercel.app/' },
  { id: 6, title: "Qtrip", img: qTripImg,link:'https://qtrip-dynamic-iota-nine.vercel.app/' },
];

const Projects = () => {
  return (
    <div id="projects" className="projects-section">
      <h1>My Projects</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {projectData.map((project) => (
          <SwiperSlide key={project.id} className="swiper-slide">
            <div className="project-card">
              <img src={project.img} alt={project.title} className="project-img" />
              <h3 className="project-title">{project.title}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <FaLink/> 
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
