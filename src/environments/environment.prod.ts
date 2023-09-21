import { HttpHeaders} from '@angular/common/http';

const headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Authorization', 'Bearer tu_token')
  .set('Accept', 'application/json');

export const environment = {
  production: true,
  apiUrl: '/back/public/api/',
  headers: headers
};
