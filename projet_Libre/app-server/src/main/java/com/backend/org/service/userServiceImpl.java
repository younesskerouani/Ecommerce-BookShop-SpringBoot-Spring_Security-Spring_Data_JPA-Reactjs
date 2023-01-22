package com.backend.org.service;

import com.backend.org.exception.ResourceNotFoundException;
import com.backend.org.model.User;
import com.backend.org.payload.UserIdentityAvailability;
import com.backend.org.payload.UserProfile;
import com.backend.org.repository.UserRepository;
import com.backend.org.security.UserPrincipal;
import org.springframework.stereotype.Service;

@Service
public class userServiceImpl implements UserService {

    private UserRepository userRepository;

    public userServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserProfile getCurrentUser(UserPrincipal currentUser) {
        UserProfile userProfile = new UserProfile(currentUser.getId(), currentUser.getUsername(), currentUser.getName());
        return userProfile;
    }

    @Override
    public UserIdentityAvailability checkUsernameAvailability(String username) {


        Boolean isAvailable = !userRepository.existsByUsername(username);
        return new UserIdentityAvailability(isAvailable);
    }

    @Override
    public UserIdentityAvailability checkEmailAvailability(String email) {
        Boolean isAvailable = !userRepository.existsByEmail(email);
        return new UserIdentityAvailability(isAvailable);
    }

    @Override
    public UserProfile getUserProfile(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("User", "username", username));

        UserProfile userProfile = new UserProfile(user.getId(), user.getUsername(), user.getName());

        return userProfile;
    }
}
