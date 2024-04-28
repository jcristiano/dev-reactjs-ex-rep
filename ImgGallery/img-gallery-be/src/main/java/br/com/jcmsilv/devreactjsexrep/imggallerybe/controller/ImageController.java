package br.com.jcmsilv.devreactjsexrep.imggallerybe.controller;

import br.com.jcmsilv.devreactjsexrep.imggallerybe.dto.ImageThumbDTO;
import br.com.jcmsilv.devreactjsexrep.imggallerybe.model.Image;
import br.com.jcmsilv.devreactjsexrep.imggallerybe.service.ImageService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/imagens")
public class ImageController {

    @Autowired
    private ImageService imageService;

    @GetMapping
    public ResponseEntity<ImageThumbDTO> getImagens(){
        return ResponseEntity.ok(imageService.getImagens());
    }
}
