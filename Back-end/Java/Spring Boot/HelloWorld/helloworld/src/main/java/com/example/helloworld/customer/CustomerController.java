/*
 * Copyright 2023 lseli.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.example.helloworld.customer;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Provides methods that responds to HTTP requests.
 *
 * @author lseli
 */
@RestController
@RequestMapping(path = "api/customer")
public class CustomerController {

    /**
     * Default constructor.
     *
     * @param customerService
     */
    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    /**
     * Inserts synchronously a customer.
     *
     * @param customer
     */
    @PostMapping
    public void createCustomer(@RequestBody Customer customer) {
        this.customerService.createCustomer(customer);
    }

    /**
     * Retrieves synchronously a set of customers.
     *
     * @return customers
     */
    @GetMapping
    public List<Customer> retrieveCustomers() {
        return this.customerService.retrieveCustomers();
    }

    /**
     * Updates synchronously a customer.
     *
     * @param customerId
     * @param name
     * @param totalPurchased
     */
    @PutMapping(path = "{customerId}")
    public void updateCustomer(
            @PathVariable("customerId") Long customerId,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) Integer totalPurchased
    ) {
        this.customerService.updateCustomer(customerId, name, totalPurchased);
    }
    
    /**
     * Deletes synchronously a customer.
     *
     * @param customerId
     */
    @DeleteMapping(path = "{customerId}")
    public void deleteCustomer(@PathVariable("customerId") Long customerId) {
        this.customerService.deleteCustomer(customerId);
    }

    private final CustomerService customerService; // Customer service
}
