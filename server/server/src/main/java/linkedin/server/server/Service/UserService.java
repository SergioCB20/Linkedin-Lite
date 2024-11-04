package linkedin.server.server.Service;

import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import linkedin.server.server.Model.Account;
import linkedin.server.server.Model.Follower;
import linkedin.server.server.Model.User;
import linkedin.server.server.Repository.UserRepository;
import java.util.function.Consumer;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public ResponseEntity<User> getUserById(UUID id) {
        return userRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public ResponseEntity<User> updateEmail(UUID id, String newEmail) {
        return updateUserField(id, user -> user.setEmail(newEmail));
    }

    public ResponseEntity<User> updateProfilePhoto(UUID id, String newProfilePhotoUrl) {
        return updateUserField(id, user -> user.setProfile_photo_url(newProfilePhotoUrl));
    }

    public ResponseEntity<?> updatePassword(UUID id, Map<String, String> passwords) {
        String oldPassword = passwords.get("oldPassword");
        String newPassword = passwords.get("newPassword");

        return userRepository.findById(id)
                .map(user -> {
                    if (user.getPassword().equals(oldPassword)) {
                        user.setPassword(newPassword);
                        return ResponseEntity.ok(userRepository.save(user));
                    } else {
                        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(null);
                    }
                })
                .orElse(ResponseEntity.notFound().build());
    }

    public ResponseEntity<User> updateBanner(UUID id, String newBannerUrl) {
        return updateUserField(id, user -> user.setBanner_url(newBannerUrl));
    }

    public ResponseEntity<?> deleteUser(UUID id) {
        return userRepository.findById(id)
                .map(user -> {
                    userRepository.delete(user);
                    return ResponseEntity.noContent().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

    public ResponseEntity<?> followUser(UUID userId, UUID followId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        User followUser = userRepository.findById(followId)
                .orElseThrow(() -> new RuntimeException("User to follow not found"));
    
        if (isFollowing(userId, followId)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Already following the user");
        }
    
        Follower follower = new Follower(UUID.randomUUID(), user, followUser);
        user.getFollowing().add(follower);
        userRepository.save(user);
        return ResponseEntity.ok().build();
    }

    private boolean isFollowing(UUID userId, UUID followId) {
        User user = userRepository.findById(userId).orElse(null);
        return user.getFollowing().stream()
                .anyMatch(f -> f.getFollower().getId().equals(followId));
    }

    public ResponseEntity<?> unfollowUser(UUID userId, UUID followId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!isFollowing(userId, followId)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Users are not following each other");
        }

        Follower followerToRemove = user.getFollowing()
                .stream()
                .filter(follower -> follower.getFollower().getId().equals(followId))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Follower relationship not found"));

        user.getFollowing().remove(followerToRemove);
        userRepository.save(user);
        return ResponseEntity.ok("Successfully unfollowed user");
    }

    public ResponseEntity<Set<Account>> getFollowers(UUID userId) {
        return userRepository.findById(userId)
            .map(user -> {
                Set<Follower> followers = user.getFollowers();
                Set<Account> followerAccounts = followers.stream()
                        .map(Follower::getFollower)
                        .collect(Collectors.toSet());
                return ResponseEntity.ok(followerAccounts);
            })
            .orElse(ResponseEntity.notFound().build());
    }

    public ResponseEntity<Set<Account>> getFollowing(UUID userId) {
        return userRepository.findById(userId)
            .map(user -> {
                Set<Follower> following = user.getFollowing();
                Set<Account> followingAccounts = following.stream()
                        .map(Follower::getFollowed)
                        .collect(Collectors.toSet());
                return ResponseEntity.ok(followingAccounts);
            })
            .orElse(ResponseEntity.notFound().build());
    }

    private ResponseEntity<User> updateUserField(UUID id, Consumer<User> updateFunction) {
        return userRepository.findById(id)
                .map(user -> {
                    updateFunction.accept(user);
                    return ResponseEntity.ok(userRepository.save(user));
                })
                .orElse(ResponseEntity.notFound().build());
    }
}

