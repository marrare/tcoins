package Tcoins.tcoins.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

import java.util.Date;

@Entity
@Table(name="loja_ramos")
public class LojaRamos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String Ramo;
    @JoinColumn(name = "created_at")
	private Date createdAt;
	
	@JoinColumn(name = "updates_at")
    private Date UpdatesAt;

    public LojaRamos(String ramo, Date createdAt, Date updatesAt) {
        Ramo = ramo;
        this.createdAt = createdAt;
        UpdatesAt = updatesAt;
    }

    public LojaRamos() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRamo() {
        return Ramo;
    }

    public void setRamo(String ramo) {
        Ramo = ramo;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return UpdatesAt;
    }

    public void setUpdatedAt(Date updatesAt) {
        UpdatesAt = updatesAt;
    }
}
