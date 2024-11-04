package linkedin.server.server.Service;

import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import linkedin.server.server.Model.Account;
import linkedin.server.server.Model.Follower;
import linkedin.server.server.Model.Company;
import linkedin.server.server.Repository.CompanyRepository;
import java.util.function.Consumer;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository companyRepository;

    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    public ResponseEntity<Company> getCompanyById(UUID id) {
        return companyRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    public Company createCompany(Company company) {
        return companyRepository.save(company);
    }

    public ResponseEntity<Company> updateCompanyName(UUID id, String newName) {
        return updateCompanyField(id, company -> company.setName(newName));
    }

    public ResponseEntity<?> deleteCompany(UUID id) {
        return companyRepository.findById(id)
                .map(company -> {
                    companyRepository.delete(company);
                    return ResponseEntity.noContent().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

    private ResponseEntity<Company> updateCompanyField(UUID id, Consumer<Company> updateFunction) {
        return companyRepository.findById(id)
                .map(company -> {
                    updateFunction.accept(company);
                    return ResponseEntity.ok(companyRepository.save(company));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    private boolean isFollowing(UUID companyId, UUID followId) {
        Company Company = companyRepository.findById(companyId).orElse(null);
        return Company.getFollowing().stream()
                .anyMatch(f -> f.getFollower().getId().equals(followId));
    }

    public ResponseEntity<?> unfollowUser(UUID companyId, UUID followId) {
        Company Company = companyRepository.findById(companyId)
                .orElseThrow(() -> new RuntimeException("Company not found"));

        if (!isFollowing(companyId, followId)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Users are not following each other");
        }

        Follower followerToRemove = Company.getFollowing()
                .stream()
                .filter(follower -> follower.getFollower().getId().equals(followId))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Follower relationship not found"));

        Company.getFollowing().remove(followerToRemove);
        companyRepository.save(Company);
        return ResponseEntity.ok("Successfully unfollowed Company");
    }

    public ResponseEntity<Set<Account>> getFollowers(UUID companyId) {
        return companyRepository.findById(companyId)
                .map(Company -> {
                    Set<Follower> followers = Company.getFollowers();
                    Set<Account> followerAccounts = followers.stream()
                            .map(Follower::getFollower)
                            .collect(Collectors.toSet());
                    return ResponseEntity.ok(followerAccounts);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    public ResponseEntity<Set<Account>> getFollowing(UUID companyId) {
        return companyRepository.findById(companyId)
                .map(Company -> {
                    Set<Follower> following = Company.getFollowing();
                    Set<Account> followingAccounts = following.stream()
                            .map(Follower::getFollowed)
                            .collect(Collectors.toSet());
                    return ResponseEntity.ok(followingAccounts);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    public ResponseEntity<?> followUser(UUID companyId, UUID followId) {
        Company Company = companyRepository.findById(companyId)
                .orElseThrow(() -> new RuntimeException("Company not found"));
        Company followUser = companyRepository.findById(followId)
                .orElseThrow(() -> new RuntimeException("Company to follow not found"));

        if (isFollowing(companyId, followId)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Already following the Company");
        }

        Follower follower = new Follower(UUID.randomUUID(), Company, followUser);
        Company.getFollowing().add(follower);
        companyRepository.save(Company);
        return ResponseEntity.ok().build();
    }

}
