import { BaseServiceInterface } from './base.service.interface'
import { BaseRepository } from '../repositories/base.repository'

export class BaseService<D, E> implements BaseServiceInterface<D, E> {
  constructor(private readonly baseRepository: BaseRepository<D, E>) {}

  findAll(option: { [index: string]: any }): Promise<E[]> {
    return this.baseRepository.findAll(option)
  }

  findById(id: number): Promise<E> {
    return this.baseRepository.findOneById(id)
  }

  async create(data: D): Promise<E> {
    return await this.baseRepository.create(data)
  }

  delete(id: number): Promise<E> {
    return this.baseRepository.delete(id)
  }

  update(id: number, option: { [index: string]: any }): Promise<E> {
    return this.baseRepository.update(id, option)
  }
}
