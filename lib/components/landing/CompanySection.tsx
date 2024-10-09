import React from "react";
import CompanyBanner from "../banner/CompanyBanner";

const logos = [
  {
    name: "butterfly",
    img: "./company logos/butterfly.png"
  },
  {
    name: "calendly",
    img: "./company logos/calendly.png"
  },
  {
    name: "github",
    img: "./company logos/github.png"
  },
  {
    name: "monday",
    img: "./company logos/monday.png"
  },
  {
    name: "quotient",
    img: "./company logos/quotient.png"
  },
  {
    name: "trust",
    img: "./company logos/trust.png"
  },
  {
    name: "butterfly",
    img: "./company logos/butterfly.png"
  },
  {
    name: "calendly",
    img: "./company logos/calendly.png"
  },
  {
    name: "github",
    img: "./company logos/github.png"
  }
]

export default function CompanySection() {
  return (
<div className="mt-16 text-center">
  <div className="container">
  <h2>Our Core Companies</h2>
  <p>The largest and unique Super rare NFT marketplace For crypto-collectibles</p>
  <section className="mx-auto w-full px-6 py-20 lg:px-8">
    <CompanyBanner shouldPauseOnHover gap="40px">
      {/* <div className="flex flex-wrap justify-center gap-4"> */}
        {logos.map(({ name, img }) => (
          <div key={name} className="flex-none w-48 h-48 text-foreground">
            <img src={img} alt={name} className="w-full h-full object-contain" />
          </div>
        ))}
      {/* </div> */}
    </CompanyBanner>
  </section>
  </div>
</div>

  );
}