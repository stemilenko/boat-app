package ch.owt.challenge.boatapp.web;

import ch.owt.challenge.boatapp.entity.Boat;
import ch.owt.challenge.boatapp.service.BoatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller for managing boats.
 */
@RestController
@RequestMapping("/api")
public class BoatController {

    private BoatService boatService;

    @Autowired
    public void setBoatService(BoatService boatService) {
        this.boatService = boatService;
    }

    /**
     * API to get the list of boats.
     *
     * @return The list of boats
     */
    @GetMapping("/list")
    public ResponseEntity<List<Boat>> list() {
        return new ResponseEntity<>(this.boatService.list(), HttpStatus.OK);
    }

    /**
     * API to get a boat.
     *
     * @return The boat
     */
    @GetMapping("/get/{id}")
    public ResponseEntity<Boat> get(@PathVariable Long id) {
        return new ResponseEntity<>(this.boatService.get(id), HttpStatus.OK);
    }

    /**
     * API to add a new boat.
     */
    @PostMapping(value = "/add", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Boat> add(@RequestBody Boat boat) {
        return new ResponseEntity<>(this.boatService.save(boat), HttpStatus.OK);
    }

    /**
     * API to update a boat.
     *
     * @return The updated boat
     */
    @PutMapping(value = "/update", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Boat> update(@RequestBody Boat boat) {
        return new ResponseEntity<>(this.boatService.save(boat), HttpStatus.OK);
    }

    /**
     * API to delete a boat.
     */
    @DeleteMapping("/delete/{id}")
    @ResponseStatus(value = HttpStatus.OK)
    public void delete(@PathVariable Long id) {
        this.boatService.delete(id);
    }

}
