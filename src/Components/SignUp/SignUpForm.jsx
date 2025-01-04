import React, { useState } from 'react';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className="sign-up-form">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block mb-2">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="border p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="confirmPassword" className="block mb-2">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="border p-2 w-full"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                Sign Up
            </button>
        </form>
    );
};

export default SignUpForm;