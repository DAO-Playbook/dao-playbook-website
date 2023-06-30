export const truncate = (text = '', length: number) =>
  text ? (text.length <= length ? text : `${text.substr(0, length)}...`) : '';
