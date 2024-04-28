package br.com.jcmsilv.devreactjsexrep.imggallerybe.controller;

import br.com.jcmsilv.devreactjsexrep.imggallerybe.dto.ImageThumbDTO;
import br.com.jcmsilv.devreactjsexrep.imggallerybe.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/imagens")
public class ImageController {

    @Autowired
    private ImageService imageService;

    @GetMapping
    public ResponseEntity<ImageThumbDTO> getImagens(){
        return ResponseEntity.ok(imageService.getImagens());
    }


    @GetMapping("/thumb/{imageName}")
    public ResponseEntity<Resource> getImage(@PathVariable String imageName){
        Resource image = imageService.getImage(imageName);
        if (image == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + image.getFilename() + "\"")
                .body(image);
    }
}
