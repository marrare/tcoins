package br.ifpe.tcoins.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import br.ifpe.tcoins.model.Loja;
import br.ifpe.tcoins.repository.LojaRepository;

@Service
public class LojaService {

    @Autowired
    private LojaRepository lojaRepository;

    public Page<Loja> getLojas(int page, int pageSize, String buscaPorNome, String buscaPorRamo){
    	//TODO - ordenar por proximidade
        if (!buscaPorNome.toLowerCase().trim().isBlank())
            return lojaRepository.findAllbyNomeContains(PageRequest.of(page, pageSize), buscaPorNome);
        else if (!buscaPorRamo.toLowerCase().trim().isBlank())
            return lojaRepository.findAllByRamoContains(
                    PageRequest.of(page,pageSize, Sort.Direction.ASC, "nome"));
        else
            return lojaRepository.findAll(
                    PageRequest.of(page,pageSize, Sort.by(Sort.Direction.ASC, "nome")));
    }
}
