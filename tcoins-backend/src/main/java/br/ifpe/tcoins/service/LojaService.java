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
		// TODO - Não retornar lojas deletadas
		Pageable reqPage = page == null ? Pageable.unpaged() : PageRequest.of(page - 1, pageSize, Sort.by(Sort.Direction.ASC, "nome"));

		if (nome.isBlank() && ramo.isBlank()) {
			return lojaRepository.findAll(reqPage).map(LojaDTO::convertFromLoja);
		} else if (!nome.isBlank() && !ramo.isBlank()) {
			return lojaRepository.findByNomeContainingIgnoreCaseAndRamo_RamoContainingIgnoreCase(reqPage, nome, ramo).map(LojaDTO::convertFromLoja);
		} else if (!ramo.isBlank()) {
			return lojaRepository.findByRamo_RamoContainingIgnoreCase(reqPage, ramo).map(LojaDTO::convertFromLoja);
		} else {
			return lojaRepository.findByNomeContainingIgnoreCase(reqPage, nome).map(LojaDTO::convertFromLoja);
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
		return lojaRepository.findByNomeIgnoreCase(nome);
	}

	public Loja getLojaById(Long id) {
		// TODO - Não retornar lojas deletadas
		return lojaRepository.findById(id).orElse(null);
	}

    public Page<LojaDTO> getLojaByUserId(Integer page, Integer pageSize, Long userId) {
    	// TODO - Não retornar lojas deletadas
    	Pageable reqPage = page == null ? Pageable.unpaged() : PageRequest.of(page - 1, pageSize, Sort.by(Sort.Direction.ASC, "nome"));
		return lojaRepository.findByDono_id(reqPage, userId).map(LojaDTO::convertFromLoja);
    }
}
