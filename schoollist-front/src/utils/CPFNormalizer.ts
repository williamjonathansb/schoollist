export const normalizeCPFInput = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  const { value } = event.target;
  const cpfNormalized = value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
  event.target.value = cpfNormalized;
  return cpfNormalized;
};
