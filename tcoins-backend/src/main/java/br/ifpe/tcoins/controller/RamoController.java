package br.ifpe.tcoins.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.ifpe.tcoins.dto.response.RamoDTO;
import br.ifpe.tcoins.exception.ResourceNotFoundException;
import br.ifpe.tcoins.model.LojaRamos;
import br.ifpe.tcoins.service.RamoService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/ramos")
public class RamoController {

    @Autowired
    private RamoService ramoService;
    
    @GetMapping()
    public  ResponseEntity<List<RamoDTO>> getAll(){
    	List<RamoDTO> ramoDto = ramoService.getAll();
    	
    	if (ramoDto.size() == 0) throw new ResourceNotFoundException("Not found ramos");
    	
        return ResponseEntity.ok(ramoDto);
    }
    
    @GetMapping("info")
    public  ResponseEntity<RamoDTO> getRamo(@RequestHeader final Long ramoId){
    	LojaRamos ramo = ramoService.getRamoById(ramoId);
    	
    	if (ramo == null) throw new ResourceNotFoundException("Ramo not found");
    	
    	RamoDTO ramoDto = RamoDTO.convertFromRamo(ramo);
        return ResponseEntity.ok(ramoDto);
    }
}
