export const getImageURL = async (file: File) => {
  const imgbbKey = "26ead0f37669037cfebbd61a7613b4ce";
  const url = `https://api.imgbb.com/1/upload&key=${imgbbKey}`;

  return fetch(url, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    method: "POST",
  })
    .then(
      (res) => res.json(),
      (error) => console.log(error)
    )
    .then((json) => console.log(json));
};
