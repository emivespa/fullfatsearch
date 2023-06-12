export default function prettyTime(t: number) {
  let hh = Math.floor(t / 3600)
    .toString()
    .padStart(2, "0");
  let mm = Math.floor((t % 3600) / 60)
    .toString()
    .padStart(2, "0");
  let ss = Math.floor((t % 3600) % 60)
    .toString()
    .padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}
