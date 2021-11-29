import javax.annotation.Generated;

import org.springframework.data.annotation.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy=GeneratedType.AUTO)
    private long id; 
    private final string name;
    private final string email; 
}
