import Image from 'next/image';

import { OurMission } from '../components/OurMission';

export default function Home() {
    return (
        <div className="">
            <div className="relative">
                <Image className="w-full h-auto" src="/images/green-world-home.jpeg" sizes="100vw" width={0} height={900} alt="Green World" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60%   to-background-500 to-95% " />
                <div className="text-white py-4 px-10 text-center bg-primary-500  absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <h1 className=' text-2xl font-bold mb-2'>Bienvenido</h1>
                  <p className='mx-auto w-[40ch] text-balance'>
                    Transforma tu hogar con nuestras plantas y servicios de jardinería. Encuentra la belleza natural que tu espacio merece.
                  </p>
                  <button className='bg-yellow-400 p-4 text-text mt-8 hover:bg-yellow-500 active:translate-y-1  transition duration-75 ease-in '>
                    Ver más
                  </button>

                </div>
            </div>
            <section id="mission" className="text-center space-y-3 my-5">
                <OurMission></OurMission>
            </section>
        </div>
    );
}
