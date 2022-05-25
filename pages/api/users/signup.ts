import type { NextApiRequest, NextApiResponse } from 'next'
import { hash } from 'bcrypt'

import dbConnect from '../../../utils/dbConnect'
import { User } from '../../../models'

import { prepareUser } from './methods'
import { validate } from './validate'

export default async function signUp (req: NextApiRequest, res: NextApiResponse) {
    await dbConnect()

    try {
        const { email, password, name } = req.body

        validate(email,password)

        const foundUser = await User.findOne({ email })
        if (foundUser) {
            return res.status(200).json({
                error: 'Пользователь с таким email уже существует!'
            })
        }

        const hashPassword = await hash(password, 12)

        const user = new User({
            email,
            password: hashPassword,
            name
        })

        await user.save()

        return res.status(201).json({
            message: 'Пользователь зарегистрирован',
            data: prepareUser(user)
        })

    } catch (err) {
        res.status(520).json({
            message: `Ошибка сервера: ${ err }`
        })
    }
}