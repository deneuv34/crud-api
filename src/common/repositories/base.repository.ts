import { BaseRepositoryInterface } from './base.repository.interface';
import { Repository } from 'typeorm';

export class BaseRepository<I, E> implements BaseRepositoryInterface<I, E> {
    constructor(
        private readonly repository: Repository<E>,
    ) {}

    async findOneById(id: number): Promise<E> {
        try {
            return await this.repository.findOne(id);
        } catch (e) {
            throw new Error('Cannot find data: ' + e);
        }
    }

    async update(id: number, option: { [option: string]: any; }): Promise<E> {
        throw new Error('Method not implemented.');
    }

    async findAll(option: { [option: string]: any; }): Promise<E[]> {
        try {
            return await this.repository.find(option);
        } catch (e) {
            throw new Error('Error find data: ' + e);
        }
    }

    async findOne(option: { [option: string]: any; }): Promise<E> {
        try {
            return await this.repository.findOne(option);
        } catch (e) {
            throw new Error('Error find data: ' + e);
        }
    }

    async create(option: I): Promise<E> {
        try {
            return await this.repository.create(option);
        } catch (e) {
            throw new Error('failed to create data: ' + e);
        }
    }

    async delete(id: number): Promise<any> {
        try {
            return await this.repository.delete(id);
        } catch (e) {
            throw new Error('failed to create data: ' + e);
        }
    }
}