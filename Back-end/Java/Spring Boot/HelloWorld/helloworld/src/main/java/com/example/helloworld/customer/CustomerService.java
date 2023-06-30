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

import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Objects;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Provides methods to execute CRUD operations.
 *
 * @author lseli
 */
@Service
public class CustomerService {

    /**
     * Main constructor.
     *
     * @param customerRepository
     */
    @Autowired
    public CustomerService(ICustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    /**
     * Inserts synchronously a customer.
     *
     * @param customer
     */
    public void createCustomer(Customer customer) {
        Optional<Customer> customerOptional = this.customerRepository.findCustomerByName(
                customer.getName()
        ); // Check if the customer already exists, it is not a good idea to check by name, but it is just a basic example

        if (customerOptional.isPresent()) { // If the customer already exists
            throw new NoSuchElementException("The customer already exists"); // Throw an exception
        }

        this.customerRepository.save(customer); // Save the customer
    }

    /**
     * Retrieves synchronously a set of customers.
     *
     * @return a list of customers
     */
    public List<Customer> retrieveCustomers() {
        return this.customerRepository.findAll(); // Retrieve all the customers
    }

    /**
     * Updates synchronously a customer.
     *
     * @param customerId
     * @return a customer
     */
    @Transactional
    void updateCustomer(Long customerId, String name, Integer totalPurchased) {
        Customer customer = this.customerRepository.findById(customerId)
                .orElseThrow(() -> new EntityNotFoundException( // Check if the customer exists
                String.format(
                        "The customer with id %d does not exists",
                        customerId
                )
        )); // Retrieve the customer

        if (name != null
                && name.length() > 0
                && !Objects.equals(customer.getName(), name)) { // If the name is not null, not empty and different from the current name
            customer.setName(name); // Update the name
        }

        if (totalPurchased != null
                && totalPurchased > 0
                && !Objects.equals(
                        customer.getTotalPurchased(),
                        totalPurchased
                )) { // If the total purchased is not null, greater than 0 and different from the current total purchased
            customer.setTotalPurchased(totalPurchased); // Update the total purchased
        }
    }

    /**
     * Deletes synchronously a customer.
     *
     * @param customerId
     */
    void deleteCustomer(Long customerId) {
        boolean exists = this.customerRepository.existsById(customerId); // Check if the customer exists

        if (!exists) { // If the customer does not exists
            throw new EntityNotFoundException("The customer does not exists"); // Throw an exception
        }

        this.customerRepository.deleteById(customerId); // Delete the customer
    }

    private final ICustomerRepository customerRepository; // Customer repository
}
