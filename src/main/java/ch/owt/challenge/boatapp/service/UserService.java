package ch.owt.challenge.boatapp.service;

import ch.owt.challenge.boatapp.entity.AppUser;
import ch.owt.challenge.boatapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

/**
 * The user service.
 */
@Service
public class UserService {

    private UserRepository userRepository;

    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * Method that authenticates a user.
     *
     * @param user The user
     */
    public AppUser authenticate(AppUser user) {
        AppUser result = this.userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword());
        if (Objects.nonNull(result)) {
            result.setPassword("*****");
        }
        return result;
    }

}
