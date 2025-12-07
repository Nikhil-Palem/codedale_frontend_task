import { HiOutlineArrowSmallRight } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 px-4 sm:px-6">

      {/* Background Image */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-64 bg-cover bg-center opacity-5 pointer-events-none"
        style={{ backgroundImage: "url('/logo.png')" }}
      ></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-14 text-sm text-gray-700">

        {/* Logo + Description */}
        <div className="text-center sm:text-left">
          <img src="/logo.png" alt="CodeDale Logo" className="w-32 mb-4 mx-auto sm:mx-0" />
          <p className="leading-relaxed text-[16px]">
            Strategic web design, and campaigns tailored to drive result and
            conversions.
          </p>
        </div>

        {/* Company Links */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold mb-4 text-lg">Company</h4>
          <ul className="space-y-3">
            {["Services", "Our Work", "Achievements", "FAQs", "Brand", "Contact"].map((link) => (
              <li
                key={link}
                className="text-gray-600 hover:text-black cursor-pointer transition-colors duration-300 text-base hover:underline hover:underline-offset-4"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold mb-4 text-lg">Socials</h4>
          <ul className="space-y-3">
            {["Email ↗", "Instagram ↗", "LinkedIn ↗"].map((link) => (
              <li
                key={link}
                className="text-gray-600 hover:text-black cursor-pointer transition-colors duration-300 text-base hover:underline hover:underline-offset-4"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold mb-4 text-lg">Newsletter</h4>
          <p className="mb-4 text-[16px] text-gray-600">
            Stay ahead with design & marketing tips and strategies that drive
            results.
          </p>

          <div className="flex items-center bg-white rounded-full overflow-hidden border w-full max-w-sm mx-auto sm:mx-0">
            <input
              type="email"
              placeholder="@ Enter your email..."
              className="px-5 py-3 flex-1 outline-none"
            />
            <button className="bg-blue-600 text-white px-3 py-2 m-2 cursor-pointer rounded-full hover:bg-blue-700 transition-colors duration-300">
              <HiOutlineArrowSmallRight />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row gap-4 md:gap-0 justify-between border-t mt-14 pt-6 text-sm text-gray-500 text-center md:text-left">
        <p>© 2025 CodeDale All rights reserved</p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-4 sm:gap-6">
          <p className="text-gray-500 hover:text-black cursor-pointer transition-colors duration-300 hover:underline hover:underline-offset-2">
            Privacy Policy
          </p>
          <p className="text-gray-500 hover:text-black cursor-pointer transition-colors duration-300 hover:underline hover:underline-offset-2">
            Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
