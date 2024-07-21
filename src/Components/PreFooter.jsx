import React from 'react';

const Prefooter = () => {
  return (
    <footer className='h-[310px] flex flex-1 items-center justify-center space-x-10'>
      <div>
        <img src="./images/logo/Logo.png" alt="logo" className="logo" />
      </div>

      <div>
        <h5>Numărul de contac</h5>
        <div className="flex flex-1 space-x-2">
          <img src="./images/vector/ic_round-phone.png" alt="phone" />
          <p><b>+ (373) 79 812 818</b></p>
        </div>
      </div>

      <div>
        <h5>E-mail</h5>
        <div className="flex flex-1">
          <img src="./images/vector/material-symbols-light_mail.png" alt="mail" />
          <p><b>bsvdistribution@gmail.com</b></p>
        </div>
      </div>
    </footer>
  );
};

export default Prefooter;