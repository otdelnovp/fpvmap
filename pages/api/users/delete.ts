import type { NextApiRequest, NextApiResponse } from 'next'

import dbConnect from '../../../utils/dbConnect'
import { User } from '../../../models'

export default async function deleteUser (req: NextApiRequest, res: NextApiResponse) {
    await dbConnect()

    const { id } = req.body

    try {
        const user = await User.findById(id)
        if (!user) {
            return res.status(200).json({
                error: 'Пользователь не найден'
            })
        }

        const userDelete = await User.findByIdAndRemove(id)
        return res.status(200).json({
            message: 'Пользователь удален',
            data: userDelete
        })
        
    } catch (err) {
        res.status(520).json({
            message: `Ошибка сервера: ${ err }`
        })
    }

}