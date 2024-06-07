const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} YourName. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-gray-400">Twitter</a>
            <a href="#" className="hover:text-gray-400">LinkedIn</a>
            <a href="#" className="hover:text-gray-400">GitHub</a>
          </div>
        </div>
      </footer>
    );
  };
  export default Footer;
  