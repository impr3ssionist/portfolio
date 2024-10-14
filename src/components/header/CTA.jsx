import CV from "../../assets/CPFord_ DEV_RESUME_.pdf";

export const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download Resume
      </a>
      <a href="#Contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
