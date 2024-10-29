import './style.css'


export function ImageSlider() {


    const images = [
        { url:'/images/colegios/Colegio_las_condes.webp', colegio:'Colegio Las Condes'},
        { url:'/images/colegios/Coyancura.webp', colegio:'Colegio Coyancura'},
        { url:'/images/colegios/Leonardo_da_vinci.webp', colegio:'Colegio Leonardo Da Vinci'},
        { url:'/images/colegios/Liceo-simonbolivar.webp', colegio:'Liceo Simón Bolivar'},
        { url:'/images/colegios/Nuestra_senora_del-rosario.webp', colegio:'Colegio Nuestra Señora del Rosario'},
        { url:'/images/colegios/San_francisco_del_alba.webp', colegio:'San Francisco del alba'},
        { url:'/images/colegios/San_franciso_profesional.webp', colegio:'San Francisco Técnico Profesional'},

    ];


    return (

<section className="bg-white relative ">
  <div className="p-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">

    <div className="flex w-full h-[250px] overflow-x-auto p-4 custom-scrollbar">

        {images.map((src, index) => (
          <div key={index} className="h-full flex flex-col items-center">
            <div className="ml-2 mr-2 w-[180px] h-full flex flex-col items-center">
              <p className="text-center h-[46px] text-slate-400"> {src.colegio}</p>
              <div className="w-full h-[70%] flex items-center justify-center">
                <img
                  src={src.url}
                  alt={`Image ${index + 1}`}
                  loading="lazy"
                  className="w-full h-[80%] object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}

    </div>

  </div>
</section>




    )
}