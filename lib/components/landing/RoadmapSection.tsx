interface RoadmapCardProps {
  title: string;
  content: string[];
  direction: boolean;
}

const contents = [
  {
    title: "Phase 1",
    content: [
      "Website Launch",
      "Text to Image Generation Launch",
      "NFT Mint",
      "NFT Marketplace Launch",
      "Community Building"
    ]
  },
  {
    title: "Phase 2",
    content: [
      "Public and Private Presale",
      "Text to Video Generation",
      "Text to Music Generation",
      "CoinMarketCap and CoinGecko Listing",
      "Staking Launch",
      "Community Building Stage 02"
    ]
  },
  {
    title: "Phase 3",
    content: [
      "Community Building Stage 03",
      "NFT Campaign",
      "10000+ $NYWNFT Holders",
      "CEX Listing",
      "Celebrity Partnerships",
      "Preparation for POD Marketplace"
    ]
  },
  {
    title: "Phase 4",
    content: [
      "Community Building Stage 04",
      "AI Image Editting Lanch",
      "POD Marketplace Launch",
      "UI/UX Update"
    ]
  },
  {
    title: "Phase 5",
    content: [
      "Community Building Stage 05",
      "NFT Card Game Development",
      "AI Model Development",
      "More to be announced in the Future"
    ]
  }
]

const RoadmapCard = ({ title, content, direction }: RoadmapCardProps) => {
  return (
    <div className={`p-1 ${!direction ? "roadmap-card" : "roadmap-left-card"}`}>
      <div className="p-2 rounded-[0.5rem] bg-dark-blue">
        <div className={`p-4 rounded-[0.5rem] border border-gray-700/30 bg-gradient-to-r from-gray-700/50 to-gray-700/10 text-left`}>
          <p className="font-large">{title}</p>
          {content.map((item, index) => (
            <p key={index} className="font-normal">{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function RoadmapSection() {
  return (
    <section className="mt-16">
      <div className="container text-center">
        <h2>NYWNFT Roadmap</h2>
        <p>The largest and unique Super rare NFT marketplace For crypto-collectibles</p>
        <div className="relative mt-10">
          <div className="flex relative flex-col">
            <div className="flex lg:w-1/2">
              <div className="w-[80%]">
                <RoadmapCard title={contents[0].title} content={contents[0].content} direction={false} />
              </div>
              <div className="w-[20%] flex items-center">
                <img className="hidden lg:block w-full" src="/arrowlineleft.svg" />
              </div>
            </div>
            <div className="hidden lg:block place-center w-6 h-6 rounded-full bg-light-blue">
            </div>
          </div>
          <div className="flex justify-end lg:-translate-y-[50%]">
            <div className="flex w-full lg:w-1/2">
              <div className="w-[20%] flex items-center">
                <img className="hidden lg:block w-full" src="/arrowlineright.svg" />
              </div>
              <div className="w-[80%]">
                <RoadmapCard title={contents[1].title} content={contents[1].content} direction={true} />
              </div>
            </div>
            <div className="hidden lg:block place-center w-6 h-6 rounded-full bg-light-blue">
            </div>
            <div className="hidden lg:block place-center h-full w-[4px] bg-light-blue"></div>
          </div>
          <div className="relative lg:-translate-y-[50%]">
            <div className="flex lg:w-1/2">
              <div className="w-[80%]">
                <RoadmapCard title={contents[2].title} content={contents[2].content} direction={false} />
              </div>
              <div className="w-[20%] flex items-center">
                <img className="hidden lg:block w-full" src="/arrowlineleft.svg" />
              </div>
            </div>
            <div className="hidden lg:block place-center w-6 h-6 rounded-full bg-light-blue"></div>
            <div className="hidden lg:block place-center h-full w-[4px] bg-light-blue"></div>
          </div>
          <div className="relative flex justify-end lg:-translate-y-[100%]">
            <div className="flex w-full lg:w-1/2">
              <div className="w-[20%] flex items-center">
                <img className="hidden lg:block w-full" src="/arrowlineright.svg" />
              </div>
              <div className="w-[80%]">
                <RoadmapCard title={contents[3].title} content={contents[3].content} direction={true} />
              </div>
            </div>
            <div className="hidden lg:block place-center w-6 h-6 rounded-full bg-light-blue"></div>
            <div className="hidden lg:block place-center h-full w-[4px] bg-light-blue"></div>
          </div>
          <div className="relative lg:-translate-y-[100%]">
            <div className="flex lg:w-1/2">
              <div className="w-[80%]">
                <RoadmapCard title={contents[4].title} content={contents[4].content} direction={false} />
              </div>
              <div className="w-[20%] flex items-center">
                <img className="hidden lg:block w-full" src="/arrowlineleft.svg" />
              </div>
            </div>
            <div className="hidden lg:block place-center w-6 h-6 rounded-full bg-light-blue"></div>
            <div className="hidden lg:block place-center h-full w-[4px] bg-light-blue absolute top-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}