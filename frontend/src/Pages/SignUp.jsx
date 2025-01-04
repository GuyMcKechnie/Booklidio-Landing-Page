import React from 'react';
import Header from '../components/Common/Header';
import SignUpForm from '../components/SignUp/SignUpForm';
import SignUpInfo from '../components/SignUp/SignUpInfo';
import Footer from '../components/Common/Footer';

const SignUp = () => {
    return (
        <div>
            <Header />
            <main className="px-[5%] py-16">
                <SignUpInfo />
                <SignUpForm />
            </main>
            <Footer />
        </div>
    );
};

export default SignUp;