package Tcoins.tcoins.controllers;

import Tcoins.tcoins.entities.Usuario;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {


    @GetMapping("/user/{id}")
    public void getUsuarioByid(Long id){
        return;
    }


}
