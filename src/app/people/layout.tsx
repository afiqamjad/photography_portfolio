import React from 'react'
export default function PeopleLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div>
        <main>{children}</main>
      </div>
    );
  }