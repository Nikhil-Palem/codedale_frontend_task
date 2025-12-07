export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
      <div className="flex flex-col gap-18">
        <div>
          <h4 className="text-sm mb-2">Book a call</h4>
          <h2 className="text-4xl font-semibold mb-4">Let’s Collaborate</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Reach out and let's explore how we can bring your ideas to life. Whether you're ready to begin or just have questions.
          </p>
        </div>
        <div>
          <p className="font-medium font-bold py-2 text-xl">+91 70756 31155</p>
          <h2 className="text-3xl mb-4">hello@codedale.tech</h2>
          <p className=" text-md mb-6"> Reach out to us via email or give us a call, we are happy to assist you!</p>
        </div>
      </div>

      <form className="space-y-6">
        {["Name", "Email"].map((item) => (
          <input
            key={item}
            placeholder={item}
            className="w-full border-gray-300 border rounded-full px-6 py-4"
          />
        ))}

        <div className="grid grid-cols-2 gap-4">
          <input
            placeholder="Company Name"
            className="border border-gray-300 rounded-full px-6 py-4"
          />
          <input
            placeholder="Phone"
            className="border border-gray-300 rounded-full px-6 py-4"
          />
        </div>

        <select
          class="border cursor-pointer text-gray-700 w-full border-gray-300 rounded-full px-6 py-4"
        >
          <option className="color-gray-300" value="">Select a budget</option>
          <option value="1000">$1000</option>
          <option value="2000">$2000</option>
          <option value="3000">$3000</option>
          <option value="4000">$4000</option>
          <option value="5000">$5000</option>
        </select>


        <textarea
          placeholder="What can we help you with?"
          className="border border-gray-300 rounded-3xl w-full px-6 py-4 h-28"
        />

        <button className="bg-black text-white w-full py-4 rounded-full text-lg">
          Send Message
        </button>
      </form>
    </section>
  );
}
