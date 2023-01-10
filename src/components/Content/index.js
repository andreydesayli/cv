import React from 'react'
import Skill from '../Skill'
import Title from '../Title'

const Content = () => {
    const handleClick = () => {
        alert("Sorry, this link is private!")
    }
  return (
    <div className='w-full h-auto px-[180px] mt-[70px]'>
        <div className='flex'>
            <Title text="01 PROFILE"/>
            <h1 className="font-roboto font-normal text-[17px] text-[#000000B2] w-[700px] text-justify">UX/UI specialist focused on designing clean and functional projects across all platforms and devices in response to specific briefs and problems, while always maintaining a unique look and feel.</h1>
        </div>
        <div className='flex mt-[50px]'>
            <Title text="02 EXPERIENCE"/>
            <div>
                <h1 className='font-roboto font-semibold text-[17px]'>Internship (PT Klabat Tekno Perkasa)</h1>
                <p className='font-roboto font-normal text-[17px] mt-[3px] mb-[5px]'>Front-End & Back-End Developer</p>
                <div className='font-roboto font-normal text-[17px] text-[#000000B2]'>
                    <p>July 2022 - January 2023</p>
                    <a href='https://pdpembangunansulut.com/' target={'_blank'}>
                        <p className='my-[8px] hover:bg-sky-100 cursor-pointer'>⊛ Website for Perusahaan Daerah Pembangunan Sulawesi Utara</p>
                    </a>
                    <a href='https://ritkolautsa-fikunklab.web.app/' target={'_blank'}>
                        <p className='my-[8px] hover:bg-sky-100 cursor-pointer'>⊛ Website for the Ritkola-Utsa events</p>
                    </a>
                    <a href='https://tour4kota-unklabfik.web.app/' target={'_blank'}>
                        <p className='my-[8px] hover:bg-sky-100 cursor-pointer'>⊛ Website for the JarankPulang band's 4 city tour</p>
                    </a>
                    <a href='http://www.airmadidi-rentalcarmanado.com/' target={'_blank'}>
                        <p className='my-[8px] hover:bg-sky-100 cursor-pointer'>⊛ Website for Airmadidi-rentalcarmanado</p>
                    </a>
                    <p className='mt-[8px] hover:bg-sky-100 cursor-pointer' onClick={handleClick}>⊛ Back-End for the application of Bapenda Sulawesi Utara (Bapenda Sulut Mobile)</p>
                </div>
            </div>
        </div>
        <div className='flex mt-[50px]'>
            <Title text="03 EDUCATION" />
            <div>
                <h1 className='font-roboto font-semibold text-[17px]'>Klabat University</h1>
                <p className='font-roboto font-normal text-[17px] text-[#000000B2] mt-[5px]'>July 2019 - July 2023</p>
            </div>
        </div>
        <div className='flex mt-[50px]'>
            <Title text="04 SKILLS" />
            <Skill text="Visual Studio Code"/>
            <Skill text="JavaScript"/>
            <Skill text="ReactJS" />
            <Skill text="NodeJS"/>
            <Skill text="ExpressJS" />
            <Skill text="TailwindCSS"/>
        </div>
        <div className='flex mt-[50px]'>
            <Title text="05 LANGUAGES" />
            <h1 className='font-roboto font-normal text-[17px] text-[#000000B2]'>Indonesian  |  English</h1>
        </div>
        <div className='flex mt-[50px]'>
            <Title text="06 LINKS" />
            <div className='flex items-center font-roboto font-normal text-[17px] text-[#000000B2]'>
                <a href="https://www.linkedin.com/in/andrey-desayli-b1672a249/" target="{_blank}">
                    <div className='cursor-pointer underline' >LinkedIn</div>
                </a>
                <div className='h-[12px] w-[2px] bg-[#000000B2] mx-[10px]'></div>
                <a href="https://www.instagram.com/andrey.desayli/" target="{_blank}">
                    <div className='cursor-pointer underline' >Instagram</div>
                </a>
                <div className='h-[12px] w-[2px] bg-[#000000B2] mx-[10px]'></div>
                <a href="https://web.facebook.com/andre.desayli" target="{_blank}">
                    <div className='cursor-pointer underline' >Facebook</div>
                </a>
                <div className='h-[12px] w-[2px] bg-[#000000B2] mx-[10px]'></div>
                <a href="https://github.com/andreydesayli" target="{_blank}">
                    <div className='cursor-pointer underline' >Github</div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Content