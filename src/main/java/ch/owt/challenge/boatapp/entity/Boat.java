package ch.owt.challenge.boatapp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import org.springframework.lang.NonNull;
import org.springframework.validation.annotation.Validated;

/**
 * A boat entity.
 */
@Entity
@Data
@Validated
public class Boat {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NonNull
    private String name;
    @NonNull
    private String description;

    protected Boat() {
    }

    public Boat(String name, String description) {
        this.name = name;
        this.description = description;
    }

}
