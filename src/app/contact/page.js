import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import styles from "./contact.module.css"
const Contact =() =>{
  return (
    <>
      <div className={styles.container}>
        <h1>CONTACT US</h1>
        <ContactCard />

        <section className={styles.contact_section}>
          <h2>we'd love to hear <span>from you</span></h2>
          <ContactForm />
        </section>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14712.550523173055!2d86.18096810147517!3d22.79736356931302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e362cb840e25%3A0xb9646953d0fada5!2sTata%20Consultancy%20Services%20Ltd.%20%2CSakchi%2C%20Jamshedpur!5e0!3m2!1sen!2sin!4v1685253059908!5m2!1sen!2sin" 
      width={100} height={450} style={{border: 0}} allowFullScreen="" loading="lazy" className={styles.mapping} 
      referrerPolicy="no-referrer-when-downgrade"></iframe>

    </>
  );
};

export default Contact;