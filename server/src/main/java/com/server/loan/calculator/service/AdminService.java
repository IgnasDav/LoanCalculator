package com.server.loan.calculator.service;

import com.server.loan.calculator.model.AdminData;
import com.server.loan.calculator.validator.AdminDataValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

<<<<<<< HEAD
=======
import java.math.BigDecimal;

>>>>>>> f8de320 (merge with java)
@Service
@RequiredArgsConstructor
public class AdminService {

    private final AdminDataValidator adminDataValidator;

<<<<<<< HEAD
    public AdminData returnAllValues () {
        AdminData adminData = new AdminData();
        adminDataValidator.validateAdminInput(adminData);
        return adminData;
=======
    public void addToDatabase (AdminData adminData) {
        adminDataValidator.validateAdminInput(adminData);
    }

    public AdminData fetchFromDatabase () {
        return new AdminData(new BigDecimal("3.654"), "2023-04-21", new BigDecimal("1.99"), new BigDecimal("500"),
                new BigDecimal("12"), new BigDecimal("50"), new BigDecimal("20000"), new BigDecimal("800000"), new BigDecimal("35000"),
                new BigDecimal("20"));
>>>>>>> f8de320 (merge with java)
    }
}
