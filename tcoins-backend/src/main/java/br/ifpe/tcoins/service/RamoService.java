package br.ifpe.tcoins.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.ifpe.tcoins.dto.response.RamoDTO;
import br.ifpe.tcoins.model.LojaRamos;
import br.ifpe.tcoins.repository.LojaRamosRepository;

@Service
public class RamoService {
	
    @Autowired
    LojaRamosRepository ramosRepository;

    public List<RamoDTO> getAll() {
        return ramosRepository.findAll().stream().map(RamoDTO::convertFromRamo).collect(Collectors.toList());
    }

    public LojaRamos getRamoById(Long ramoId) {
        return ramosRepository.findById(ramoId).orElse(null);
    }
    
}
