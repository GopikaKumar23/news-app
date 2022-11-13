const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};
export default documentHeight;
