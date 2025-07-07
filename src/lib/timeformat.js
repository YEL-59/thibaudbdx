function formatOptionalDateTime({ isoDate = null, timeStr = null }) {
  let formattedDate = null;
  let formattedTime = null;

  // 👉 Format date if provided
  if (isoDate) {
    const date = new Date(isoDate);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" }); // Jan, Feb, etc.
    const year = date.getFullYear();
    formattedDate = `${day} ${month} ${year}`;
  }

  // 👉 Format time if provided
  if (timeStr) {
    const [hours, minutes] = timeStr.split(":").map(Number);
    let period = "AM";
    let hour12 = hours;

    if (hours === 0) {
      hour12 = 12;
    } else if (hours >= 12) {
      period = "PM";
      if (hours > 12) hour12 = hours - 12;
    }

    formattedTime = `${hour12.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")} ${period}`;
  }

  return { date: formattedDate, time: formattedTime };
}

export default formatOptionalDateTime;
