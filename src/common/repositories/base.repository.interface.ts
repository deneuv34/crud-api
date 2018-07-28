export interface BaseRepositoryInterface<I, E> {
  findAll(data: { [key: string]: any }): Promise<E[]>
  findOne(data: { [key: string]: any }): Promise<E>
  findOneById(id: number): Promise<E>
  create(data: I): Promise<E>
  delete(id: number): Promise<E>
  update(id: number, data: { [key: string]: any }): Promise<E>
}
