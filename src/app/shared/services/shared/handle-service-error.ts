import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export class HandleServiceError {
    constructor() { }

    static handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.log(`A ocurrido un error: ${error.error.message}`)
        }
        else {
            console.error(`Código de estado: ${error.status} cuerpo: ${error.error}`)
        }
        return throwError('Ocurrio un error inesperado. Por favor intente mas tarde')
    }
}