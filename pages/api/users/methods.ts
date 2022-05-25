import { IUser } from '../../../models'

export const prepareUser = (user: IUser) => {
    return {
        Id: user._id,
        Name: user.name,
        Email: user.email,
    }
}