package br.ifpe.tcoins.controller;

import br.ifpe.tcoins.model.LojaRamos;
import br.ifpe.tcoins.service.RamoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("ramos")
public class RamoController {

    @Autowired
    private RamoService ramoService;
    @GetMapping()
    public  ResponseEntity<List<LojaRamos>> getAll(){
        return ResponseEntity.ok(ramoService.getAll());
    }
}
