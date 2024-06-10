export const findMoviesByName = async (name: string) => {
  const url = process.env.OMBD_URL;
  const request = await fetch(`${url}${process.env.OMBD_API_KEY}&s=${name}`);
  const response = await request.json();
  return response;
};
