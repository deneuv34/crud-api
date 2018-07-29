import { BaseRepositoryInterface } from './base.repository.interface'
import { Repository } from 'typeorm'
import { ADP } from '../../helpers/adapters/adapter';

export class BaseRepository<I, E> implements BaseRepositoryInterface<I, E> {
  constructor(
    private readonly repository: Repository<E>,
    private readonly adapter: ADP<E>
  ) {}

  async findOneById(id: number): Promise<E> {
    try {
      return await this.repository.findOne(id)
    } catch (e) {
      throw new Error('Cannot find data: ' + e)
    }
  }

  async update(id: number, option: { [option: string]: any }): Promise<E> {
    throw new Error('Method not implemented.')
  }

  async findAll(data: { [key: string]: any }): Promise<E[]> {
    try {
      return await this.repository.find(data)
    } catch (e) {
      throw new Error('Error find data: ' + e)
    }
  }

  async findOne(data: { [key: string]: any }): Promise<E> {
    try {
      return await this.repository.findOne(data)
    } catch (e) {
      throw new Error('Error find data: ' + e)
    }
  }

  async create(data: I): Promise<E> {
    try {
      const entity: any = this.adapter.ifToEntityCreateCase(data) // change to entity class
      return await this.repository.save(entity)
    } catch (e) {
      throw new Error('failed to create data: ' + e)
    }
  }

  async delete(id: number): Promise<any> {
    try {
      return await this.repository.delete(id)
    } catch (e) {
      throw new Error('failed to create data: ' + e)
    }
  }
}
