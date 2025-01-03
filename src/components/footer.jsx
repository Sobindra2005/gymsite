import Link from 'next/link'
import { BiPhone } from 'react-icons/bi';
import { CgMail } from 'react-icons/cg';
import { CiLocationOn } from 'react-icons/ci';
export default function Footer() {


    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 container py-4">
                <div className="flex flex-wrap justify-between items-start">
                    <div className="w-full md:w-1/3 text-center md:text-left">
                        <h3 className="text-lg font-semibold"><span className='text-blue-600'>Fit</span><span className='text-red-600'>Life</span><span className='text-green-600'>Gym</span> </h3>
                        <p className="mt-2 text-sm">Your path to a healthier lifestyle</p>
                        <p className="mt-2 text-sm flex items-center gap-2 "><CiLocationOn /> <a href="#" className="text-white hover:text-gray-300">123 Fitness St, Workout City</a></p>
                        <p className="mt-2 text-sm flex items-center gap-2"> <BiPhone /> <a href="tel:(123) 456-7890" className="text-white hover:text-gray-300">(123) 456-7890</a></p>
                        <p className="mt-2 text-sm flex items-center gap-2"><CgMail /> <a href="mailto:info@fitlifegym.com" className="text-white hover:text-gray-300">info@fitlifegym.com</a></p>
                    </div>
                    <div className="w-full md:w-1/3 mt-4 md:mt-0">
                        <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
                        <ul className="text-sm">
                            <li><Link href="#pricing" className="hover:text-gray-300" >Membership</Link></li>
                            <li><Link href="#contact" className="hover:text-gray-300">Contact</Link></li>
                            <li><Link href="#about" className="hover:text-gray-300" >About Us</Link></li>
                            <li><Link href="#services" className="hover:text-gray-300" >Services</Link></li>
                            <li><Link href="#blog" className="hover:text-gray-300">Blog</Link></li>
                            <li><Link href="#faqs" className="hover:text-gray-300">FAQs</Link></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 mt-4 md:mt-0 text-center md:text-right">
                        <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
                        <div className="flex justify-center md:justify-end space-x-4">
                            <a href="#" className="text-white hover:text-gray-300">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}