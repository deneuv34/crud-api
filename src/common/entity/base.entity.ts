'use-strict'
import { Column } from 'typeorm'

export default abstract class BaseEntity {
  id?: number | string

  @Column({ type: 'datetime' })
  public created_at: string

  @Column({ type: 'datetime', nullable: true })
  public updated_at?: string
}
