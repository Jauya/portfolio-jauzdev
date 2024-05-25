interface IProyecto {
  title: string;
  tools: string[];
  body: string;
  srcImg: string;
  hrefCode: string;
  hrefView: string;
}

export const sobreMi = {
  imgUrl: "https://uc66a2f71b4f310c3475914efb88.dl.dropboxusercontent.com/cd/0/inline/CTjh1vQn0h3dz77W3RiyKr-YbHNzKr6wlqvVE6k1Lzio52oSTPmgoqMHdyHlB8fWGTwtYrsvOIAdFWPRX0X82x0IsCb4F_gGNjxr2K_VLAhaSf4Pim-htDs5-ucmX-QnaxVfSNTbs_-Kx8zbh5jFCMhz/file#",
  short: "Apasionado por el diseño web, listo para desafíos y soluciones innovadoras.",
  long: "",
};

export const proyectos: IProyecto[] = [
  {
    title: "Acortador de links",
    tools: ["React", "Redis", "Zustand"],
    body: "Usando la tecnologia redis pude crear un acortador de links rapido y eficiente en el cual se visualizaran directamente los clicks dados en el enlace generado por el usuario",
    srcImg: "/projects/shortenerurl.webp",
    hrefCode: "",
    hrefView: "",
  },
  {
    title: "Ecommerce",
    tools: ["React", "Redis", "Zustand"],
    body: "Usando la tecnologia redis pude crear un acortador de links rapido y eficiente en el cual se visualizaran directamente los clicks dados en el enlace generado por el usuario",
    srcImg: "/projects/ecommerce.webp",
    hrefCode: "",
    hrefView: "",
  },
  {
    title: "Chat",
    tools: ["React", "Redis", "Zustand"],
    body: "Usando la tecnologia redis pude crear un acortador de links rapido y eficiente en el cual se visualizaran directamente los clicks dados en el enlace generado por el usuario",
    srcImg: "/projects/chat.webp",
    hrefCode: "",
    hrefView: "",
  },
];
