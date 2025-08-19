export default function createMessage({ type }) {
  if (type === "success") {
    return "Congratulations!";
  } else if (type === "warning") {
    return "Attention";
  } else if (type === "error") {
    return "There is a problem with your application";
  } else if (type === "neutral") {
    return "Update available";
  } else {
    return "Unknown status";
  }
}
