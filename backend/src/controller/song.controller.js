import {Song} from '../models/song.model.js';

export const getAllSongs = async (req, res, next) => {
    try {
        const songs = await Song.find().sort({ createdAt: -1 });    // -1 : descending
        res.json(songs);
    } catch (error) {
        next(error);
    }
}

export const getFeaturedSongs = async (req, res, next) => {
    try{
        const songs = await Song.aggregate([    //random 6 songs
            { 
                $sample: { size: 6 } 
            },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    artist: 1,
                    imageUrl: 1,
                    audioUrl:1
                }
            }
        ])

        res.json(songs);
    }
    catch(error){
        next(error);
    }
}

export const getMadeForYouSongs = async (req, res, next) => {
    try{
        const songs = await Song.aggregate([    //random 4 songs
            { 
                $sample: { size: 4 } 
            },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    artist: 1,
                    imageUrl: 1,
                    audioUrl:1
                }
            }
        ])

        res.json(songs);
    }
    catch(error){
        next(error);
    }
}

export const getTrendingSongs = async (req, res, next) => {
    try{
        const songs = await Song.aggregate([    //random 4 songs
            { 
                $sample: { size: 4 } 
            },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    artist: 1,
                    imageUrl: 1,
                    audioUrl:1
                }
            }
        ])

        res.json(songs);
    }
    catch(error){
        next(error);
    }
}
