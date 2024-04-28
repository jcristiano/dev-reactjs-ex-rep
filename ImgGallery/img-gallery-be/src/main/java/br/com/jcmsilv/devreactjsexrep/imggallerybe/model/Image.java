package br.com.jcmsilv.devreactjsexrep.imggallerybe.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;

@AllArgsConstructor
@Getter
public class Image implements Comparable<Image> {
    @NonNull
    private String name;

    @Override
    public int compareTo(Image o) {
        return name.compareTo(o.name);
    }
}
