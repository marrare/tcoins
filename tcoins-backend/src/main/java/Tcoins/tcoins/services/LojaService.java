package Tcoins.tcoins.services;

import Tcoins.tcoins.DAO.LojaDAO;
import Tcoins.tcoins.entities.Loja;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LojaService {

    @Autowired
    private LojaDAO lojaDAO;

    public Loja getLojaById(Long id){
        return lojaDAO.getById(id);
    }

    public List<Loja> getAllLojas(){
        return lojaDAO.findAll();
    }
    public void deleteLojabyId(Long id){
         lojaDAO.deleteById(id);
    }
    public void deleteLoja(Loja loja){
        lojaDAO.delete(loja);
    }
    public void atualizarLoja(Loja loja){
        lojaDAO.save(loja);
    }
    public void cadastrarloja(Loja loja){
        lojaDAO.save(loja);
    }
}
