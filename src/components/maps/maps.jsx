export default function Maps() {
    return (
      <div className="flex flex-col h-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-xl font-bold text-black mb-4">¿Dónde estámos ubicados?</h2>
        <div className="w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.5072498827585!2d-70.63897807118741!3d-33.61295741901143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d9cc5fce1857%3A0xc2c47e725f62506b!2sLos%20Duraznos%20129%2C%208840058%20La%20Pintana%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1727733082268!5m2!1ses!2scl"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    );
  }
  