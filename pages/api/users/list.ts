import type { NextApiRequest, NextApiResponse } from 'next'

import dbConnect from '../../../utils/dbConnect'
import { User } from '../../../models'

import { prepareUser } from './methods'

export default async function listUser (req: NextApiRequest, res: NextApiResponse) {
    await dbConnect()

    try {
        const users = await User.find({})
        
        return res.status(200).json({
            message: 'Пользователи найдены',
            data: users.map(user => prepareUser(user))
        })

    } catch (err) {
        res.status(520).json({
            message: `Ошибка сервера: ${ err }`
        })
    }
}