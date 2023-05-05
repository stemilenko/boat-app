package ch.owt.challenge.boatapp.repository;

import ch.owt.challenge.boatapp.entity.Boat;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository for boat entities.
 */
@Repository
public interface BoatRepository extends CrudRepository<Boat, Long> {

}
