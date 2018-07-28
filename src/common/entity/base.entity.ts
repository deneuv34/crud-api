'use-strict'
import { UpdateDateColumn, CreateDateColumn } from 'typeorm'

export default abstract class BaseEntity {
  id: number | string | undefined

  @CreateDateColumn({ type: 'timestamp' })
  public created_at: string

  @UpdateDateColumn({ type: 'timestamp' })
  public updated_at?: string
}
