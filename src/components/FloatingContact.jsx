import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, MessageSquare, X } from "lucide-react";
import "./FloatingContact.css";
import {
  ENQUIRY_MODAL_SOURCE,
  ENQUIRY_PROGRAMMES,
  ENQUIRY_PURPOSES,
  PHONE_COUNTRY_CODES,
  WHATSAPP_NUMBER
} from "../data/contactOptions.js";

const initialDetails = { name: "", email: "", phoneCountry: "+44", phone: "", course: "", purpose: "", consent: false };
const whatsappMessage = "Hi LearnifyOps! I'd like to know more about your programmes and admissions guidance.";

export default function FloatingContact({ hidden = false, cookieNoticeVisible = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [details, setDetails] = useState(initialDetails);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [noticeClearance, setNoticeClearance] = useState(0);
  const dialogRef = useRef(null);
  const submitting = useRef(false);

  useEffect(() => {
    if (!cookieNoticeVisible) {
      setNoticeClearance(0);
      return;
    }
    const notice = document.querySelector(".cookie-note");
    if (!notice) return;
    const updateClearance = () => {
      const bounds = notice.getBoundingClientRect();
      // Only lift the buttons when the notice extends into their right-hand column.
      setNoticeClearance(bounds.right > window.innerWidth - 110 ? window.innerHeight - bounds.top + 16 : 0);
    };
    const observer = new ResizeObserver(updateClearance);
    observer.observe(notice);
    window.addEventListener("resize", updateClearance);
    updateClearance();
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateClearance);
    };
  }, [cookieNoticeVisible]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || hidden) {
      if (dialog.open) dialog.close();
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, [isOpen, hidden]);

  const updateDetails = (event) => {
    const { name, value, type, checked } = event.target;
    setDetails((previous) => ({ ...previous, [name]: type === "checkbox" ? checked : value }));
  };

  const readyToSubmit = details.name.trim() && details.email.trim() && details.phone.replace(/\D/g, "").length >= 6 && details.course && details.purpose && details.consent;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!readyToSubmit || submitting.current) return;
    submitting.current = true;
    setStatus("saving");
    setMessage("");
    const programme = ENQUIRY_PROGRAMMES.find((item) => item.value === details.course);
    const purpose = ENQUIRY_PURPOSES.find(([value]) => value === details.purpose)?.[1];

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: details.name.trim(),
          email: details.email.trim(),
          phone: `${details.phoneCountry} ${details.phone.trim().replace(/^0+/, "")}`,
          course: details.course,
          purpose: details.purpose,
          interest: programme.interest,
          message: `Programme: ${details.course}. Purpose: ${purpose}.`,
          consent: details.consent,
          source: ENQUIRY_MODAL_SOURCE
        })
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.enquiryId) throw new Error("Your request could not be saved. Please try again or contact us on WhatsApp.");
      setStatus("success");
      setMessage("Your request has been received. Our team will contact you soon.");
      setDetails(initialDetails);
    } catch (error) {
      setStatus("error");
      setMessage(error.message === "Failed to fetch" ? "Unable to connect. Please try again or contact us on WhatsApp." : error.message);
    } finally {
      submitting.current = false;
    }
  };

  const openForm = () => {
    if (!submitting.current) {
      setStatus("idle");
      setMessage("");
    }
    setIsOpen(true);
  };

  return (
    <>
      {!hidden && (
        <div className="floating-contact" style={{ "--contact-clearance": `${noticeClearance}px` }}>
          <button className="floating-contact-button floating-contact-enquiry" type="button" onClick={openForm} aria-label="Open enquiry form" aria-haspopup="dialog" aria-controls="learnifyops-enquiry-dialog" title="Book a free consultation">
            <MessageSquare size={28} aria-hidden="true" />
          </button>
          <a className="floating-contact-button floating-contact-whatsapp" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" aria-label="Chat with LearnifyOps on WhatsApp" title="Chat with us on WhatsApp">
            <svg width="38" height="38" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
          </a>
        </div>
      )}

      <dialog ref={dialogRef} id="learnifyops-enquiry-dialog" className="enquiry-dialog" aria-labelledby="enquiry-title" aria-describedby="enquiry-description" onClose={() => setIsOpen(false)} onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current.close(); }}>
        <div className="enquiry-dialog-content">
          <button className="enquiry-close" type="button" onClick={() => dialogRef.current.close()} aria-label="Close enquiry form"><X size={22} aria-hidden="true" /></button>
          <div className="enquiry-heading">
            <h2 id="enquiry-title">Book a Free Consultation</h2>
            <p id="enquiry-description">Explore your next step with LearnifyOps.</p>
          </div>
          {status === "success" ? (
            <div className="enquiry-success" role="status">
              <CheckCircle2 size={48} aria-hidden="true" />
              <h3>Thank you!</h3>
              <p>{message}</p>
              <button className="enquiry-submit" type="button" onClick={() => dialogRef.current.close()}>Done</button>
            </div>
          ) : (
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <label htmlFor="enquiry-name">Full Name*<input id="enquiry-name" name="name" type="text" autoComplete="name" placeholder="Your full name" required maxLength={120} value={details.name} onChange={updateDetails} /></label>
              <label htmlFor="enquiry-email">Email Id*<input id="enquiry-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={180} value={details.email} onChange={updateDetails} /></label>
              <div className="enquiry-phone-row">
                <label htmlFor="enquiry-country">Country Code*<select id="enquiry-country" name="phoneCountry" autoComplete="tel-country-code" value={details.phoneCountry} onChange={updateDetails}>{PHONE_COUNTRY_CODES.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>
                <label htmlFor="enquiry-phone">Phone*<input id="enquiry-phone" name="phone" type="tel" autoComplete="tel-national" inputMode="tel" placeholder="Phone number" required pattern={"[0-9\\s\\(\\)\\-]{6,20}"} title="Enter 6–20 digits, spaces, brackets or hyphens, without the country code." maxLength={20} value={details.phone} onChange={updateDetails} /></label>
              </div>
              <label htmlFor="enquiry-course">Select Programme*<select id="enquiry-course" name="course" required value={details.course} onChange={updateDetails}><option value="" disabled>Select an option</option>{ENQUIRY_PROGRAMMES.map(({ value }) => <option key={value} value={value}>{value}</option>)}</select></label>
              <label htmlFor="enquiry-purpose">Purpose*<select id="enquiry-purpose" name="purpose" required value={details.purpose} onChange={updateDetails}><option value="" disabled>Select an option</option>{ENQUIRY_PURPOSES.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>
              <label className="enquiry-consent" htmlFor="enquiry-consent"><input id="enquiry-consent" name="consent" type="checkbox" required checked={details.consent} onChange={updateDetails} /><span>I consent to LearnifyOps storing my enquiry details and contacting me about my selected programme or service.</span></label>
              {message && <p className="enquiry-error" role="alert">{message}</p>}
              <button className="enquiry-submit" type="submit" disabled={!readyToSubmit || status === "saving"}>{status === "saving" ? "Submitting..." : "Submit request"}{status !== "saving" && <ArrowRight size={19} aria-hidden="true" />}</button>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
