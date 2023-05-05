package ch.owt.challenge.boatapp.service;

import ch.owt.challenge.boatapp.entity.Boat;
import ch.owt.challenge.boatapp.repository.BoatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.StreamSupport;

/**
 * The boat service.
 */
@Service
public class BoatService {

    private BoatRepository boatRepository;

    @Autowired
    public void setBoatRepository(BoatRepository boatRepository) {
        this.boatRepository = boatRepository;
    }

    /**
     * Method that returns the list of boats.
     *
     * @return The list of boats
     */
    public List<Boat> list() {
        return StreamSupport.stream(this.boatRepository.findAll().spliterator(), false).toList();
    }

    /**
     * Method that returns a boat.
     *
     * @param id The boat id
     * @return The boat
     */
    public Boat get(Long id) {
        return this.boatRepository.findById(id).orElse(null);
    }

    /**
     * Method that saves a boat.
     *
     * @return The saved boat
     */
    public Boat save(Boat boat) {
        return this.boatRepository.save(boat);
    }

    /**
     * Method that deletes a boat.
     *
     * @param id The boat id
     */
    public void delete(Long id) {
        this.boatRepository.deleteById(id);
    }

}
