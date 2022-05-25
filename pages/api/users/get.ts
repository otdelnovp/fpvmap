import type { NextApiRequest, NextApiResponse } from 'next'

import dbConnect from '../../../utils/dbConnect'
import { User } from '../../../models'

import { prepareUser } from './methods'

export default async function getUser (req: NextApiRequest, res: NextApiResponse) {
    await dbConnect()

    console.log(req.query, req.body)

    const { id } = req.query
    try {
        const user = await User.findById(id)

        if (!user) {
            return res.status(200).json({
                error: 'Пользователь не найден'
            })
        }

        return res.status(200).json({
            message: 'Пользователь найден',
            data: prepareUser(user)
        })
        
    } catch (err) {
        res.status(520).json({
            error: `Ошибка сервера: ${ err }`
        })
    }
}