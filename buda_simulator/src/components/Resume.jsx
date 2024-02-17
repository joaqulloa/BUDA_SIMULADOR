import React from 'react'
import styles from '../style'
import money from '../assets/money.png'

const Card = ({ title, value, icon }) => {
    return (
        <div className={`flex xs:flex-row flex-col xs:p-6 p-2 rounded-[20px]`}>
        <div className={`xs:mb-0 mb-6 w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-[#d1d4db] p-3`}>
          <img src={icon}/>
        </div>
        <div className='flex-1 flex flex-col ml-3'>
          <h4 className='font-poppins font-semibold text-dimWhite text-[18px] leading-[23.4px] mb-1'>
            {title}
          </h4>
          <p className='font-poppins font-normal text-green-500 text-[16px] leading-[24px]'>
            {value}
          </p>
        </div>
      </div>
    );
  };

const Resume = ({mount, invested, value}) => {

    const amountInvested = `$${invested}`;
    const portfolioValue = `$${Number(value).toFixed(2)}`;

  return (
    <section id="resume" className={`flex md:flex-col flex-col ${styles.paddingY} ${styles.flexCenter}`}>
        
        <h1 className={`font-poppins font-semibold xs:text-5xl text-2xl xs:mb-0 mb-5 xs:leading-[76.8px] leading[66.8px]  text-white`}>Bitcoin DCA Simulator</h1>

        <p className={`text-dimWhite text-lg xs:mb-0 mb-5`}>Rendimiento histórico del DCA al comprar Bitcoin (BTC) mensualmente con {mount} US Dollars</p>

        <div className='flex flex-row'>
        {/* Card: Monto Invertido */}
        <Card title="Monto Invertido" value={amountInvested} icon={money} />

        {/* Card: Valor del Portafolio */}
        <Card title="Valor del Portafolio" value={portfolioValue} icon={money}/>
        </div>
    </section>
  )
}

export default Resume