export const formatTime = (minutes: number): string => {
  if (minutes < 60) return `${minutes} mins`;
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hrs}h ${mins ? `${mins}m` : ''}`;
};
