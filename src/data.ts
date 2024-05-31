interface IProyecto {
  title: string;
  tools: string[];
  body: string;
  srcMockup?:string;
  srcImg: string;
  hrefCode: string;
  hrefView: string;
}

export const sobreMi = {
  pageUrl: "https://jauzdev.space/",
  srcPageImg: "/img-portfolio.webp",
  srcFaceImg: "/img-face.webp",
  metaDescription: "Desarrollador web especializado en React-Laravel Apps. Descubre mis proyectos destacados, y cómo puedo llevar tu visión digital a la realidad.",
  shortDescription: "Apasionado por el diseño web, listo para desafíos y soluciones innovadoras.",
  longDescription: "Nací y crecí en Ica, Perú. Desde que era niño, he sentido una pasión por el arte y el diseño. Me fascinan los colores vibrantes y los detalles intrincados de todo lo que me rodeaba, lo que me inspiró a aprender diseño web y adentrarme en el mundo de la experiencia de usuario (UX)",
  skillfulList:[
    {
      title: "Responsive Design",
      description: "Diseño de sitios web que se adaptan a diferentes dispositivos y tamaños de pantalla."
    },
    {
      title: "SEO",
      description: "Optimización de sitios web para mejorar su visibilidad en los motores de búsqueda."
    },
    {
      title: "UX/UI Design",
      description: "Creación de interfaces intuitivas y experiencias de usuario agradables y eficientes."
    },
    {
      title: "Backend Development",
      description: "Manejo de servidores, bases de datos y lógica del lado del servidor."
    },
    {
      title: "Content Management Systems (CMS)",
      description: "Uso de plataformas como WordPress para la creación y gestión de contenidos web."
    },
    {
      title: "Version Control (Git)",
      description: "Gestión de cambios en el código de forma colaborativa y segura."
    },
    {
      title: "Database Management",
      description: "Diseño y mantenimiento de bases de datos para asegurar un acceso rápido y seguro a la información."
    },
    {
      title: "Web Performance Optimization",
      description: "Mejora de la velocidad y eficiencia de los sitios web."
    },
    {
      title: "API Integration",
      description: "Conexión de aplicaciones web con servicios externos mediante APIs."
    },
  ],
  interestsList:[
    "/photos/planta1.webp",
    "/photos/planta2.webp",
    "/photos/planta3.webp",
    "/photos/planta4.webp",
    "/photos/planta5.webp"
  ]
};

export const proyectos: IProyecto[] = [
  {
    title: "LinkShorty - Acortador de links",
    tools: ["React", "Redis", "Zustand"],
    body: "Usando la tecnologia redis pude crear un acortador de links rapido y eficiente en el cual se visualizaran directamente los clicks dados en el enlace generado por el usuario",
    srcImg: "/projects/shortenerurl.webp",
    srcMockup: "/projects/shortenerurl.webp",
    hrefCode: "#",
    hrefView: "#",
  },
  {
    title: "Ecommerce",
    tools: ["React", "Redis", "Zustand"],
    body: "Usando la tecnologia redis pude crear un acortador de links rapido y eficiente en el cual se visualizaran directamente los clicks dados en el enlace generado por el usuario",
    srcImg: "/projects/ecommerce.webp",
    srcMockup: "/projects/ecommerce.webp",
    hrefCode: "#",
    hrefView: "#",
  },
  {
    title: "Chat",
    tools: ["React", "Redis", "Zustand"],
    body: "Usando la tecnologia redis pude crear un acortador de links rapido y eficiente en el cual se visualizaran directamente los clicks dados en el enlace generado por el usuario",
    srcImg: "/projects/chat.webp",
    srcMockup: "/projects/chat.webp",
    hrefCode: "#",
    hrefView: "#",
  },
];
