import axios from '../axios';

export const getSong = (songID) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            url: '/song',
            method:'get',
            params: {id: songID}
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const getInforSong = (songID) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            url: '/infosong',
            method:'get',
            params: {id: songID}
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const getDetailsPlaylist = (songID) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            url: '/detailplaylist',
            method:'get',
            params: {id: songID}
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})