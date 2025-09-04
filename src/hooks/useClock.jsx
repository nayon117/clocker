import { addMinutes } from "date-fns";
import { useEffect, useState } from "react";

const init = {
  id: "",
  title: "",
  timezone: {
    type: "",
    offset: "",
  },
  date_utc0: null,
  date: null,
};

const TIMEZONE_OFFSET = {
  PST: 7,
  EST: 4
}

const useClock = (date, timezone, offset) => {
  const [state, setState] = useState({ ...init });

  useEffect(() => {
    let utc = new Date(date);
    if (timezone) {
      // 
    } else {
      const offset = utc.getTimezoneOffset();
      utc = addMinutes(utc, offset);
    }
  }, []);

  return {
    clock: state,
  };
};
export default useClock;
