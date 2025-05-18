import type { NewsArticle } from '@/types';
import callesImg from '@/assets/images/news/calles-cholchol.JPG';
import vacunacionImg from '@/assets/images/news/vacunacion-cholchol.jpg';
import talleresImg from '@/assets/images/news/talleres-cholchol.jpg';
import reciclajeImg from '@/assets/images/news/reciclaje-cholchol.jpeg';

export const mockNewsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "Nuevo Programa de Pavimentación Mejora Calles en Cholchol",
    summary: "La municipalidad ha iniciado un ambicioso programa para mejorar la infraestructura vial de diversas calles, beneficiando a cientos de vecinos.",
    content: `
      <p>La Municipalidad de Cholchol ha dado inicio a un proyecto de mejoramiento vial sin precedentes que transformará significativamente la infraestructura urbana de nuestra comuna.</p>
      
      <p>El programa, que cuenta con una inversión de más de 500 millones de pesos, contempla la pavimentación de 15 calles que hasta ahora permanecían con superficies de tierra o ripio, mejorando sustancialmente la calidad de vida de más de 2.000 habitantes.</p>
      
      <p>Según informó el alcalde durante la ceremonia de inauguración: "Este proyecto no solo representa una mejora en la infraestructura, sino un cambio real en la vida cotidiana de nuestros vecinos, quienes ya no tendrán que lidiar con el polvo en verano o el barro en invierno".</p>
      
      <p>Los trabajos incluyen no solo la pavimentación de las vías, sino también la implementación de señalética, iluminación LED y la construcción de veredas accesibles, cumpliendo con los estándares modernos de movilidad urbana.</p>
      
      <p>Se espera que las obras concluyan en un plazo máximo de 8 meses, generando además empleos temporales para residentes de la comuna durante el período de construcción.</p>
    `,
    imageUrl: callesImg,
    date: "05 de Mayo, 2025",
    category: "Infraestructura",
    link: "/noticias/1",
    author: "Departamento de Comunicaciones",
    readTime: "4 min"
  },
  {
    id: 2,
    title: "Exitosa Jornada de Vacunación Contra la Influenza en el CESFAM",
    summary: "Más de 500 personas acudieron al Centro de Salud Familiar para recibir la vacuna contra la influenza en una jornada especial organizada por el municipio.",
    content: `
      <p>El Centro de Salud Familiar (CESFAM) de Cholchol vivió una concurrida jornada durante el pasado fin de semana, cuando más de 500 vecinos de todas las edades asistieron a la campaña especial de vacunación contra la influenza estacional.</p>
      
      <p>La iniciativa, organizada conjuntamente por la Municipalidad y el Servicio de Salud Araucanía, superó todas las expectativas de asistencia, logrando inmunizar a un significativo número de personas pertenecientes a los grupos de riesgo.</p>
      
      <p>"Estamos muy satisfechos con la respuesta de la comunidad", señaló la directora del CESFAM. "Esto demuestra que existe una conciencia creciente sobre la importancia de la prevención en salud".</p>
      
      <p>El operativo contó con la participación de 15 profesionales de la salud que trabajaron en turnos para atender la alta demanda. Además de la vacunación, se realizaron controles preventivos y se entregó material educativo sobre medidas de higiene y prevención de enfermedades respiratorias.</p>
      
      <p>Ante el éxito obtenido, las autoridades sanitarias anunciaron que se programarán nuevas jornadas similares para asegurar una cobertura aún mayor, especialmente enfocadas en sectores rurales de la comuna.</p>
    `,
    imageUrl: vacunacionImg,
    date: "02 de Mayo, 2025",
    category: "Salud",
    link: "/noticias/2",
    author: "Equipo de Comunicaciones CESFAM",
    readTime: "3 min"
  },
  {
    id: 3,
    title: "Abiertas las Inscripciones para Talleres Culturales Gratuitos",
    summary: "La Casa de la Cultura invita a niños, jóvenes y adultos a inscribirse en los nuevos talleres de música, danza y artes plásticas para este semestre.",
    content: `
      <p>La Municipalidad de Cholchol, a través de su Departamento de Cultura, ha abierto el período de inscripciones para una amplia gama de talleres artísticos gratuitos que se desarrollarán durante el segundo semestre del año en curso.</p>
      
      <p>Entre las disciplinas disponibles se encuentran: guitarra, violín, piano, danza folclórica, teatro, pintura, cerámica y literatura. Los talleres están dirigidos a personas de todas las edades, desde los 5 años en adelante, y no requieren experiencia previa.</p>
      
      <p>"Queremos democratizar el acceso a la cultura", explicó el encargado del departamento. "Estos talleres representan una oportunidad única para que nuestros vecinos descubran y desarrollen sus talentos artísticos sin que el factor económico sea un impedimento".</p>
      
      <p>Las clases serán impartidas por destacados artistas locales y regionales, algunos de ellos con trayectoria internacional, lo que garantiza una formación de calidad para todos los participantes.</p>
      
      <p>Los interesados pueden inscribirse directamente en la Casa de la Cultura, ubicada en calle Principal 123, de lunes a viernes entre 9:00 y 18:00 horas, o a través del formulario disponible en el sitio web municipal. Las plazas son limitadas y se asignarán por orden de inscripción.</p>
    `,
    imageUrl: talleresImg,
    date: "28 de Abril, 2025",
    category: "Cultura",
    link: "/noticias/3",
    author: "Departamento de Cultura",
    readTime: "3 min"
  },
  {
    id: 4,
    title: "Municipio Lanza Plan de Reciclaje en Barrios Residenciales",
    summary: "Con el objetivo de fomentar la sustentabilidad, se implementará un nuevo sistema de recolección de residuos diferenciados en diversos sectores de la comuna.",
    content: `
      <p>En un importante paso hacia la sustentabilidad ambiental, la Municipalidad de Cholchol ha presentado su nuevo Plan Integral de Reciclaje Comunitario, iniciativa que revolucionará la gestión de residuos en todos los barrios residenciales de la comuna.</p>
      
      <p>El programa contempla la instalación de 50 nuevos puntos limpios distribuidos estratégicamente, la entrega de contenedores diferenciados para cada vivienda y un calendario especial de recolección que permitirá separar eficientemente los materiales reciclables.</p>
      
      <p>"Este es un compromiso con las futuras generaciones", destacó el alcalde durante la presentación del proyecto. "Cholchol está dando un paso decisivo para convertirse en un referente regional en materia de gestión responsable de residuos".</p>
      
      <p>Además de la implementación física, el plan incluye un fuerte componente educativo, con talleres comunitarios, intervenciones en establecimientos educacionales y campañas de comunicación que buscan crear conciencia sobre la importancia del reciclaje.</p>
      
      <p>Se estima que, una vez en pleno funcionamiento, el sistema permitirá reducir en aproximadamente un 40% la cantidad de residuos que actualmente se destinan al vertedero municipal, con los consecuentes beneficios ambientales y económicos para toda la comunidad.</p>
      
      <p>La implementación comenzará el próximo mes en un plan piloto que abarcará cinco barrios, para luego expandirse progresivamente hasta cubrir la totalidad del territorio comunal antes de fin de año.</p>
    `,
    imageUrl: reciclajeImg,
    date: "25 de Abril, 2025",
    category: "Medio Ambiente",
    link: "/noticias/4",
    author: "Oficina de Medio Ambiente",
    readTime: "5 min"
  },
];