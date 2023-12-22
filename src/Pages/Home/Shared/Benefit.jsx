import { SlPeople } from "react-icons/sl";
import { FaCashRegister } from "react-icons/fa";
import { FaChildren } from "react-icons/fa6";

const Benefit = () => {
    return (
        <div>
                  <h1 className="text-4xl font-serif text-center mt-20 mb-2">To whom this can be benefited?</h1>
                  <p className="text-sm font-serif text-gray-400 text-center mb-16">Identifying Those Who Stand to Gain: A Closer Look at Potential Beneficiaries</p>

            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="flip-up">
                         <SlPeople className="text-3xl mb-2"></SlPeople>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white font-serif">Developers</h5>
                        </a>
                        <p className="mb-3 font-normal font-serif text-gray-500 dark:text-gray-400">Developers can benefit from a task management website to organize their coding tasks, track project timelines, and collaborate with team members. The platform can help manage code reviews, bug fixes, and feature implementations efficiently, ensuring a streamlined development process.</p>
                        <a href="/" className="inline-flex font-serif items-center text-blue-600 hover:underline">
                            See our guideline
                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                            </svg>
                        </a>
                    </div>
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="flip-up">
                         <FaCashRegister className="text-3xl mb-2"></FaCashRegister>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white font-serif">Bankers</h5>
                        </a>
                        <p className="mb-3 font-normal font-serif text-gray-500 dark:text-gray-400">Bankers, dealing with diverse financial tasks and projects, can leverage a task management website to keep track of critical deadlines, compliance requirements, and financial reporting. The platform can help in coordinating tasks related to audits, regulatory submissions, and project management within the banking sector.</p>
                        <a href="/" className="inline-flex font-serif items-center text-blue-600 hover:underline">
                            See our guideline
                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                            </svg>
                        </a>
                    </div>
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="flip-up">
                         <FaChildren className="text-3xl mb-2"></FaChildren>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white font-serif">Students</h5>
                        </a>
                        <p className="mb-3 font-normal font-serif text-gray-500 dark:text-gray-400">Students can use a task management website to organize their academic assignments, track project deadlines, and manage study schedules. It serves as a digital planner, helping students stay on top of coursework, group projects, and exam preparation.</p>
                        <a href="/" className="inline-flex font-serif items-center text-blue-600 hover:underline">
                            See our guideline
                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefit;