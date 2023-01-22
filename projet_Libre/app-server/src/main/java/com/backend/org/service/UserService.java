package com.backend.org.service;

import com.backend.org.payload.UserIdentityAvailability;
import com.backend.org.payload.UserProfile;
import com.backend.org.security.CurrentUser;
import com.backend.org.security.UserPrincipal;
import org.springframework.stereotype.Service;

@Service
public interface UserService {


    UserProfile getCurrentUser(@CurrentUser UserPrincipal currentUser);
    UserIdentityAvailability checkUsernameAvailability(String username);
    UserIdentityAvailability checkEmailAvailability(String email);
    UserProfile getUserProfile(String username);

}
