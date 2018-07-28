export interface BaseRepositoryInterface<I, E> {
    findAll(option: {[option: string]: any}): Promise<E[]>;
    findOne(option: {[option: string]: any}): Promise<E>;
    findOneById(id: number): Promise<E>;
    create(option: I): Promise<E>;
    delete(id: number): Promise<E>;
    update(id: number, option: {[option: string]: any}): Promise<E>;
}