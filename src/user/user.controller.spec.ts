import { Test } from '@nestjs/testing'
import { ADP } from '../../src/helpers/adapters/adapter';
import { Repository } from 'typeorm';
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { UserRepository } from './user.repository';

describe('UserController', () => {
    let userController: UserController
    let userService: UserService
    let userRepository: UserRepository

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            imports: [],
	        providers: [
                UserService,
                UserRepository,
                ADP,
                {
                    provide: 'UsersRepository',
                    useClass: Repository
                },
            ],
            controllers: [UserController]
        }).compile()

        userController = module.get<UserController>(UserController)
        userService = module.get<UserService>(UserService)
        userRepository = module.get<UserRepository>(UserRepository)
    })

    describe('getUsers', () => {
        it('should return an array of user', async () => {
            const result = ['test']
            // jest.spyOn(userRepository, 'findAll').mockImplementation(async () => result);
            jest.spyOn(userService, 'findAll').mockImplementation(async () => result);

            expect(await userController.getAll()).toBe(result)
        })
    })

    describe('findUser', () => {
        it('should find user with id 12', async () => {
            const result = ['test']
            const args = 12
            jest.spyOn(userRepository, 'findOneById').mockImplementation(async () => result);
            jest.spyOn(userService, 'findById').mockImplementation(async () => result);

            expect(await userController.finById(args)).toBe(result)
        })
    })

    describe('deleteUser', () => {
        it('should return object', async () => {
            const result = { message: 'deleted' }
            const args = 1
            jest.spyOn(userRepository, 'delete').mockImplementation(async () => result);
            jest.spyOn(userService, 'delete').mockImplementation(async () => result)

            expect(await userController.deleteById(args)).toBe(result)
        })
    })

    describe('update', () => {
        it('should return object', async () => {
            const result = { message: 'success' }
            const args = { id: 1, first_name: 'rangga' }
            jest.spyOn(userRepository, 'update').mockImplementation(async () => result);
            jest.spyOn(userService, 'update').mockImplementation(async () => result)

            expect(await userController.update(args)).toBe(result)
        })
    })

    describe('Create User', () => {
        it('should return object', async () => {
            const result = { message: 'success' }
            const args = { id: 1, first_name: 'rangga', last_name: 'adhitya', email: 'dene@a.com', password: 'asd' }
            jest.spyOn(userRepository, 'create').mockImplementation(async () => result);
            jest.spyOn(userService, 'create').mockImplementation(async () => result)

            expect(await userController.create(args)).toBe(result)
        })
    })
})
