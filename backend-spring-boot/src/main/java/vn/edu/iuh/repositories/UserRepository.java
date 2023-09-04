package vn.edu.iuh.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.edu.iuh.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
