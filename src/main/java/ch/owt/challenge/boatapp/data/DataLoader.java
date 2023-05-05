package ch.owt.challenge.boatapp.data;

import ch.owt.challenge.boatapp.entity.Boat;
import ch.owt.challenge.boatapp.entity.AppUser;
import ch.owt.challenge.boatapp.repository.BoatRepository;
import ch.owt.challenge.boatapp.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Class used to load the data.
 */
@Configuration
@Slf4j
public class DataLoader {

    /**
     * Method called to load the data.
     *
     * @param boatRepository The boat repository
     * @param userRepository The user repository
     * @return The CommandLineRunner
     */
    @Bean
    public CommandLineRunner loadData(BoatRepository boatRepository, UserRepository userRepository) {
        return (args) -> {
            // Load a few boats
            boatRepository.save(new Boat("Aline", "Aline's sailboat"));
            boatRepository.save(new Boat("Tim", "Tim's catamaran"));
            boatRepository.save(new Boat("Stefan", "Stefan's yacht"));
            boatRepository.save(new Boat("Elise", "Elise's sloop"));

            // Display loaded boats
            log.info("--------------------------------------------------------------");
            log.info("Loaded boats:");
            for (Boat boat : boatRepository.findAll()) {
                log.info(boat.getId() + ": " + boat.getName() + " - " + boat.getDescription());
            }

            // Load a few users
            userRepository.save(new AppUser("john", "1234"));
            userRepository.save(new AppUser("bernard", "0000"));

            // Display loaded users
            log.info("--------------------------------------------------------------");
            log.info("Loaded users:");
            for (AppUser user : userRepository.findAll()) {
                log.info(user.getId() + ": " + user.getUsername());
            }
            log.info("--------------------------------------------------------------");
        };
    }

}
