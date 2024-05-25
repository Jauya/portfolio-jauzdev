import emailjs from "@emailjs/browser";
import { useRef, useState, type FormEventHandler } from "react";
import { CheckCircle } from "react-feather";

export function FormEmail() {
  const form = useRef(null);
  const [success, setSuccess] = useState(false);
  const sendEmail: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm("service_cyg8aqb", "template_lgmvadk", form.current, {
          publicKey: "EBEjdnI5Mu8FNuWzw",
        })
        .then(
          () => {
            setSuccess(true);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <form
      className="flex md:flex-row flex-col gap-4"
      ref={form}
      onSubmit={sendEmail}
    >
      {!success ? (
        <div className="w-full flex items-center gap-2 bg-[#262727] dark:bg-[#eef0f1] font-normal rounded-2xl px-7 py-6 transition-colors duration-100">
          <CheckCircle /> Gracias por el contacto! Estaras recibiendo un email pronto.
        </div>
      ) : (
        <>
          <input
            type="email"
            name="user_email"
            placeholder="Tu correo electrónico"
            autoComplete="off"
            required
            className="w-full md:w-full bg-transparent border-2 border-[#262727] focus:border-[#676766] dark:border-[#90908f] dark:focus:border-[#3c3e3e] placeholder:text-[#676766] outline-none rounded-2xl px-5 py-4 "
          />
          <input
            type="submit"
            value="Enviar"
            className="w-full md:w-40 bg-[#262727] text-[#bfbebf] text-xl rounded-2xl flex justify-center items-center gap-2 px-5 py-4 hover:bg-[#292a2a] transition-colors duration-100"
          />
        </>
      )}
    </form>
  );
}
