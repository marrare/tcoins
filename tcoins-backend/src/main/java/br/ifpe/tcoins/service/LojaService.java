package br.ifpe.tcoins.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import br.ifpe.tcoins.model.Loja;
import br.ifpe.tcoins.repository.LojaRepository;

@Service
public class LojaService {

	@Autowired
	private LojaRepository lojaRepository;

	public Page<Loja> getLojas(Integer page, Integer pageSize, String nome, String ramo) {
		// TODO - ordenar por proximidade
		Pageable reqPage = page == null ? Pageable.unpaged() : PageRequest.of(page - 1, pageSize, Sort.by(Sort.Direction.ASC, "nome"));

		if (nome.isBlank() && ramo.isBlank()) {

			return lojaRepository.findAll(reqPage);
		} else if (!nome.isBlank() && !ramo.isBlank()) {

			return lojaRepository.findByNomeContainingIgnoreCaseAndRamo_RamoContainingIgnoreCase(reqPage, nome, ramo);
		} else if (!ramo.isBlank()) {

			return lojaRepository.findByRamo_RamoContainingIgnoreCase(reqPage, ramo);
		} else {

			return lojaRepository.findByNomeContainingIgnoreCase(reqPage, nome);
		}
	}
	public void cadastrarLoja(Loja loja){
		lojaRepository.save(loja);
	}
	public void deletarLojaById(Long id){
		lojaRepository.deleteById(id);
	}

	public Loja getLojaByNome(String nome) {
		return lojaRepository.findByNomeIgnoreCase(nome);
	}

	public Loja getLojabyId(Long lojaId) {
		 return lojaRepository.getById(lojaId);
	}
}
