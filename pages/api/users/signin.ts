import type { NextApiRequest, NextApiResponse } from 'next'
import { compare } from 'bcrypt'

import dbConnect from '../../../utils/dbConnect'
import { User } from '../../../models'

import { prepareUser } from './methods'

export default async function signIn (req: NextApiRequest, res: NextApiResponse) {
    await dbConnect()

    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(200).json({
                error: 'Неправильный email'
            })
        }

        const matchesPassword = await compare(password, user.password);
        if (!matchesPassword) {
            return res.status(200).json({
                error: 'Неправильный пароль'
            })
        }

        return res.status(200).json({
            message: 'Вход разрешен',
            data: prepareUser(user)
        })

    } catch (err) {
        return res.status(520).json({
            message: `Ошибка сервера: ${ err }`
        })
    }
}