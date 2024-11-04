package linkedin.server.server.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import linkedin.server.server.Service.CompanyService;
import linkedin.server.server.Model.Company;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/companies")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @GetMapping
    public List<Company> getAllCompanies() {
        return companyService.getAllCompanies();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Company> getCompanyById(@PathVariable UUID id) {
        return companyService.getCompanyById(id);
    }

    @PostMapping
    public Company createCompany(@RequestBody Company company) {
        return companyService.createCompany(company);
    }

    @PutMapping("/{id}/name")
    public ResponseEntity<Company> updateCompanyName(@PathVariable UUID id, @RequestBody String newName) {
        return companyService.updateCompanyName(id, newName);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCompany(@PathVariable UUID id) {
        return companyService.deleteCompany(id);
    }

    @PostMapping("/{companyId}/follow/{followId}")
    public ResponseEntity<?> followUser(@PathVariable UUID companyId, @PathVariable UUID followId) {
        return companyService.followUser(companyId, followId);
    }

    @DeleteMapping("/{companyId}/unfollow/{followId}")
    public ResponseEntity<?> unfollowUser(@PathVariable UUID companyId, @PathVariable UUID followId) {
        return companyService.unfollowUser(companyId, followId);
    }

    @GetMapping("/{companyId}/followers")
    public ResponseEntity<?> getFollowers(@PathVariable UUID companyId) {
        return companyService.getFollowers(companyId);
    }

    @GetMapping("/{companyId}/following")
    public ResponseEntity<?> getFollowing(@PathVariable UUID companyId) {
        return companyService.getFollowing(companyId);
    }
}

