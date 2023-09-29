import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("the_users")
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

}
