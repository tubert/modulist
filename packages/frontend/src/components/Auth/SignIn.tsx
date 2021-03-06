import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { TextDivider } from '../ui/TextDivider/TextDivider';
import { AuthLayout } from './Layout/AuthLayout';

export default function SignIn() {
    return (
        <AuthLayout>
            <React.Fragment>
                <h1 className="text-2xl font-bold">Sign in to Modulist</h1>
                <a href="http://localhost:3001/auth/google" className="mt-6 rounded-lg bg-red-600 hover:bg-red-700 border text-red-100 px-20 py-2 text-center">
                    <FaGoogle style={{ display: 'inline-block' }} /> Sign in with google
                </a>
                <TextDivider className="my-8" text="or" />
                <Link to="/signup" className="bg-indigo-800 text-indigo-100 rounded-lg px-4 py-2 hover:bg-indigo-900 text-center">
                    Create an account
            </Link>
            </React.Fragment>
        </AuthLayout>
    );
}