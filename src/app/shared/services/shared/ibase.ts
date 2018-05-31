import { Observable } from "rxjs";

export interface IBase<T> {
    /**
     * 
     * @param endPoint Punto final del recurso a consultar
     */
    getAll(endPoint:string):Observable<T[]>;

    /**
     * 
     * @param endPoint Punto final del recurso a consultar
     * @param id Identificador del recurso a consultar
     */
    getById(endPoint:string, id:number | string):Observable<T>;

    /**
     * 
     * @param endPoint Punto final del recurso a consultar
     * @param object Recurso a enviar
     */
    save(endPoint:string, object:T):Observable<T>;

    /**
     * 
     * @param endPoint Punto final del recurso a consultar
     * @param object Recurso a enviar
     */
    saveAll(endPoint:string, object:T[]):Observable<T[]>;

    /**
     * 
     * @param endPoint Punto final del recurso a consultar
     * @param id Identificador del recurso
     */
    delete(endPoint:string, id:number | string):Observable<T>;
}
