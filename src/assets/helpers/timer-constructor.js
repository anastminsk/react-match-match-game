export const formatTime = (time) => {
  if (time < 0) return '--:--';
  const h = getHours(time);
  const m = getMinutes(time, h > 0);
  const s = getSeconds(time);
  return (h > 0) ? `${h}:${m}:${s}` : `${m}:${s}`;
};

const getHours = (time) => {
  return Math.floor(time / 3600);
};

const getMinutes = (time, leadingZero) => {
  const m = Math.floor((time % 3600) / 60);
  return (leadingZero && m < 10) ? `0${m}` : m;
};

const getSeconds = (time) => {
  const s = time % 60;
  return (s < 10) ? `0${s}` : s;
};
