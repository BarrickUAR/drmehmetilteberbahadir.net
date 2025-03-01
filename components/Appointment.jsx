import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaHandPointRight } from "react-icons/fa";

const Appointment = () => {
  return (
    <div className="appointmentContainer flex justify-center gap-7 bg-primary p-3 text-red-600 text-l  ">
      <div className="animate-pulse transition-all delay-5 ">
        <h3 className="flex items-center gap-2">
          Randevu (Appointments) <FaHandPointRight />
        </h3>
      </div>

      <div>
        <a
          className="flex items-center gap-2 text-white hover: transition-all hover:underline hover:text-hvr text-l "
          href="tel:+902126772424"
        >
          <BsTelephone /> +90 212 677 24 24
        </a>
      </div>

      <div>
        <a
          className="flex items-center gap-2 text-white  transition-all hover:underline hover:text-hvr  text-l   "
          href="mailto:info@drmehmetilteberbahadir.net"
        >
          <CiMail /> info@drmehmetilteberbahadir.net
        </a>
      </div>
    </div>
  );
};

export default Appointment;
