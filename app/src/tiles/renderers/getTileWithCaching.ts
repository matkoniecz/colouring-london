import { TileCache } from "../tileCache";
import { RendererFunction, Tile, TileParams } from "../types";


async function getTileWithCaching(tileParams: TileParams, dataParams: any, tileCache: TileCache, renderTile: RendererFunction): Promise<Tile> {
    try {
        const tile = await tileCache.get(tileParams);
        console.log(" getTileWithCaching called tileParams: " + tileParams + "dataParams: " + dataParams)
        return tile;
    } catch (err) {
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
