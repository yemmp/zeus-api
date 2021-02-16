/**
 * Converte o objeto passado como parâmentro para um formato PlainObject
 * Para ser utilizado na clausula WHERE do sequelize 
 * @param templateObject 
 */
export function createQueryObject(templateObject: any) {
  if(!templateObject) return {}
  let query = {};
  for (const [key, value] of Object.entries(templateObject)) {
    if (value) {
      query[key] = value;
    }
  }
  delete query['projecao']
  return query
}