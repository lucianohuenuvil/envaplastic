export const metadata = {
  title: 'Términos y condiciones - Envaplastic',
  description: 'Infórmate sobre nuestros términos y condiciones de nuestro sitio web Envaplastic',
}

export default function Legal() {
  return (
    <>
      {/* Sección superior */}
      <div className=" mt-16 relative overflow-hidden h-[150px]">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="bg-[#617ca6] h-full relative z-0"></div>
        <div className="container absolute inset-0 mx-auto h-full flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-8 text-center items-center z-20">
          <h1 className="text-4xl font-bold text-white">Términos y condiciones</h1>
          {/* <p className="text-xl text-white mt-4">Lleva tus envases al siguiente nivel</p> */}
        </div>
      </div>

      <div className="sm:m-12 min-h-screen   sm:px-6 lg:px-8">
        <div className="bg-gray-100 max-w-4xl mx-auto p-8 shadow-md rounded-lg">
          {/* <h1 className="text-3xl font-bold mb-6">Términos y Condiciones</h1> */}
          <p className="mb-4">
            Al acceder y utilizar nuestro sitio web, aceptas estar sujeto a los siguientes términos y condiciones. Si no estás de acuerdo con alguno de estos términos, te recomendamos que no utilices este sitio web.
          </p>
          <ul className="list-disc pl-5 mb-6">
            <li>Los contenidos de este sitio web son únicamente para fines informativos y pueden cambiar sin previo aviso.</li>
            <li>No nos hacemos responsables por el uso indebido o la interpretación incorrecta de la información proporcionada.</li>
            <li>Nos reservamos el derecho de modificar o eliminar contenido en cualquier momento.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Política de Privacidad y Tratamiento de Datos</h2>
          <p className="mb-4">
            Nos comprometemos a proteger la privacidad de los usuarios que visitan nuestro sitio web. Esta política de privacidad explica cómo recopilamos, utilizamos y protegemos los datos personales ingresados a través de nuestro formulario de contacto.
          </p>
          <h3 className="text-xl font-semibold mb-2">Recopilación de Datos</h3>
          <p className="mb-4">
            Cuando los usuarios completan el formulario de contacto, recopilamos la siguiente información personal:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Nombre</li>
            <li>Correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Mensaje u otros datos que el usuario decida proporcionar en el formulario</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Uso de los Datos</h3>
          <p className="mb-4">
            La información que recopilamos es utilizada exclusivamente para fines de comunicación con el usuario en respuesta a su solicitud o consulta. No compartimos, vendemos ni cedemos tus datos personales a terceros sin tu consentimiento.
          </p>

          <h3 className="text-xl font-semibold mb-2">Protección de Datos</h3>
          <p className="mb-4">
            Implementamos medidas de seguridad adecuadas para proteger la información personal contra el acceso no autorizado, alteración, divulgación o destrucción.
          </p>

          <h3 className="text-xl font-semibold mb-2">Derechos del Usuario</h3>
          <p className="mb-4">
            Los usuarios tienen el derecho de acceder, corregir o eliminar sus datos personales en cualquier momento. Si deseas ejercer alguno de estos derechos, contáctanos a través de nuestro correo electrónico.
          </p>

          <h3 className="text-xl font-semibold mb-2">Consentimiento</h3>
          <p className="mb-6">
            Al utilizar este sitio web y proporcionar tus datos personales, aceptas esta política de privacidad y el tratamiento de tus datos conforme a los términos aquí establecidos.
          </p>

          <p className="text-sm text-gray-600">
            Última actualización: 22 de Octubre de 2024
          </p>
        </div>
      </div>
    </>

  );
}
