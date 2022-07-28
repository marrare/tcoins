package br.ifpe.tcoins.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import br.ifpe.tcoins.dto.response.LojaDTO;
import br.ifpe.tcoins.model.Loja;
import br.ifpe.tcoins.repository.LojaRepository;

@Service
public class LojaService {

	@Autowired
	private LojaRepository lojaRepository;

	public Page<LojaDTO> getLojas(Integer page, Integer pageSize, String nome, String ramo) {
		// TODO - ordenar por proximidade
		Pageable reqPage = page == null ? Pageable.unpaged() : PageRequest.of(page - 1, pageSize, Sort.by(Sort.Direction.ASC, "nome"));

		if (nome.isBlank() && ramo.isBlank()) {
			return lojaRepository.findByDeletedFalse(reqPage).map(LojaDTO::convertFromLoja);
		} else if (!nome.isBlank() && !ramo.isBlank()) {
			return lojaRepository.findByNomeContainingIgnoreCaseAndRamo_RamoContainingIgnoreCaseAndDeletedFalse(reqPage, nome, ramo).map(LojaDTO::convertFromLoja);
		} else if (!ramo.isBlank()) {
			return lojaRepository.findByRamo_RamoContainingIgnoreCaseAndDeletedFalse(reqPage, ramo).map(LojaDTO::convertFromLoja);
		} else {
			return lojaRepository.findByNomeContainingIgnoreCaseAndDeletedFalse(reqPage, nome).map(LojaDTO::convertFromLoja);
		}
	}
	
	public void cadastrarLoja(Loja loja){
		lojaRepository.save(loja);
	}
	
	public void deletarLojaById(Long id){
		Loja loja = lojaRepository.getById(id);
		loja.setDeleted(true);
		lojaRepository.save(loja);
	}

	public Loja getLojaByNome(String nome) {
		return lojaRepository.findByNomeIgnoreCaseAndDeletedFalse(nome);
	}

	public Loja getLojaById(Long id) {
		return lojaRepository.findByIdAndDeletedFalse(id);
	}

    public Page<LojaDTO> getLojaByUserId(Integer page, Integer pageSize, Long userId) {
    	Pageable reqPage = page == null ? Pageable.unpaged() : PageRequest.of(page - 1, pageSize, Sort.by(Sort.Direction.ASC, "nome"));
		return lojaRepository.findByDono_idAndDeletedFalse(reqPage, userId).map(LojaDTO::convertFromLoja);
    }
}
