import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";


export function apiUrlInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const baseUrl = `http://localhost:3000`;

  return next(req.clone({
    url: `${baseUrl}${req.url}`,
  }));
}