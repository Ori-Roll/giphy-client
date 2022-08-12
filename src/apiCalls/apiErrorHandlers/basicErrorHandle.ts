export const handleError = (err: Error): void => {
  console.error('api returned error: ', err);
  throw err;
};
