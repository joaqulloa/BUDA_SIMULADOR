import React from 'react';
import styles from '../style';
import buda from '../assets/buda.png';
import { footerLinks} from '../constants';

const FooterSection = () => (
    <section  className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-[1] flex flex-col justify-start mr-10'>
          <img src={buda} alt="feedbacker" className='w-[220px] h-[72.14px] object-contain'/>
          <p className={`${styles.paragraph} mt-4 max-w-[312px] text-white`}>
            El sitio más seguro y conveniente para comprar y vender bitcoins, ethereum y otras criptomonedas.
          </p>
        </div>

        <div className='flex-[1.5] w-full flex xs:flex-row flex-col justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((footerlink) => (
            <div key={footerlink.title} className={`flex flex-col  ss:my-0 my-4 min-w-[150px]`}>
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
                {footerlink.title}
              </h4>
              <ul className='list-none mt-4'>
                {footerlink.links.map((link, index) => (
                  <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] hover:text-secondary cursor-pointer ${index !== footerlink.links.lenght - 1 ? "mb-4" : "mb-0"} text-white`}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>  
          ))}
        </div>
      </div>

      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[#3F3E45]'>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
          
        </p>

      
      </div>
    </section>
)

export default FooterSection;
