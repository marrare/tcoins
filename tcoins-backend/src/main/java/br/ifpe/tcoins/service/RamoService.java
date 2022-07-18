package br.ifpe.tcoins.service;

import br.ifpe.tcoins.model.LojaRamos;
import br.ifpe.tcoins.repository.LojaRamosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RamoService {
    @Autowired
    LojaRamosRepository ramosRepository;


    public LojaRamos getRamoById(Long ramoId) {
        return ramosRepository.getById(ramoId);
    }

    public List<LojaRamos> getAll() {
        return  ramosRepository.findAll();
    }
}
