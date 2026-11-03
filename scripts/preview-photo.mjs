export function previewPhoto(e, sample, id) {
  const { x, y, width: w, height: h } = e;
  const ry = Math.min(w / 2, h / 2);
  const shape =
    e.photoTreatment === "arch"
      ? `<path d="M${x} ${y + h}V${y + ry}C${x} ${y} ${x + w} ${y} ${x + w} ${y + ry}V${y + h}Z"/>`
      : `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${e.photoTreatment === "soft" ? 30 : 0}"/>`;
  return `<g transform="rotate(${e.rotation} ${x + w / 2} ${y + h / 2})"><defs><clipPath id="${id}-clip">${shape}</clipPath><linearGradient id="${id}-shade" x2="0" y2="1"><stop stop-color="#000" stop-opacity=".12"/><stop offset="1" stop-color="#000" stop-opacity=".55"/></linearGradient></defs><g clip-path="url(#${id}-clip)"><image x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid slice" href="data:image/jpeg;base64,${sample}"/>${e.photoTreatment === "cinema" ? `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#${id}-shade)"/>` : ""}</g></g>`;
}
