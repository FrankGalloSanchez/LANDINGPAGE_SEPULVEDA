$('#boton').click(function()
{
    Swal.fire({
        title: 'PALABRA DEL DIRECTOR',
        text: 'Damos la bienvenida en este nuevo año escolar a toda la COMUNIDAD EDUCATIVA en su conjunto y al mismo tiempo, les damos acogida, a las familias que se incorporan este año 2023;Creemos que el educador debe actuar con fuerza y con bondad, con rigor y convicción, pero también con amor y cuidado. De este modo, procurar que todo contribuya a moldear el carácter de nuestros alumnos, cultivar su inteligencia, ensanchar los horizontes humanos y científicos y enriquecer su alma con los mejores ejemplos, las más altas lecciones.Queremos formar un hombre culto, movido más por el ser que por el tener y formar al mismo tiempo, personas que trabajen para instaurar todas las cosas en Cristo. Con este propósito, hemos desarrollado planes y programas de estudio con contenidos, métodos y textos propios, que aseguran una formación profunda y de excelencia.',
        imageUrl: '/Sepulveda/img/FOTO9.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        background: '#000',
        width: '55%',
        allowOutsideClick: false,
        confirmButtonColor:'#526faadc'

    })
})

$('#botonmesaje').click(function()
{
    Swal.fire({
        title: 'RESEÑA HISTORICA',
        text: 'Dr. Francisco Javier Hurtado Laos , el reverendo Padre Don Pedro Hurtado Mora, párroco de San Vicente (su tío) y los hermanos Rómulo Hurtado Laos y el Párroco del distrito e San Luis, reverendo José Hurtado Laos; se inicia la elaboración de un expediente y la gestión del mismo ante la Dirección General de Enseñanza del MED, para la creación de nuestra institución. Sin duda, el 1º de abril de 1937, empieza a funcionar el colegio particular mixto Teniente Coronel “José Buenaventura Sepúlveda Fernández” nombre que escogiera el fundador como justo homenaje al cañetano que se inmortalizó en la batalla de Germania durante la Guerra con Chile (05-11-1880).',
        //imageUrl: 'https://unsplash.it/400/200',
        imageUrl: '/Sepulveda/img/IMG_9851.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        width: '55%',
        allowOutsideClick: false,
        confirmButtonColor:'#526faadc'
    })
})

$('#btnCrear').click(function(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Enviado con exito',
        showConfirmButton: false,
        timer: 5000
      })
})

