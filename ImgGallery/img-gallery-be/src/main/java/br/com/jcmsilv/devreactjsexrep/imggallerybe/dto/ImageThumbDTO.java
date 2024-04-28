package br.com.jcmsilv.devreactjsexrep.imggallerybe.dto;

import br.com.jcmsilv.devreactjsexrep.imggallerybe.model.Image;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Set;

public record ImageThumbDTO (Integer total, @JsonProperty("imagens") Set<Image> thumbs){}

