
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Features</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Documentation</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8">
          <div className="flex space-x-4">
            <a href="http://github.com/FlorianM-C22" className="text-gray-600 hover:text-gray-800"><GitHubLogoIcon className="w-6 h-6" /></a>
            <a href="http://www.linkedin.com/in/florian-meignan-b21937210/" className="text-gray-600 hover:text-gray-800"><LinkedInLogoIcon className="w-6 h-6" /></a>
            <a href="http://www.twitter.com/ad_illy" className="text-gray-600 hover:text-gray-800"><TwitterLogoIcon className="w-6 h-6" /></a>
          </div>
          <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Homie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
