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
@RequestMapping(path = "api/client")
public class ClientController {

    /**
     * Default constructor.
     *
     * @param clientService
     */
    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    /**
     * Inserts synchronously a client.
     *
     * @param client
     */
    @PostMapping
    public void createClient(@RequestBody Client client) {
        this.clientService.createClient(client);
    }

    /**
     * Retrieves synchronously a set of clients.
     *
     * @return clients
     */
    @GetMapping
    public List<Client> retrieveClients() {
        return this.clientService.retrieveClients();
    }

    /**
     * Updates synchronously a client.
     *
     * @param clientId
     * @param name
     * @param totalPurchased
     */
    @PutMapping(path = "{clientId}")
    public void updateClient(
            @PathVariable("clientId") Long clientId,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) Integer totalPurchased
    ) {
        this.clientService.updateClient(clientId, name, totalPurchased);
    }
    
    /**
     * Deletes synchronously a client.
     *
     * @param clientId
     */
    @DeleteMapping(path = "{clientId}")
    public void deleteClient(@PathVariable("clientId") Long clientId) {
        this.clientService.deleteClient(clientId);
    }

    private final ClientService clientService; // Client service
}
