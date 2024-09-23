import Link from 'next/link';

export function WhatsAppButton() {
    return (
        <div className="fixed bottom-[30px] right-[40px] w-[95px] z-50">
            <Link href="https://api.whatsapp.com/send?phone=56963593710"
                className="flex bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all">
                <img src="/logowsp.png" alt="WhatsApp Icon" className="object-cover w-full h-full p-[15px]" />
            </Link>
        </div>
    );
}
