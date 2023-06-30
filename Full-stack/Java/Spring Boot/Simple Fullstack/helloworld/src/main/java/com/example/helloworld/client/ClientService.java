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
public class ClientService {

    /**
     * Main constructor.
     *
     * @param clientRepository
     */
    @Autowired
    public ClientService(IClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    /**
     * Inserts synchronously a client.
     *
     * @param client
     */
    public void createClient(Client client) {
        Optional<Client> clientOptional = this.clientRepository.findClientByName(
                client.getName()
        ); // Check if the client already exists, it is not a good idea to check by name, but it is just a basic example

        if (clientOptional.isPresent()) { // If the client already exists
            throw new NoSuchElementException("The client already exists"); // Throw an exception
        }

        this.clientRepository.save(client); // Save the client
    }

    /**
     * Retrieves synchronously a set of clients.
     *
     * @return a list of clients
     */
    public List<Client> retrieveClients() {
        return this.clientRepository.findAll(); // Retrieve all the clients
    }

    /**
     * Updates synchronously a client.
     *
     * @param clientId
     * @return a client
     */
    @Transactional
    void updateClient(Long clientId, String name, Integer totalPurchased) {
        Client client = this.clientRepository.findById(clientId)
                .orElseThrow(() -> new EntityNotFoundException( // Check if the client exists
                String.format(
                        "The client with id %d does not exists",
                        clientId
                )
        )); // Retrieve the client

        if (name != null
                && name.length() > 0
                && !Objects.equals(client.getName(), name)) { // If the name is not null, not empty and different from the current name
            client.setName(name); // Update the name
        }

        if (totalPurchased != null && totalPurchased > 0 && !Objects.equals(client.getTotalPurchased(), totalPurchased)) { // If the total purchased is not null, greater than 0 and different from the current total purchased
            client.setTotalPurchased(totalPurchased); // Update the total purchased
        }
    }

    /**
     * Deletes synchronously a client.
     *
     * @param clientId
     */
    void deleteClient(Long clientId) {
        boolean exists = this.clientRepository.existsById(clientId); // Check if the client exists

        if (!exists) { // If the client does not exists
            throw new EntityNotFoundException("The client does not exists"); // Throw an exception
        }

        this.clientRepository.deleteById(clientId); // Delete the client
    }

    private final IClientRepository clientRepository; // Client repository
}
