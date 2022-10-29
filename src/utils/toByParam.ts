export const toByParam = (path: string, pathParams?: Record<string, any>) => {
  let pathToGo = path;

  if (pathParams) {
    Object.keys(pathParams).forEach((param) => {
      pathToGo = pathToGo.replace(`:${param}`, pathParams[param]);
    });
  }

  return pathToGo;
};
