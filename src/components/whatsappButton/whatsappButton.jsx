import Link from 'next/link';

export function WhatsAppButton() {
    return (
        <div className="fixed bottom-[30px] right-[40px] w-[60px] sm:w-[75px] z-50">
            <Link target="_blank" href="https://api.whatsapp.com/send?phone=56988113986&text=Hola,%20quiero%20más%20información%20sobre%20sus%20productos."
                className="flex bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all">
                <img src="/logowsp.png" alt="WhatsApp Icon" loading="lazy" className="object-cover w-full h-full p-[12px]" />
            </Link>
        </div>
    );
}
