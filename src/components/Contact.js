const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Contact</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full p-3 border rounded"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-3 border rounded"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full p-3 border rounded"
              id="message"
              name="message"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
