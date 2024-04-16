import { TileCache } from "../tileCache";
import { RendererFunction, Tile, TileParams } from "../types";


async function getTileWithCaching(tileParams: TileParams, dataParams: any, tileCache: TileCache, renderTile: RendererFunction): Promise<Tile> {
    console.log(" getTileWithCaching called tileParams: " + tileParams + "dataParams: " + dataParams)
    try {
        console.log(" getTileWithCaching tries using cache")
        const tile = await tileCache.get(tileParams);
        return tile;
    } catch (err) {
        console.log(" getTileWithCaching - cache failed, will render tile")
        const im = await renderTile(tileParams, dataParams);
        try {
            await tileCache.put(im, tileParams);
        } catch (err) {
            console.error(err);
        }
        return im;
    }
}


export {
    getTileWithCaching
};
