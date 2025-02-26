import React from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';

const ContactForm: React.FC = () => {

    function sendEmail(e:any) {
        e.preventDefault();
        
        emailjs.sendForm('service_ayk0x', 'template_80rfk', e.target, 'hjwZhumEPSxdoTW')
        .then((result) => {
            console.log(result.text);
            toast.success('Message sent successfully, we will get back to you as soon as possible' );
            e.target.reset();
        }, (error) => {
            console.log(error.text);
            toast.error('An error occurred, please try again later or contact us via email or phone' );
        });
    }

    return (
        <div>
            <form className="space-y-6" onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nombre completo</label>
                        <input
                            type="text"
                            name="from_name" 
                            id="from_name"
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 focus:border-[#ffa12a] focus:outline-none dark:bg-gray-800 dark:text-white"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Correo electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 focus:border-[#ffa12a] focus:outline-none dark:bg-gray-800 dark:text-white"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Asunto</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 focus:border-[#ffa12a] focus:outline-none dark:bg-gray-800 dark:text-white"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mensaje</label>
                    <textarea
                        id="message" 
                        name="message"
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 focus:border-[#ffa12a] focus:outline-none dark:bg-gray-800 dark:text-white"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[#ffa12a] text-white font-semibold rounded-lg hover:bg-[#ff9011] transition-all duration-300 hover:shadow-lg"
                >
                    Enviar Mensaje
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ContactForm;