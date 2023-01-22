package com.backend.org.controller;
import com.backend.org.payload.UserIdentityAvailability;
import com.backend.org.payload.UserProfile;
import com.backend.org.security.UserPrincipal;
import com.backend.org.security.CurrentUser;
import com.backend.org.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

    private UserService userService;


    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user/me")
    //@PreAuthorize("hasRole('ADMIN')")
    public UserProfile getCurrentUser(@CurrentUser UserPrincipal currentUser) {
        return userService.getCurrentUser(currentUser);
    }

    @GetMapping("/user/checkUsernameAvailability")
    public UserIdentityAvailability checkUsernameAvailability(@RequestParam(value = "username") String username) {
       return  userService.checkUsernameAvailability(username);
    }

    @GetMapping("/user/checkEmailAvailability")
    public UserIdentityAvailability checkEmailAvailability(@RequestParam(value = "email") String email) {
       return  userService.checkEmailAvailability(email);
    }

    @GetMapping("/users/{username}")
    public UserProfile getUserProfile(@PathVariable(value = "username") String username) {
        return  userService.getUserProfile(username);
    }

}
