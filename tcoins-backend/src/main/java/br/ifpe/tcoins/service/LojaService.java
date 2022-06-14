package br.ifpe.tcoins.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.ifpe.tcoins.model.Loja;
import br.ifpe.tcoins.repository.LojaRepository;

@Service
public class LojaService {

    @Autowired
    private LojaRepository lojaRepository;

    public List<Loja> getLojas(){
    	//TODO - considerar filtro por (ramo, nome)
    	//TODO - ordenar por nome
    	//TODO - ordenar por proximidade 
        return lojaRepository.findAll();
    }
}
