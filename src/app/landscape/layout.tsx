import React from 'react'
export default function LandscapeLayout({
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