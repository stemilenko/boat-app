package ch.owt.challenge.boatapp.web;

import ch.owt.challenge.boatapp.entity.AppUser;
import ch.owt.challenge.boatapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Objects;

/**
 * Controller for managing users.
 */
@RestController
@RequestMapping("/api")
public class UserController {

    private UserService userService;

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    /**
     * API to authenticate a user.
     */
    @PostMapping(value = "/authenticate", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<AppUser> add(@RequestBody AppUser user) {
        AppUser result = this.userService.authenticate(user);
        return Objects.isNull(result) ? new ResponseEntity<>(HttpStatus.UNAUTHORIZED) : new ResponseEntity<>(result, HttpStatus.OK);
    }

}
