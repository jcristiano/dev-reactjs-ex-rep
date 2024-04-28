package br.com.jcmsilv.devreactjsexrep.imggallerybe.service;

import br.com.jcmsilv.devreactjsexrep.imggallerybe.dto.ImageThumbDTO;
import br.com.jcmsilv.devreactjsexrep.imggallerybe.model.Image;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

@Service
public class ImageService {
    private final String imgRepository;

    public ImageService(
            @Value("${application.imagens.diretorio}") String imgRepository
    ){
        this.imgRepository = imgRepository;
    }

    public ImageThumbDTO getImagens(){
        List<Image> urls = new ArrayList<>();
        Path diretorio = Paths.get(imgRepository);
        if (Files.isDirectory(diretorio)){
            File[] arquivos = diretorio.toFile().listFiles();
            if (arquivos != null){
                for(File arquivo : arquivos){
                    if (arquivo.isFile() && arquivo.getName().contains("thumb")){
                        String imgName = arquivo.toPath().getFileName().toString();
                        urls.add(new Image(imgName));
                    }
                }
            }
        }
        Collections.sort(urls);
        HashSet<Image> images = new HashSet<>(urls);

        return new ImageThumbDTO(images.size(), images);
    }
}
