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

    @PostMapping("uso")
    public ResponseEntity usarTcoins(@RequestHeader Long UserId, @RequestHeader Integer valor){
        tcoinsService.usarTcoins(UserId, valor);
        return ResponseEntity.ok().build();
    }
}
