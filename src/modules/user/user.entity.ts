import { Column, Entity, ObjectIdColumn, ObjectID } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity'
import { UserDto } from './dto/user.dto';

@Entity({ name: 'ix_user_master' })
export class UserEntity extends AbstractEntity {

  @Column({ nullable: true })
  msid?: string;

  @Column({ nullable: true })
  user_name?: string;

  @Column({ nullable: true })
  user_email: string;

  @Column({ nullable: true })
  user_flag?: string;

  @Column({ nullable: true })
  user_domain?: string;

  @Column({ nullable: true })
  user_business_area?: string;

  @Column({ nullable: true })
  user_lob?: string;

  @Column()
  user_location?: string;
}
