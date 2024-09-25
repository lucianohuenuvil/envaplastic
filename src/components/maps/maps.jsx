export default function Maps() {
    return (
      <div className="flex flex-col h-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-xl font-bold text-black mb-4">¿Dónde estámos ubicados?</h2>
        <div className="w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.5668970826378!2d-70.56677258424588!3d-33.40846180274575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cedd0fa0de87%3A0x8fddeef43d721a48!2sAv.%20Apoquindo%206415%2C%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1655149171940!5m2!1ses!2scl"
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
  