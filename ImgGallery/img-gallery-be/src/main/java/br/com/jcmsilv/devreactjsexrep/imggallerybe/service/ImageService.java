package br.com.jcmsilv.devreactjsexrep.imggallerybe.service;

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

    public Set<String> getImagens(){
        List<String> urls = new ArrayList<>();
        Path diretorio = Paths.get(imgRepository);
        if (Files.isDirectory(diretorio)){
            File[] arquivos = diretorio.toFile().listFiles();
            if (arquivos != null){
                for(File arquivo : arquivos){
                    if (arquivo.isFile() && arquivo.getName().contains("thumb")){
                        urls.add(arquivo.toPath().getFileName().toString());
                    }
                }
            }
        }
        Collections.sort(urls);
        return new HashSet<>(urls);
    }
}
