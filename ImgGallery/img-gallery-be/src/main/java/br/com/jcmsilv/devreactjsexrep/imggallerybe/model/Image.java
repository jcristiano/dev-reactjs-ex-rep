package br.com.jcmsilv.devreactjsexrep.imggallerybe.model;

import lombok.*;

@Builder
@Getter
public class Image implements Comparable<Image> {
    private String name;
    private String alt;
    private String url;

    @Override
    public int compareTo(Image o) {
        return name.compareTo(o.name);
    }
}
