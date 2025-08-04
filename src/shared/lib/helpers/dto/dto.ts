export const dto = <T extends object, U extends object>(
  type: 'toServer' | 'toClient',
  data: T,
): U => {
  const dataEntries = Object.entries(data);

  if (type === 'toServer') {
    const dataToServer = dataEntries.map((item) => {
      const [key, value] = item;
      const keyToServer = key
        .split(/(?<=[a-z])(?=[A-Z])/)
        .join('_')
        .toLowerCase();

      return [keyToServer, value];
    });
    return Object.fromEntries(dataToServer) as U;
  }

  const dataToClient = dataEntries.map((item) => {
    const [key, value] = item;
    const keyToClient = key
      .split('_')
      .map((item, index) => {
        if (index !== 0) {
          return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
        }
        return item;
      })
      .join('');
    return [keyToClient, value];
  });
  return Object.fromEntries(dataToClient) as U;
};
