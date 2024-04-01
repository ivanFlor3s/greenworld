import Image from 'next/image';

export default function Home() {
    return (
        <div className="">

            <Image
                src="/images/green-world-home.jpeg"
                alt="Green World"
                width={800}
                height={400}
            />
            <p>
                En Green World  llevamos la naturaleza a tus espacios con jardines verticales para exteriores e interiores.
                <br />
                Estamos comprometidos con el cuidado de la naturaleza y el desarrollo sustentable, eso nos inspira a diseñar jardines verticales naturales, construidos con materiales reciclados y de alta durabilidad, para
                disminuir el impacto ambiental.
                <br />
                Nuestra misión es mejorar la calidad de vida de las personas e integrar la naturaleza a las ciudades con muros verdes, por eso ofrecemos servicios de diseño, construcción y mantenimiento de jardines verticales. 
                <br />
                Te invitamos a conocernos y crear juntos el jardín de tus sueños.
            </p>
        </div>
    );
}
