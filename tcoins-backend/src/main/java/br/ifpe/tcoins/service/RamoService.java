package br.ifpe.tcoins.service;

import br.ifpe.tcoins.model.LojaRamos;
import br.ifpe.tcoins.repository.LojaRamosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RamoService {
    @Autowired
    LojaRamosRepository ramosRepository;


    public LojaRamos getRamoById(Long ramoId) {
        return ramosRepository.getById(ramoId);
    }
}
