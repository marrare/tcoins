package br.ifpe.tcoins.controller;

import br.ifpe.tcoins.service.TcoinsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin( origins = "*")
@RequestMapping("tcoins")
public class TcoinsController {

    @Autowired
    TcoinsService tcoinsService;

    @PostMapping("resgate")
    public ResponseEntity resgatarTcoins(@RequestHeader Long userId, @RequestHeader Integer valor){
        tcoinsService.usarTcoins(userId, valor);
        return ResponseEntity.ok().build();
    }
    @PostMapping("add")
    public ResponseEntity addTcoins(@RequestHeader Long userId, @RequestHeader Integer valor){
        tcoinsService.addTcoins(userId,valor);
        return ResponseEntity.ok().build();
    }
}
