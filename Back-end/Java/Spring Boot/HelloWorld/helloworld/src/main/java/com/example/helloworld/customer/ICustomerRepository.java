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

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * Provides optional methods over the basic CRUD operations.
 *
 * @author lseli
 */
@Repository
public interface ICustomerRepository extends JpaRepository<Customer, Long> {

    /**
     * Retrieves an optional customer by name.
     *
     * @param name
     * @return an optional customer
     */
    @Query("SELECT c FROM Customer c WHERE c.name = :name")
    Optional<Customer> findCustomerByName(@Param("name") String name);
}
