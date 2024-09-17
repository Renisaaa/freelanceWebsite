import React from "react";

const HomeInfo = () => {
  const data = [
    {
      id: 1,
      title: "Interior Projects",
      subTitle: "Designs we have finished in last 32 years.",
      number: "8K",
    },
    {
      id: 2,
      title: "Years of Works",
      subTitle: "Designs we have finished in last 32 years.",
      number: "31",
    },
    {
      id: 3,
      title: "Satisfied Clients",
      subTitle: "Designs we have finished in last 32 years.",
      number: "12K",
    },
    {
      id: 4,
      title: "Happy Rate",
      subTitle: "Designs we have finished in last 32 years.",
      number: "97%",
    },
  ];
  return (
    <div className="home-info">
      {data.map((item) => (
        <div key={item.id} className="home-info-card">
          <p className="home-info-card-number">{item.number}</p>
          <p className="home-info-card-title">{item.title}</p>
          <p className="home-info-card-subtitle">{item.subTitle}</p>
        </div>
      ))}
    </div>
  );
};

export default HomeInfo;
