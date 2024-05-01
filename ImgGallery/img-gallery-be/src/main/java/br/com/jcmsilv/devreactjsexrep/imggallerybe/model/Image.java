package br.com.jcmsilv.devreactjsexrep.imggallerybe.model;

import lombok.*;

@Builder
@Getter
public class Image {

    private Integer id;
    private String name;
    private String alt;
    private String url;


}
