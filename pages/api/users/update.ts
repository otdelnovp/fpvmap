import type { NextApiRequest, NextApiResponse } from 'next'
import { hash } from 'bcrypt'

import dbConnect from '../../../utils/dbConnect'
import { User } from '../../../models'

import { prepareUser } from './methods'
import { validate } from './validate'

export default async function updateUser (req: NextApiRequest, res: NextApiResponse) {
    await dbConnect()

    try {
        const { email, password, name } = req.body
        const id = req.body.id

        await User.findOne({_id: id})

        validate(email, password)

        const hashPassword = await hash(password, 12)

        const user = await User.findByIdAndUpdate(
            id, {
                $set: {
                    email,
                    password: hashPassword,
                    name
                },
            }, {
                new: true,
            },
        )

        return res.status(200).json({
            message: 'Пользователь обновлен',
            // @ts-ignore
            data: prepareUser(user)
        })

    } catch (err) {
        res.status(520).json({
            message: `Ошибка сервера: ${err}`
        })
    }
}