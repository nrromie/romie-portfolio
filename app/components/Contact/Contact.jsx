import React, { useState } from 'react';

const Contact = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission logic here
        console.log(formData);
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 resize-none" required></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
            </form>
        </div>
    );
};

export default Contact;