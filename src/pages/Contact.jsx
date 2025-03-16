import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Title from "../components/Title";
import SouTitle from "../components/SouTitle";
import {
  Envelope,
  Phone,
  FacebookLogo,
  WhatsappLogo,
  TiktokLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

// Définition du composant Contact
export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // Paramètres pour EmailJS
    const templateParams = {
      from_name: data.nom,
      from_email: data.email,
      message: data.message,
      to_email: "kouacouemmanuel1234@gmail.com",
    };

    // Envoi de l'email
    emailjs
      .send(
        "YOUR_SERVICE_ID", // Remplacez par votre Service ID
        "YOUR_TEMPLATE_ID", // Remplacez par votre Template ID
        templateParams,
        "YOUR_PUBLIC_KEY" // Remplacez par votre Public Key
      )
      .then((response) => {
        console.log(
          "Email envoyé avec succès!",
          response.status,
          response.text
        );
        alert("Votre message a été envoyé avec succès!");
        reset(); // Réinitialise le formulaire après l'envoi
      })
      .catch((err) => {
        console.error("Erreur lors de lenvoi de lemail:", err);
        alert(
          "Une erreur est survenue lors de lenvoi du message. Veuillez réessayer."
        );
      });
  };

  return (
    <div className="m-5 font-Manrope">
      <Title title="Apprenez à me connaitre" />
      <div className="md:flex md:gap-20">
        <div>
          {/* Section des contacts */}
          <div className="mt-10 space-y-5">
            <SouTitle Stitle="Contacts" />
            {/* Email */}
            <div className="flex gap-3 group">
              <Envelope
                size={20}
                weight="fill"
                className="text-primary-500 group-hover:duration-500 group-hover:text-primary-100"
              />
              <a
                className="text-primary-400 group-hover:text-primary-100 group-hover:duration-500"
                href="mailto:kouacouemmanue1234@gmail.com"
              >
                kouacouemmanue1234@gmail.com
              </a>
            </div>
            {/* Téléphone */}
            <div className="flex group gap-3">
              <Phone
                size={20}
                weight="fill"
                className="text-primary-500 group-hover:duration-500 group-hover:text-primary-100 "
              />
              <a
                className="text-primary-400 group-hover:duration-500 group-hover:text-primary-100"
                href="tel:+2250788953014"
              >
                +225 07 88 95 30 14
              </a>
            </div>
          </div>

          {/* Section des réseaux sociaux */}
          <div className="mt-10 space-y-5">
            <SouTitle Stitle="Reseau Sociaux" />
            {/* Facebook */}
            <div className="flex gap-3 group">
              <FacebookLogo
                size={20}
                weight="fill"
                className="text-primary-500 group-hover:duration-500 group-hover:text-primary-100"
              />
              <a
                className="text-primary-400 group-hover:text-primary-100 group-hover:duration-500"
                href="https://www.facebook.com/share/15yR8RdTRc/?mibextid=wwXIfr"
              >
                Facebook
              </a>
            </div>
            {/* WhatsApp */}
            <div className="flex group gap-3">
              <WhatsappLogo
                size={20}
                weight="fill"
                className="text-primary-500 group-hover:duration-500 group-hover:text-primary-100 "
              />
              <a
                className="text-primary-400 group-hover:duration-500 group-hover:text-primary-100"
                href="https://wa.me/0788953014"
              >
                Whatsapp
              </a>
            </div>
            {/* TikTok */}
            <div className="flex gap-3 group">
              <TiktokLogo
                size={20}
                weight="fill"
                className="text-primary-500 group-hover:duration-500 group-hover:text-primary-100"
              />
              <a
                className="text-primary-400 group-hover:text-primary-100 group-hover:duration-500"
                href="http://www.tiktok.com/@kouacouemmanuel"
              >
                Tik Tok
              </a>
            </div>
            {/* LinkedIn */}
            <div className="flex group gap-3">
              <LinkedinLogo
                size={20}
                weight="fill"
                className="text-primary-500 group-hover:duration-500 group-hover:text-primary-100 "
              />
              <a
                className="text-primary-400 group-hover:duration-500 group-hover:text-primary-100"
                href="https://www.linkedin.com/in/emmanuel-kouacou-9550b42a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              >
                Linkdin
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <SouTitle Stitle="Me laisser un message" />
          <form className="space-y-4 pt-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="md:grid-cols-2 md:grid md:gap-5 space-y-4">
              <div>
                <input
                  className="bg-primary-600 placeholder:text-primary-400 py-4 px-5 md:w-auto w-full rounded-2xl"
                  type="text"
                  placeholder="Nom"
                  {...register("nom", { required: "Le nom est requis" })}
                />
                {errors.nom && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.nom.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  className="bg-primary-600 md:w-auto placeholder:text-primary-400 py-4 px-5 w-full rounded-2xl"
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "L'email est requis",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Adresse email invalide",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <textarea
                className="bg-primary-600 placeholder:text-primary-400 py-4 px-5 h-64 w-full rounded-2xl"
                placeholder="Message"
                {...register("message", { required: "Le message est requis" })}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="bg-primary-100 text-primary-200 w-full py-4 px-14 rounded-2xl hover:bg-primary-200 hover:text-primary-100 transition duration-300"
            >
              Envoyer Mon Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
