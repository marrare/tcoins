package Tcoins.tcoins.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class LojaRamos {

    @Id
    private Long id;
    private String Ramo;
    private Date createdAt;
    private Date UpdatedAt;

    public LojaRamos(String ramo, Date createdAt, Date updatedAt) {
        Ramo = ramo;
        this.createdAt = createdAt;
        UpdatedAt = updatedAt;
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
        return UpdatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        UpdatedAt = updatedAt;
    }
}
