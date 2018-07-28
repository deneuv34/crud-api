export interface BaseServiceInterface<D, E> {
  findAll(option: { [index: string]: any }): Promise<E[]>
  findById(id: number): Promise<E>
  create(data: D): Promise<E>
  delete(id: number): Promise<E>
  update(id: number, option: { [index: string]: any }): Promise<E>
}
