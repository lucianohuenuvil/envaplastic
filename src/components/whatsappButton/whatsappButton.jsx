import Link from 'next/link';

export function WhatsAppButton() {
    return (
        <div className="fixed bottom-[30px] right-[40px] w-[60px] sm:w-[75px] z-50">
            <Link target="_blank" href="https://api.whatsapp.com/send?phone=56964212569"
                className="flex bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all">
                <img src="/logowsp.png" alt="WhatsApp Icon" loading="lazy" className="object-cover w-full h-full p-[12px]" />
            </Link>
        </div>
    );
}
