import {Request, Response} from "express";
import ApiService from "../../utils/api.service";

class ArtistsController {

    async getOne(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const {data} = await ApiService.getById('/artist', id);
            if(data.error) {
                return res.json(data);
            } else {
                let artist = data;
                // Fetch artist's tracklist
                const tracklist: any = await ApiService.getByUrl(artist.tracklist);
                // Get albums from the tracklist
                const albums: Array<any> = tracklist.data.data.reduce((acc: Array<any>, item: any) => {
                  if (!acc.find((a: any) => a.id === item.album.id)) {
                    acc.push(item.album)
                  }
                  return acc;
                }, [])
            
                artist = {
                  ...artist,
                  tracklist: tracklist.data.data,
                  albums,
                }

                return res.json(artist)
            }
        } catch (error) {
            console.log('error', error)
            return res.status(500).json({error: 'Something went wrong.'})
        }
    }
}



export default new ArtistsController();