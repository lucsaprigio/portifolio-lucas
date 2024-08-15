import { Metadata } from 'next';
import Image from 'next/image';

import Rest1 from '../../../public/images-mobile/rest-1.jpeg';
import Rest2 from '../../../public/images-mobile/rest-2.jpeg';
import Rest3 from '../../../public/images-mobile/rest-3.jpeg';
import Rest4 from '../../../public/images-mobile/rest-4.jpeg';
import Rest5 from '../../../public/images-mobile/rest-5.jpeg';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Speed Restaurante | LATech',
    description: 'Speed Restaurante',
}

export default function SpeedMobile() {
    return (
        <section className="flex">
            <div className="flex flex-col p-14 gap-3">
                <strong className="text-4xl text-lime-300">
                    Speed Restaurante
                </strong>
                <span className="text-1xl">
                    O aplicativo foi criado com o intuito de agilizar os atendimentos aos clientes. Inicialmente, ele é utilizado diretamente pelos garçons. No entanto, estou desenvolvendo uma funcionalidade para que os próprios clientes possam utilizar.
                    Futuramente, eles poderão escanear o QR Code disponível na mesa, acessar o cardápio e fazer seus próprios pedidos.
                </span>
                <div className="flex gap-8 max-w-56 mt-16">
                    <Image
                        src={Rest1}
                        alt="Imagem Mobile"
                        className="w-56 rounded-md object-cover"
                    />
                    <Image
                        src={Rest2}
                        alt="Imagem Mobile"
                        className="w-full h-full rounded-md object-cover"
                    />
                    <Image
                        src={Rest3}
                        alt="Imagem Mobile"
                        className="w-full h-full rounded-md object-cover"
                    />
                    <Image
                        src={Rest4}
                        alt="Imagem Mobile"
                        className="w-full h-full rounded-md object-cover"
                    />
                    <Image
                        src={Rest5}
                        alt="Imagem Mobile"
                        className="w-full h-full rounded-md object-cover"
                    />
                </div>
            </div>
        </section>
    )
}