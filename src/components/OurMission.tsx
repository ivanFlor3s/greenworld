import { PiPottedPlantThin } from 'react-icons/pi';
import { CiHeart } from 'react-icons/ci';
import { TbShovel } from "react-icons/tb";

export const OurMission = () => {
    return (
        <>
            <h1 className="text-teal-800 text-3xl"> Our Mission </h1>
            <div>
                <p className=" text-balance w-[40ch] mx-auto">Our mission is to support and empower local gardening efforts and give the community an opportunity to grow healthy, organic food.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
                <div className="text-center border-2 border-teal-900 bg-background-200 text-text p-3">
                    <CiHeart className="mx-auto text-7xl mb-6 text-teal-800" />
                    <h3 className="text-xl">Donate</h3>
                    <p>Your generous donation helps our nonprofit support the local community gardens and gardeners!</p>
                </div>
                <div className="text-center border-2 border-teal-900 bg-background-200 text-text p-3">
                    <PiPottedPlantThin className="mx-auto text-7xl mb-6 text-teal-800" />
                    <h3 className="text-xl">Donate</h3>
                    <p>Your generous donation helps our nonprofit support the local community gardens and gardeners!</p>
                </div>
                <div className="text-center border-2 border-teal-900 bg-background-200 text-text p-3">
                    <TbShovel className="mx-auto text-7xl mb-6 text-teal-800 stroke-[.8px]" />
                    <h3 className="text-xl">Donate</h3>
                    <p>Your generous donation helps our nonprofit support the local community gardens and gardeners!</p>
                </div>
            </div>
        </>
    );
};
