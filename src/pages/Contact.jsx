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
import TopScroll from "../components/TopScroll";
import { useState } from "react";
import emailjs from "@emailjs/browser";

// Définition du composant Contact
export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nom.trim()) {
      newErrors.nom = "Le nom est requis";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Veuillez entrer un email valide";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      // Configuration d'EmailJS
      const templateParams = {
        from_name: formData.nom,
        from_email: formData.email,
        message: formData.message,
      };

      // Remplacez ces valeurs par vos propres identifiants EmailJS
      const response = await emailjs.send(
        "service_0apj81a", // Service ID
        "template_b1xhtcr", // Template ID
        templateParams,
        "O007RFAZKP9Ahs0lW" // Public Key
      );

      if (response.status === 200) {
        setSubmitStatus("success");
        setFormData({ nom: "", email: "", message: "" });
      } else {
        throw new Error("Erreur lors de l'envoi de l'email");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Erreur lors de l'envoi:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="m-5 font-Manrope">
      <Title title="Apprenez à me connaitre" />
      <div className="md:flex md:justify-between md:space-x-60">
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
                href="https://wa.me/2250788953014"
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
          <form className="space-y-4 pt-8" onSubmit={handleSubmit}>
            <div className="md:grid-cols-2 md:space-y-0 space-y-5 md:grid md:gap-5">
              <div>
                <input
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  className={`bg-primary-600 text-primary-500 placeholder:text-primary-400 py-4 px-5 md:w-full w-full rounded-2xl ${
                    errors.nom ? "border-2 border-red-500" : ""
                  }`}
                  type="text"
                  placeholder="Nom"
                />
                {errors.nom && (
                  <p className="text-red-500 text-sm mt-1">{errors.nom}</p>
                )}
              </div>
              <div>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`bg-primary-600 text-primary-500 md:w-full placeholder:text-primary-400 py-4 px-5 w-full rounded-2xl ${
                    errors.email ? "border-2 border-red-500" : ""
                  }`}
                  type="email"
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`bg-primary-600 text-primary-500 placeholder:text-primary-400 py-4 px-5 h-64 w-full rounded-2xl ${
                  errors.message ? "border-2 border-red-500" : ""
                }`}
                placeholder="Message"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            {submitStatus === "success" && (
              <p className="text-green-500 text-center">
                Message envoyé avec succès !
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-500 text-center">
                Une erreur est survenue. Veuillez réessayer.
              </p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary-100 text-primary-200 w-full py-4 px-14 rounded-2xl hover:bg-primary-200 hover:text-primary-100 transition duration-300 disabled:opacity-50"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer Mon Message"}
            </button>
          </form>
        </div>
      </div>
      <div>
        <TopScroll />
      </div>
    </div>
  );
}
