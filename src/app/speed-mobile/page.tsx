import { Metadata } from 'next';
import Image from 'next/image';
import SpeedRestaurantImg from '../../../public/speed-restaurant.png';

export const metadata: Metadata = {
    title: 'Speed Restaurante | Portifolio Lucas',
    description: 'Speed Restaurante',
}

export default function SpeedMobile() {
    return (
        <section className="flex h-screen">
            <div className="flex flex-col p-14 gap-3">
                <strong className="text-4xl text-lime-300">
                    Speed Restaurante
                </strong>
                <span className="text-1xl">
                    O aplicativo foi criado com o intuito de agilizar os atendimentos aos clientes. Inicialmente, ele é utilizado diretamente pelos garçons. No entanto, estou desenvolvendo uma funcionalidade para que os próprios clientes possam utilizar. 
                    Futuramente, eles poderão escanear o QR Code disponível na mesa, acessar o cardápio e fazer seus próprios pedidos.
                </span>
                <Image
                    src={SpeedRestaurantImg}
                    alt="Festa"
                    className="w-full h-full rounded-md object-cover"
                />
            </div>
        </section>
    )
}