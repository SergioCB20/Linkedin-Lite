package linkedin.server.server.Controller;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import linkedin.server.server.Model.User;
import linkedin.server.server.Service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable UUID id) {
        return userService.getUserById(id);
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @PatchMapping("/{id}/email")
    public ResponseEntity<User> updateEmail(@PathVariable UUID id, @RequestBody String newEmail) {
        return userService.updateEmail(id, newEmail);
    }

    @PatchMapping("/{id}/profile-photo")
    public ResponseEntity<User> updateProfilePhoto(@PathVariable UUID id, @RequestBody String newProfilePhotoUrl) {
        return userService.updateProfilePhoto(id, newProfilePhotoUrl);
    }

    @PatchMapping("/{id}/password")
    public ResponseEntity<?> updatePassword(@PathVariable UUID id, @RequestBody Map<String, String> passwords) {
        return userService.updatePassword(id, passwords);
    }

    @PatchMapping("/{id}/banner")
    public ResponseEntity<User> updateBanner(@PathVariable UUID id, @RequestBody String newBannerUrl) {
        return userService.updateBanner(id, newBannerUrl);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable UUID id) {
        return userService.deleteUser(id);
    }
     @PostMapping("/{userId}/follow/{followId}")
    public ResponseEntity<?> followUser(@PathVariable UUID userId, @PathVariable UUID followId) {
        return userService.followUser(userId, followId);
    }

    @DeleteMapping("/{userId}/unfollow/{followId}")
    public ResponseEntity<?> unfollowUser(@PathVariable UUID userId, @PathVariable UUID followId) {
        return userService.unfollowUser(userId, followId);
    }

    @GetMapping("/{userId}/followers")
    public ResponseEntity<?> getFollowers(@PathVariable UUID userId) {
        return userService.getFollowers(userId);
    }

    @GetMapping("/{userId}/following")
    public ResponseEntity<?> getFollowing(@PathVariable UUID userId) {
        return userService.getFollowing(userId);
    }
}

