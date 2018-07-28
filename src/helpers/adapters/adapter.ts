'use strict'

import { Injectable } from '@nestjs/common'

export class ADP<T> {
	updateAssign(oldObj: T, newObj: BaseObject): T {
		// tslint:disable-next-line:forin
		for (const i in newObj) {
			const key = i.toString()

			key === 'id' ||
			key === 'created_at' ||
			key === 'updated_at' ||
			// tslint:disable-next-line:no-unused-expression
			key === 'deleted_at'
				? // tslint:disable-next-line:no-unused-expression
				  null
				: (oldObj[key] = newObj[key])
		}

		return oldObj
	}

	ifToEntity(obj: BaseObject): T {
		// tslint:disable-next-line:prefer-const
		let entity: T = {} as T

		// tslint:disable-next-line:forin
		for (const key in obj) {
			entity[key] = obj[key]
		}

		return entity
	}

	ifToEntityCreateCase(obj: BaseObject): T {
		// tslint:disable-next-line:prefer-const
		let entity = this.ifToEntity(obj)

		// tslint:disable-next-line:no-string-literal
		if (entity.hasOwnProperty('id')) entity['id'] = undefined

		return entity
	}
}

interface BaseObject {
	[key: string]: any
}
