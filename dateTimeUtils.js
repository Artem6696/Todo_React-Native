export const formatTime = (time) => {
    let hours = time.getHours().toString().padStart(2, "0");
    let minutes = time.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  export const formatDate = (date) => {
    let month = (date.getMonth() + 1).toString().padStart(2, "0"); // Format month with leading zero
    let day = date.getDate().toString().padStart(2, "0");
    return `${month}:${day}`
  };
  