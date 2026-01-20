"use client"
import React from 'react';
import { RegistrationProvider } from './RegistrationContext';

export default function LogOutLayout({ children }) {
  return (
    <RegistrationProvider>
      {children}
    </RegistrationProvider>
  );
}
