package br.ifpe.tcoins.controller;

import br.ifpe.tcoins.dto.response.PlanosDTO;
import br.ifpe.tcoins.exception.ResourceNotFoundException;
import br.ifpe.tcoins.model.Planos;
import br.ifpe.tcoins.service.PlanoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/plano")
@CrossOrigin(origins = "*")
public class PlanosController {

    @Autowired
    PlanoService planoService;

    @GetMapping
    public ResponseEntity getPlanos(){
        List<PlanosDTO> planos = planoService.getPlanos();

        if (planos == null)
            throw new ResourceNotFoundException("");

        return ResponseEntity.ok(planos);
    }

    @PutMapping()
    public ResponseEntity atualizarPlanoUsuario(@RequestHeader Long userId,
                                                @RequestHeader Long planoId,
                                                @RequestHeader Integer duracao){
        planoService.atualizarPlanoUsuario(userId, planoId, duracao);
        return ResponseEntity.ok().build();

    }
}
