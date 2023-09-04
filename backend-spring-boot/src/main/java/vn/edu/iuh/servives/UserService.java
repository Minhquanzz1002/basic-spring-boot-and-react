package vn.edu.iuh.servives;

import vn.edu.iuh.models.User;

import java.util.List;

public interface UserService {
    User save(User user);
    List<User> findAll();
}
