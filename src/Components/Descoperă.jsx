import React from 'react';

const Descoperă = () => {
  return (
    <section>
    <h1 class="font-myriad text-[70px] font-bold leading-[84px] tracking-[0.06em] text-[#47174C] pb-20">Descoperă Produsul nostru</h1>
    
    <div class="flex flex-col px-40 my-20">
      <div class="flex items-center">
        <img src="./images/vector/ic_round-phone.png" alt="phone" class="mr-2" />
        <p><b>+ (373) 79 812 818</b></p>

        <div class="flex items-center ">
        <img src="./images/vector/material-symbols-light_mail.png" alt="mail" class="mr-2" />
        <p><b>bsvdistribution@gmail.com</b></p>
      </div>
      </div>
      
     
  
      <div id="p">
        <img src="./images/Product/Pulm4.png" alt="pulm4" />
      </div>
    </div>
  
    <div class="form-section mt-8">
      <h3 class="text-[44px] font-semibold leading-[52.8px] tracking-[0.06em] text-left text-[#47174C]">Completați formularul</h3>
      <p class="text-[#47174C] font-normal leading-[26.63px] text-left text-[22px]">Și vom reveni în cel mai apropiat timp cu un sunet</p>
      
      <form action="/action_page.php">
        <input type="text" id="name" name="name" placeholder="Nume, Prenume*" required /><br />
        <input type="number" id="number" name="number" placeholder="Telefon*" required /><br />
        <input type="email" id="email" name="email" placeholder="Email*" required /><br /><br />
        <input type="submit" value="Transmite" />
      </form>
    </div>
  </section>
  );
};

export default Descoperă;