export const removeFalseValues = <M>(filterModel: M) => {
  let model = filterModel;
  let key: keyof M;
  for (key in model) {
    if (model[key] === undefined || model[key] === null || model[key] === '')
      delete model[key];
  }
  return model;
};
