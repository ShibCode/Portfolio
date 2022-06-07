import React from "react";
import "./Work.css";
import Project from "./Project";
import clipboard from "../../Assets/Project Screenshots/clipboard.jpeg";
import storageComponent from "../../Assets/Project Screenshots/data-storage-component.jpeg";
import dropdown from "../../Assets/Project Screenshots/dropdown.jpeg";
import eCommerce from "../../Assets/Project Screenshots/e-commerce.jpeg";
import flocked from "../../Assets/Project Screenshots/flocked.jpeg";
import fylo from "../../Assets/Project Screenshots/fylo.jpeg";
import gridComponent from "../../Assets/Project Screenshots/grid-component.jpeg";
import huddle from "../../Assets/Project Screenshots/huddle.jpeg";
import moz from "../../Assets/Project Screenshots/moz.jpeg";
import nftComponent from "../../Assets/Project Screenshots/nft-component.jpeg";
import orderSummary from "../../Assets/Project Screenshots/order-summary.jpeg";
import priceComponent from "../../Assets/Project Screenshots/price-component.jpeg";
import qrCodeComponent from "../../Assets/Project Screenshots/qr-code-component.jpeg";
import r3 from "../../Assets/Project Screenshots/R3.png";
import ratingComponent from "../../Assets/Project Screenshots/rating-component.jpeg";
import space from "../../Assets/Project Screenshots/space.jpeg";
import statsPreviewCard from "../../Assets/Project Screenshots/stats-preview-card.jpeg";

const projects = [
  {
    projectName: "moz",
    projectImg: moz,
    projectLink: "https://moz-clone.vercel.app",
  },
  {
    projectName: "r3",
    projectImg: r3,
    projectLink: "https://r3-com-clone.vercel.app",
  },
  {
    projectName: "space",
    projectImg: space,
    projectLink: "https://space-tourism-website-hazel.vercel.app",
  },
  {
    projectName: "e-commerce",
    projectImg: eCommerce,
    projectLink: "https://e-commerce-website-eosin.vercel.app",
  },
  {
    projectName: "fylo",
    projectImg: fylo,
    projectLink: "https://fylo-landing-page-tawny.vercel.app",
  },
  {
    projectName: "huddle",
    projectImg: huddle,
    projectLink: "https://huddle-landing-page-gilt.vercel.app",
  },
  {
    projectName: "clipboard",
    projectImg: clipboard,
    projectLink: "https://clipboard-landing-page-shibcode.vercel.app",
  },
  {
    projectName: "flocked",
    projectImg: flocked,
    projectLink: "https://flocked-landing-clone.vercel.app",
  },
  {
    projectName: "dropdown",
    projectImg: dropdown,
    projectLink: "https://intro-section-with-dropdown.vercel.app",
  },
  {
    projectName: "storage-component",
    projectImg: storageComponent,
    projectLink: "https://data-storage-component-iota.vercel.app",
  },
  {
    projectName: "grid-component",
    projectImg: gridComponent,
    projectLink: "https://testimonial-grid-section-umber.vercel.app",
  },
  {
    projectName: "nft-component",
    projectImg: nftComponent,
    projectLink: "https://nft-preview-card-shibcode.vercel.app",
  },
  {
    projectName: "order-summary",
    projectImg: orderSummary,
    projectLink: "https://order-summary-five-chi.vercel.app",
  },
  {
    projectName: "price-component",
    projectImg: priceComponent,
    projectLink: "https://single-price-grid-component-shibcode.vercel.app",
  },
  {
    projectName: "rating-component",
    projectImg: ratingComponent,
    projectLink: "https://rating-component-five.vercel.app",
  },
  {
    projectName: "stats-preview-card",
    projectImg: statsPreviewCard,
    projectLink: "https://stats-preview-card-zeta.vercel.app",
  },
  {
    projectName: "qr-code-component",
    projectImg: qrCodeComponent,
    projectLink: "https://qr-code-tau.vercel.app",
  },
];

export default function Work() {
  return (
    <div className="work">
      {projects.map((project, index) => {
        return (
          <Project
            project={project.projectImg}
            projectClass={project.projectName}
            projectLink={project.projectLink}
            key={index}
          />
        );
      })}
    </div>
  );
}
