import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    private final UserRepository userRepository; 
    @GetMapping("/users")
    public List<User> getUsers() {
        return (list<User>) userRepository.findAll();
    }

    @PostMapping("/users")
    public addUser(@RequestBody User user) {
        userRepository.save(user); 
    }
}
