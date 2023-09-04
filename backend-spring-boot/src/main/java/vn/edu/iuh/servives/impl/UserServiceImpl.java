package vn.edu.iuh.servives.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vn.edu.iuh.models.User;
import vn.edu.iuh.repositories.UserRepository;
import vn.edu.iuh.servives.UserService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;


    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }
}
