
export const localStorageUser = JSON.parse(localStorage.getItem('user'));
export const localStorageToken = localStorage.getItem('token');
export const clientCompanyId = localStorageUser?.active_entreprise?.id;

