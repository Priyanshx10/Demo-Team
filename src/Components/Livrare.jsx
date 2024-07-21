import React from 'react';

const Livarae = () => {
  return (
    <section className='flex-col items-center text-center'>
      <h1 className="font-myriad text-[70px] font-bold leading-[84px] tracking-[0.06em] text-[#47174C] pb-20">
        Livrare și achitare
      </h1>
      <p className="font-inter text-[22px] font-medium leading-[26.63px] tracking-[0.06em] text-[#47174C]">
        Suntem orientați spre comoditatea clienților noștri, de aceea
        oferim opțiuni flexibile de achitare și primire a produsului nostru.
      </p>

      <div className="flex flex-1 justify-center pt-20 px-20 space-x-2">
        <div className="flex flex-col items-center w-[496px] h-[272px] bg-[#47174C2E] justify-center px-12 rounded-md">
          <img src="./images/vector/cart.png" alt="cart" className="h-[90px] w-[90px] mb-3"/>
          <h4 class="font-myriad text-[28px] leading-[33.6px] tracking-[0.06em] text-center">COMANDA</h4>
          <p className="card-text">
            Comanda se poate face fie pe site-ul nostru, fie contactându-ne la numărul de telefon.
          </p>
        </div>
        <div className="flex flex-col items-center w-[496px] h-[272px] bg-[#47174C2E] justify-center px-12 rounded-md">
          <img src="./images/vector/hugeicons_truck-delivery.png" alt="hugeicons_truck" className="h-[90px] w-[90px] mb-3"/>
          <h4 class="font-myriad text-[28px] leading-[33.6px] tracking-[0.06em] text-center">LIVRARE</h4>
          <p className="card-text">
            Oferim livrare foarte rapidă, încât să vă puteți bucura de produsul nostru în cel mai scurt
            timp posibil.
          </p>
        </div> 
        <div className="flex flex-col items-center w-[496px] h-[272px] bg-[#47174C2E] justify-center px-12 rounded-md">
          <img src="./images/vector/Vector.png" alt="vector"  className="h-[80px] w-[80px] mb-3"/>
          <h4 class="font-myriad text-[28px] leading-[33.6px] tracking-[0.06em] text-center">ACHITARE</h4>
          <p className="card-text">
            Achitarea se poate efectua la primirea produsului sau la efectuarea comenzii.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Livarae;