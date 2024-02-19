import React from 'react'
import image from "../../image.png"
import { PageBreak } from '@onedoc/react-print'
const Page = () => {
    return (
      <>
            <div className="page1 flex flex-col">
          <div className="part1">
              <img src={image.src} alt="" />
          </div>
          <div className="part2 flex flex-col px-[15px] py-[10px]">
              <span className="text-[18px] font-extrabold">Periscope for Consumer Goods:<br/>
                  Drive transformational growth
                  in consumer goods with
                  meaningful insights
              </span>
              <span className="text-[12px] font-semibold">
              Periscope by McKinsey empowers consumer goods companies
to drive profitable growth. Our solutions focus on insights
creation, marketing optimization, and pricing, promotion,
and category management. Periscope’s unique combination of
deep expertise, advanced insights, and high impact solutions
generate 2-5% improvement in ROS and 1.5% margin uplift.
              </span>
              
          </div>
            </div>
            <PageBreak/>
            <div className="page2 flex flex-col p-[15px] bg-[#051c2c]">
                <div className="part1 flex text-white mb-[20px]">
                    <div className="subpart1 w-[50%] font-bold text-[12px] mr-[5%]">
                    Periscope solutions for consumer
goods provide transparency
into big data and help
companies gather actionable
insights at SKU, brand, and
category level to drive lasting
performance improvement. 
                    </div>
                    <div className="subpart2 w-[45%] text-[8px]">
                    Periscope enables insight-driven decision making
across the entire value chain from marketing
optimization and category management to pricing
and promotions management. Periscope also helps to
improve collaboration and negotiation with retailers
                    </div>
                </div>
                <div className="part2 border-[#1d3dd6] border-l-2 flex flex-col text-white">
                    <div className="subpart1 flex">
                        <div className="box1  p-2 flex flex-col w-[25%]">
                            <div className="heading font-bold text-[10px]">
                                Marketing Solutions <span className="opacity-0">Solutions</span> 
                            </div>
                            <div className="description text-[#8f9aa4] text-[8px]">
                            Get cutting-edge insights
into customers’ needs and
make data-driven decisions
to optimize marketing spend
and personalize customer
communication that drive
sustainable growth and
outperform competitors
                            </div>
                        </div>
                        <div className="box2 border-white border-l-2 p-2 flex flex-col w-[25%]">
                            <div className="heading font-bold text-[10px]">
                            Customer
Experience
Solutions
                            </div>
                            <div className="description text-[#8f9aa4] text-[8px]">
                            Enhance customer
experience by capturing
feedback from all
your customers, across
every channel 
                            </div>
                        </div>
                        <div className="box3 border-white border-l-2 p-2 flex flex-col w-[25%]">
                            <div className="heading font-bold text-[10px]">
                            Category
Solutions <span className="opacity-0">Solutions</span>  
                            </div>
                            <div className="description text-[#8f9aa4] text-[8px]">
                            Become category
captain, understand
customer behavior,
and optimize assortment
and space allocation
accordingly
                            </div>
                        </div>
                        <div className="box4 border-white border-l-2 p-2 flex flex-col w-[25%]">
                            <div className="heading font-bold text-[10px]">
                            Pricing 
Solutions <span className="opacity-0">Solutions</span> <span className="opacity-0">Solutions</span> 
                            </div>
                            <div className="description text-[#8f9aa4] text-[8px]">
                            Optimize pricing,
promotions, and
markdown in a
fastchanging market
environment across
all seasons

                            </div>
                        </div>

                    </div>
                    <div className="subpart2 flex flex-col p-[2%] pr-0">
                        <span className="text-[12px] font-bold mb-[10px]">
                        Periscope® Platform
                        </span>
                        <div className="blocks flex justify-between">
                            <div className="block1 border-[#1d3dd6] border-2 w-[23%] text-[9px] flex items-center justify-center py-1 text-center ">
                                Data Management <br />
                                & Enrichment
                            </div>
                            <div className="block2 border-[#1d3dd6] border-2 w-[23%] text-[9px] flex items-center justify-center py-1 text-center">
                                Insights <br />
                                Expertise
                            </div>
                            <div className="block3 border-[#1d3dd6] border-2 w-[23%] text-[9px] flex items-center justify-center py-1 text-center">
                                Implementation <br />
                                & Client Service
                            </div>
                            <div className="block4 border-[#1d3dd6] border-2 w-[23%]  text-[9px] flex items-center justify-center py-1 text-center">
                                Capability <br />
                                & Training
                            </div>
                        </div>
                    </div>
                    <div className="subpart3 ml-2 border-[#1d3dd6] border-2 text-center text-[9px] p-1">
                        Technology Platform and Partnerships
                    </div>
                </div>
                <div className="part3 mt-[20px] text-[9px] text-[#62707a]">
                The Periscope platform combines world-leading
intellectual property, prescriptive analytics, and
cloud-based tools with expert support and training.
It is a unique combination that drives revenue
growth, both now and into the future.
                </div>
            </div>
            <PageBreak/>
            <div className="page3 flex flex-col p-[15px]">
                <div className="part1 flex pb-[15px] border-black border-b-2">
                    <div className="subpart1 flex flex-col w-[50%] text-center">
                       <span className="text-[12px] font-extrabold mb-[5px]">
                        Marketing Solutions:
                        </span>
                        <span className="text-[20px] text-[#1f40e6] font-bold mb-[5px]">
                            1.5%
                        </span>
                        <span className="text-[10px] font-bold mb-[10px]">
                            Marign improvement per year
                        </span>
                        <span className="text-[20px] text-[#1f40e6] font-bold mb-[5px]">
                            2-5%
                        </span>
                        <span className="text-[10px] font-bold mb-[10px]">
                            On topline growth
                        </span>
                        <span className="text-[20px] text-[#1f40e6] font-bold mb-[5px]">
                            15-30%
                        </span>
                        <span className="text-[10px] font-bold mb-[10px]">
                            Marketing spend reduction
                        </span>
                    </div>
                    <div className="subpart2 text-[9px] w-[50%]">
                        <p>Helps consumer goods companies identify what
customers want and when they want it. It forms a
360 degree view of customers by integrating hard
scientific methods, objective facts, and cutting
edge analytics. <br />
— Leverages quantitative and qualitative research
methods to understand consumer needs and
decision-making processes. <br />
— Analyzes consumer choices and builds
consumer-centric strategies using analytic
approaches such as Growth Maps and Consumer
Purchase Structures <br />
— Assesses competitive positioning at SKU level
and brandshopper interaction in real time to
identify category dynamics and checks new
market entrants in online channels. <br />
Helps consumer goods companies boost marketing
returns by evaluating spend effectiveness across
brands and channels, improving brand messaging,
and enabling data-driven budget allocation decisions. <br />
— Provides full transparency on
marketing performance <br />
— Enables companies to make better decisions
on brand positioning and marketing investment
allocation, leading to increased marketing
                            return on investment
                        </p>
                    </div>
                </div>
                <div className="part2 flex pt-[15px]">
                    <div className="subpart1 flex flex-col w-[50%] text-center">
                       <span className="text-[12px] font-extrabold mb-[5px]">
                        Category Solutions:
                        </span>
                        <span className="text-[30px] text-[#1f40e6] font-bold mb-[2px]">
                            7%
                        </span>
                        <span className="text-[10px] font-bold mb-[8px]">
                            ROS increase
                        </span>
                        <span className="text-[30px] text-[#1f40e6] font-bold mb-[2px]">
                            1.5%
                        </span>
                        <span className="text-[10px] font-bold mb-[8px]">
                            Annual increase in margin
                        </span>
                        <span className="text-[30px] text-[#1f40e6] font-bold mb-[2px]">
                            30:1
                        </span>
                        <span className="text-[10px] font-bold mb-[8px]">
                            Typical investment
                        </span>
                    </div>
                    <div className="subpart2 text-[9px] w-[50%]">
                        <p>Helps consumer goods manufacturers turn big data
into insights to understand and act on the needs
and buying behaviors of real shoppers to improve
category performance. <br />
— Transforms retailer loyalty program and customer
purchase information into actionable insights
by category and customer segments and
strengthens retailer partnerships by leveraging
these insights <br />
— Optimizes assortment and improves category
performance by creating accurate in-store
product facings and listings and determining
item-level transferable demand and walk rates to
quantify the impact of specific item changes
<br />
                        </p>
                    </div>
                </div>
            </div>
            <PageBreak/>
            <div className="page4  flex p-[15px]">
                    <div className="subpart1 flex flex-col w-[50%] text-center">
                       <span className="text-[12px] font-extrabold mb-[5px]">
                        Pricing Solutions:
                        </span>
                        <span className="text-[20px] text-[#1f40e6] font-bold mb-[5px]">
                            2-5%
                        </span>
                        <span className="text-[10px] font-bold mb-[10px]">
                            Sales lift
                        </span>
                        <span className="text-[20px] text-[#1f40e6] font-bold mb-[5px]">
                            1.5%
                        </span>
                        <span className="text-[10px] font-bold mb-[10px]">
                            Margin uplift
                        </span>
                        <span className="text-[20px] text-[#1f40e6] font-bold mb-[5px]">
                            10-20%
                        </span>
                        <span className="text-[10px] font-bold mb-[10px]">
                            Increase in trade spend effectiveness
                        </span>
                    </div>
                    <div className="subpart2 text-[9px] w-[50%]">
                        <p>Provides consumer goods executives with the
analytics, automation, and expert insights they
need to optimize pricing and promotions based
on demand, margins, and competition. <br />
— Provides a flexible price-setting model to
calculate target and list prices <br />
— Offers a price management system, including
workflow, that ensures prices are validated by all
stakeholders before they go out to the market<br />
— Identifies areas of under- and over-promotion
investment using granular analytics <br />
-Supports promotion calendar planning <br />
— Microtests multiple offers on digital platforms
before rolling out at scale
                        </p>
                    </div>
            </div>
      </>
        
  )
}

export default Page