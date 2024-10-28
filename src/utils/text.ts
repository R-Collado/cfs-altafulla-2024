export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
};

export const truncateBlogEntry = (text: string, type: string) => {
  if (type === "firstPost") {
    return truncateText(text, 250);
  } else {
    return truncateText(text, 50);
  }
};
