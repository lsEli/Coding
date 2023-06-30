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
package com.example.helloworld.client;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

/**
 * Provides properties based on the client entity.
 *
 * @author lseli
 */
@Entity
@Table
public class Client {

    /**
     * Default constructor.
     */
    public Client() {
    }

    /**
     * Main constructor.
     *
     * @param name
     * @param totalPurchased
     */
    public Client(String name, Integer totalPurchased) {
        this.name = name;
        this.totalPurchased = totalPurchased;
    }

    /**
     * Full constructor.
     *
     * @param code
     * @param name
     * @param totalPurchased
     */
    Client(Long code, String name, Integer totalPurchased) {
        this.code = code;
        this.name = name;
        this.totalPurchased = totalPurchased;
    }

    /**
     * Gets the client code.
     *
     * @return the client code
     */
    public Long getCode() {
        return code;
    }

    /**
     * Sets the client code.
     *
     * @param code
     */
    void setCode(Long code) {
        this.code = code;
    }

    /**
     * Gets the client name.
     *
     * @return the client name
     */
    public String getName() {
        return name;
    }

    /**
     * Sets the client name.
     *
     * @param name
     */
    void setName(String name) {
        this.name = name;
    }

    /**
     * Gets the total purchased.
     *
     * @return the total purchased
     */
    public Integer getTotalPurchased() {
        return totalPurchased;
    }

    /**
     * Sets the total purchased.
     *
     * @param totalPurchased
     */
    void setTotalPurchased(Integer totalPurchased) {
        this.totalPurchased = totalPurchased;
    }

    /**
     * Returns a string representation of the object.
     *
     * @return a string representation of the object
     */
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Client{");
        sb.append("code=").append(code);
        sb.append(", name=").append(name);
        sb.append(", totalPurchased=").append(totalPurchased);
        sb.append('}');

        return sb.toString();
    }

    @Id
    @SequenceGenerator(
            name = "client_sequence",
            sequenceName = "client_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            generator = "client_sequence",
            strategy = GenerationType.SEQUENCE
    )
    private Long code; // Primary key
    private String name; // Client name
    private Integer totalPurchased; // Total purchased
}
