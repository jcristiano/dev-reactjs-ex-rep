import { AxiosResponse } from "axios";
import api from "./api";
import { Image } from "../components/ImageGallery/ImageGallery";

interface ThumbGalleryInterface {
    total: number,
    imagens: Image[];
}

const ImageGalleryService = {
    listarThumbs: async () : Promise<ThumbGalleryInterface> => {
        const requestParams = `/imagens`;
        try {
            const response : AxiosResponse<ThumbGalleryInterface> =
                await api.get(requestParams);
            return response.data;
        } catch(err){
            throw new Error("Erro ao chamar a API");
        }
    }
}

export default ImageGalleryService;