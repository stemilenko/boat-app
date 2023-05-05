package ch.owt.challenge.boatapp.repository;

import ch.owt.challenge.boatapp.entity.AppUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository for user entities.
 */
@Repository
public interface UserRepository extends CrudRepository<AppUser, Long> {

    AppUser findByUsernameAndPassword(String username, String password);

}
