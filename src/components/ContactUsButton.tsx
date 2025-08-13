// Author: Manav Arya & Ashmit Dhon
import { Link } from "react-router-dom";

const ContactUsButton = () => (
  <Link
    to="/contact"
    className="fixed bottom-5 right-5 z-[100] bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 text-lg"
    style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.15)" }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.5a2.25 2.25 0 01-2.36 0l-7.5-4.5A2.25 2.25 0 012.25 6.993V6.75" />
    </svg>
    Contact Us
  </Link>
);

export default ContactUsButton;
