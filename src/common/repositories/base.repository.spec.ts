import { BaseRepository } from './base.repository'
import { Test } from '@nestjs/testing'
import { Users } from '../../user/user.entity'
import { Repository } from 'typeorm';
import { BaseRepositoryInterface } from './base.repository.interface';
import { ADP } from '../../helpers/adapters/adapter';
import { IUser } from '../../user/interfaces';

describe('BaseRepository Test', () => {
    let baseRepository: BaseRepository<IUser, Users>

    const repository = jest.fn<Repository<Users>>(() => ({
        save: jest.fn(),
        find: jest.fn(),
        delete: jest.fn(),
        findOne: jest.fn()
    }))

    const Adp = jest.fn<ADP<Users>>(() => ({
        ifToEntity: jest.fn(),
        ifToEntityCreateCase: jest.fn()
    }))

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            imports: [],
	        providers: [
                BaseRepository,
                ADP,
                {
                    provide: 'BaseRepository',
                    useClass: Repository
                },
            ],
            controllers: []
        }).compile()

        baseRepository = module.get<BaseRepository<IUser, Users>>(BaseRepository)
    })

    it('should create data', async () => {

        const mock = new repository()

        const adp = new Adp()
        const instance = new BaseRepository(mock, adp)

        await instance.create(new Users())

        expect(mock.save).toHaveBeenCalled()
        expect(adp.ifToEntityCreateCase).toHaveBeenCalled()
    })

    it('should index all data', async () => {

        const mock = new repository()

        const adp = new Adp()
        const instance = new BaseRepository(mock, adp)

        await instance.findAll(new Users())

        expect(mock.find).toHaveBeenCalled()
    })

    it('should index all data', async () => {

        const mock = new repository()

        const adp = new Adp()
        const instance = new BaseRepository(mock, adp)

        await instance.delete(1)

        expect(mock.delete).toHaveBeenCalled()
    })

    it('has find by id method', async () => {

        const mock = new repository()

        const adp = new Adp()
        const instance = new BaseRepository(mock, adp)

        await instance.findOneById(1)

        expect(mock.findOne).toHaveBeenCalled()
    })
})