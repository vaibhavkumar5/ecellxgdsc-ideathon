import React from "react";
import SubHeading from "../SubHeading";

function SponsorSection() {
  return (
    <div id="about" className="content-center p-4 mb-14 sm:p-8">
      <div className="hidden md:inline">
        <SubHeading head="SPONSORS" />
      </div>
      <div className="md:hidden">
        <SubHeading head="SPONSORS" />
      </div>
      <div id="sponsors">
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center text-center items-center py-8 w-[100%] lg:w-[90%]">
            <div className="space-y-8 px-8">

              <div className="space-y-8 px-8 pt-4">
                <div className="subhead4 text-3xl md:text-4xl font-Montserrat font-bold">
                  GOLD
                </div>
                <div className="px-4 grid md:grid-cols-2 place-items-center space-y-8 md:space-y-0">
                  <div className="w-[100%] px-4 md:w-[70%] logo">
                    <a
                      href="https://www.geekster.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://www.geekster.in/images/logo.svg"
                        alt="Geekster"
                        width={900}
                      />
                    </a>
                  </div>
                  <div className="w-[100%] px-4 md:w-[70%] logo">
                    <a
                      href="https://www.postman.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://www.pngkit.com/png/detail/206-2063294_the-postman-logo-is-available-in-png-svg.png"
                        alt="Postman"
                      />
                    </a>
                  </div>
                </div>
                <div className="px-4  grid md:grid-cols-3 place-items-center space-y-8 md:space-y-0">
                  <div></div>
                  <div className="w-[100%] md:w-[75%] logo">
                    <a
                      href="https://www.startuped.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://www.startuped.net/logo.png"
                        alt="StartupED"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <br />

              <div className="space-y-8 px-8 pt-4">
                <div className="subhead4 text-3xl md:text-4xl font-Montserrat font-bold">
                  SILVER
                </div>
                <div className="px-4 grid md:grid-cols-2 place-items-center space-y-8 md:space-y-0">
                  <div className="w-[100%] pt-0 md:pt-4 md:w-[60%] logo">
                    <a
                      href="https://solana.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdark-horizontal.e4df684f.svg&w=384&q=75"
                        alt="Solana"
                        width={900}
                      />
                    </a>
                  </div>
                  <div className="w-[100%] pt-0 md:pt-4 md:w-[60%] logo">
                    <a
                      href="https://polygon.technology/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://assets-global.website-files.com/637359c81e22b715cec245ad/63dc31f8817a4a509d7635a7_Logo.svg"
                        alt="Polygon"
                        width={900}
                      />
                    </a>
                  </div>
                </div>
                <div className="px-4 grid md:grid-cols-2 place-items-center space-y-8 md:space-y-0">
                  <div className="w-[100%] pt-0 md:pt-4 md:w-[60%] logo">
                    <a
                      href="https://devfolio.co/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://camo.githubusercontent.com/ae051926c204f4b701ddd9e25604e3cec66a55ba721e35729fa07cec5469de95/68747470733a2f2f67626c6f627363646e2e676974626f6f6b2e636f6d2f7370616365732532462d4c583277705558493165574d5934366e6b48522532466176617461722d72656374616e676c652e706e673f616c743d6d65646961"
                        alt="Devfolio"
                        width={900}
                      />
                    </a>
                  </div>
                  <div className="w-[100%] pt-0 md:pt-4 md:w-[60%] logo">
                    <a
                      href="https://www.newtonschool.co/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://global-uploads.webflow.com/62e8d2ea218fb7676b6892a6/62e8d2ea218fb73fa66895dd_88x37.webp"
                        alt="Newton School"
                        width={900}
                      />
                    </a>
                  </div>
                </div>
                <div className="px-4 grid md:grid-cols-1 place-items-center space-y-8 md:space-y-0">
                  <div className="w-[100%] pt-0 md:pt-4 md:w-[60%] logo">
                    <a
                      href="https://replit.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://blog.replit.com/images/logo.png"
                        alt="Replit"
                        width={900}
                      />
                    </a>
                  </div>
                </div>
              </div>

              <br />

              <div className="space-y-4 md:space-y-12 px-8 pt-12">
                <div className="subhead4 text-3xl md:text-4xl font-Montserrat font-bold">
                  BRONZE
                </div>
                <div className="px-4  grid md:grid-cols-3 place-items-center space-y-8 md:space-y-0">
                  <div className="w-[100%] md:w-[75%] logo">
                    <a
                      href="https://www.interviewcake.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://www.interviewcake.com/static/images/assets/cake_logo_white.svg"
                        alt="Interview Cake"
                      />
                    </a>
                  </div>
                  <div className="w-[100%] md:w-[75%] logo">
                    <a
                      href="https://balsamiq.cloud/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://balsamiq.com/assets/company/brandassets/balsamiq-logo-screen-1000x500.png"
                        alt="Balsamiq"
                      />
                    </a>
                  </div>
                  <div className="w-[70%] md:w-[75%] logo">
                    <a
                      href="https://gen.xyz/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://gen.xyz/wp-content/themes/xyz/images/xyz-footer.png"
                        alt="XYZ Domains"
                      />
                    </a>
                  </div>
                </div>
                <div className="px-4  grid md:grid-cols-1 place-items-center space-y-8 md:space-y-0">
                  <div className="w-[100%] md:w-[45%] logo">
                    <a
                      href="https://www.taskade.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://www.taskade.com/static_images/taskade-circle-logo-full-black.png"
                        alt="Taskade"
                      />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SponsorSection;
