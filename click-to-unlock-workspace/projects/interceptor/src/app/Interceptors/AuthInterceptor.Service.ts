import { HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
    intercept( req:HttpRequest<any>,next:any){
        // const modifiedReq=req.clone({
        //     headers:req.headers.append('Auth','xyz')
        // })
        console.warn(req)
        console.log('request is on the way')
        return next.handle(req)
    }

}