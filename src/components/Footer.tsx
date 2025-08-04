const Footer = () => (
  <footer className="w-full py-6 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 text-center text-sm text-gray-500 border-t border-gray-200 mt-12">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      <span>&copy; {new Date().getFullYear()} Student Council Bits Pilani Dubai . All rights reserved.</span>
      <span className="mt-2 md:mt-0">
        Made with <span className="text-pink-500">♥</span> by Student Council
      </span>
    </div>
  </footer>
);

export default Footer;
