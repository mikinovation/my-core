import React, { memo } from 'react';

const Footer = memo(() => (
  <footer className="flex flex-col items-center justify-center w-full p-24">
    <p className="text-center text-gray-600">
      ©
      {' '}
      {new Date().getFullYear()}
      ,
      {' '}
      Mikihiro Saito
    </p>
  </footer>
));

export default Footer;
