

const Partner = () => {
    return (
        <div>
            <h1  className="text-4xl mb-2 font-serif text-center">Become a partner
               </h1>
               <p className="text-sm text-gray-400 font-serif text-center"> Build your brand or business by becoming a TeamWork Partner.</p>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                    <div className="p-10 shadow-sm shadow-[#67deae]" data-aos="zoom-in-up">
                        <h1 className="text-xl font-bold font-serif mb-4">Verified Consultants</h1>
                        <h1 className="text-base font-serif">Provide flexible services offerings for smaller customers and teams.</h1>
                        <hr className="my-2" />
                        <h1 className="text-sm font-serif">Talented individuals and emerging consultancies with less than 10 employees</h1>
                    </div>
                    <div className="p-10 shadow-sm shadow-[#67deae]" data-aos="zoom-in-up">
                        <h1 className="text-xl font-bold font-serif mb-4">Solution Partners</h1>
                        <h1 className="text-base font-serif">Aid purchasing and improve time-to-value with services and solutions.</h1>
                        <hr className="my-2" />
                        <h1 className="text-sm font-serif">Traditional consulting firms, Systems Integrators (SIs), and Value Added Resellers (VARs)</h1>
                    </div>
                    <div className="p-10 shadow-sm shadow-[#67deae]" data-aos="zoom-in-up">
                        <h1 className="text-xl font-bold font-serif mb-4">Alliance Partners</h1>
                        <h1 className="text-base font-serif">Extend value for customers through tech and product integration.</h1>
                        <hr className="my-2" />
                        <h1 className="text-sm font-serif">Independent Software Vendors (ISVs)</h1>
                    </div>
                    <div className="p-10 shadow-sm shadow-[#67deae]" data-aos="zoom-in-up">
                        <h1 className="text-xl font-bold font-serif mb-4">Affiliate Marketers</h1>
                        <h1 className="text-base font-serif">Grow your business by helping companies learn about and consider TeamWork.</h1>
                        <hr className="my-2" />
                        <h1 className="text-sm font-serif">Bloggers, search content creators, influencers, etc</h1>
                    </div>
               </div>
        </div>
    );
};

export default Partner;