package com.onlineshop.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlineshop.bean.Login;
import com.onlineshop.repository.LoginRepository;

@Service
public class LoginService {
	
	@Autowired
	LoginRepository loginRepository;
	
	public String signIn(Login login) {
		
		Optional<Login> result = loginRepository.findById(login.getEmailid());
		
		if(result.isPresent()) {
			
			Login ll = result.get();
			if(ll.getPassword().equals(login.getPassword())) {
				if(login.getTypeOfUser().equals("admin")) {
					return "Admin successfully login";
				}else if(login.getTypeOfUser().equals(ll.getTypeOfUser())) {
					return "User sucessfully login";
				}
				
				else {
					return "Invalid details";
				}
			}else {
				return "Invaild Password";
			}
			
			
		}else {
			return "Invaild emailid";
		}
		
	}
	
	public String signUp(Login login) {
		
       Optional<Login> result = loginRepository.findById(login.getEmailid());
		
		if(result.isPresent()) {
			return "Email id Already exists";
			
		}else {
			//Login ll = result.get();
			if(login.getTypeOfUser().equals("admin")) {
				return "You can't create admin account";
			}else {
				loginRepository.save(login);
				return "Account created successfully";
			}
			
		}
		
	}

}
