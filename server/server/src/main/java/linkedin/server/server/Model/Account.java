package linkedin.server.server.Model;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)
@Getter
@Setter
@Table(name = "accounts")
public abstract class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String banner_url;
    private String profile_photo_url;
    @NotNull
    private String name;
    @NotNull
    private String email;
    @NotNull
    private String password;
    private String description;
    @OneToMany(mappedBy = "follower")
    private Set<Follower> followers = new HashSet<>();

    @OneToMany(mappedBy = "followed")
    private Set<Follower> following = new HashSet<>();

    @OneToMany
    private ArrayList<Notification> notifications = new ArrayList<>();
}