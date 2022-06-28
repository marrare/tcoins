package br.ifpe.tcoins.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="loja_ramos")
public class LojaRamos {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "loja_ramos_generator")
	@SequenceGenerator(name="loja_ramos_generator", sequenceName = "loja_ramos_seq")
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;
    
    @Column(length = 30, nullable=false)
    private String ramo;
    
	@Column(name = "created_at", length = 255, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private LocalDate createdAt;
	
	@Column(name = "updated_at", length = 255, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private LocalDate updatedAt;

	@Override
	public String toString() {
		return "LojaRamos [id=" + id + ", ramo=" + ramo + ", createdAt=" + createdAt + ", updatesAt=" + updatedAt + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getRamo() {
		return ramo;
	}

	public void setRamo(String ramo) {
		this.ramo = ramo;
	}

	public LocalDate getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDate createdAt) {
		this.createdAt = createdAt;
	}

	public LocalDate getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(LocalDate updatedAt) {
		this.updatedAt = updatedAt;
	}

}
