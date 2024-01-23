const generateUniqueRandomString = () => {
  let uniqueStrings = {};

  const generate = () => {
    const firstLetter = "GEPC"[Math.floor(Math.random() * 4)];
    const digits = Array.from({ length: 6 })
      .map(() => Math.floor(Math.random() * 10))
      .join("");
    const string = `${firstLetter}-${digits}`;

    if (!uniqueStrings[string]) {
      uniqueStrings[string] = true;
      return string;
    } else {
      return generate();
    }
  };

  return generate();
};

export default generateUniqueRandomString;
